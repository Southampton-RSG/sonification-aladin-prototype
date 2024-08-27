let synth_mono, synth_metal;

// ----------------
// Need a user action to initiate the audio, you can't do it automatically
// ----------------
document.getElementById("startButton").onclick = function() {
  // ----------------
  // Hide the start button, show the map
  // ----------------
  Tone.start();
  document.getElementById("startButton").style.display = "none";
  document.getElementById("aladinLiteDiv").style.display = "inline-block";

  // ----------------
  // Initialise the Synthesiser used to play the parallax notes
  // The inner Synth is the actual instrument, the polysynth is a wrapper to let multiple play at once
  // Settings from: https://tonejs.github.io/examples/monoSynth
  // ----------------
  synth_mono = new Tone.PolySynth(
    Tone.MonoSynth, {
      volume: -8,
      oscillator: {
        type: "square8",
      },
      envelope: {
        attack: 0.05,
        decay: 0.3,
        sustain: 0.4,
        release: 0.8,
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.7,
        sustain: 0.1,
        release: 0.8,
        baseFrequency: 300,
        octaves: 4,
      },
    }
  ).toDestination();

  synth_metal = new Tone.PolySynth(
    Tone.MetalSynth, {
      harmonicity: 12,
      resonance: 800,
      modulationIndex: 20,
      envelope: {
        decay: 0.4,
      },
      volume: -30,
    }
  ).toDestination();
};

// ----------------
// https://en.wikipedia.org/wiki/Piano_key_frequencies
// Piano goes from key 1-88, parallax mooostly goes from ~0-20 but hits 40-50-160 occasionally!
// Hmmm, this is a problem.
// ----------------
const KEY_BASE_PARALLAX = 1;
const KEY_MULT_PARALLAX = 1;
function pianoKeyNumberToFreq(key_number) {
  return 2**((key_number-49)/12) * 440.0;
}

// ----------------
// Basic scalers from values into playable frequencies.
// ----------------
const FREQ_BASE_PARALLAX = 0;
const FREQ_MULT_PARALLAX = 30;
const FREQ_BASE_PROPER_MOTION = 0;
const FREQ_MULT_PROPER_MOTION = 20;
function valueScaleToFreq(value, freq_base, freq_mult) {
  return freq_base + freq_mult * value;
}

// ----------------
// Central parallax to frequency converter (easy to tweak without editing logic below)
// Handles low negative parallaxes (which are just down to error on the measurement)
// ----------------
function parallaxToFreq(parallax) {
  if (parallax < 0) {
    parallax = 0;
  }
  return valueScaleToFreq(parallax, FREQ_BASE_PARALLAX, FREQ_MULT_PARALLAX);
}

// ----------------
// Scales proper motion to frequency.
// ----------------
function properMotionToFreq(proper_motion) {
  return valueScaleToFreq(proper_motion, FREQ_BASE_PROPER_MOTION, FREQ_MULT_PROPER_MOTION);
}

// ----------------
// There are some spurious large negative parallaxes in the catalog that need removing
// ----------------
const PARALLAX_NEGATIVE_THRESHOLD = -0.1;
function filterGaiaCatalog(source) {
  return source.data.parallax > PARALLAX_NEGATIVE_THRESHOLD;
}

// ----------------
// Debug; track the min and max parallax of moused-over sources
// ----------------
let parallax_max = -999;
let parallax_min = 999;
let lum_max = -999;
let lum_min = 999;
let pm_max = -999;
let pm_min = 999;

// ----------------
// Initialise Aladin, load and filter Gaia, then set up the mouseover code
// ----------------
let aladin;
A.init.then(() => {
  aladin = A.aladin(
    '#aladinLiteDiv', 
    {
      target:'gal center', fov: 50, 
      showLayersControl: false, showStatusBar: false, showProjectionControl: false,
      showCooLocation: false, showReticle: false, showFrame: false, showCooGrid: false, 
    }
  );

  // ----------------
  // Define custom draw function
  // We can use this to e.g. filter by size relative to FOV
  // ----------------
  var drawFunction = function(source, canvasCtx, viewParams) {
      canvasCtx.beginPath();
      canvasCtx.arc(source.x, source.y, 6, 0, 2 * Math.PI, false);
      canvasCtx.closePath();
      canvasCtx.strokeStyle = 'goldenrod';
      canvasCtx.lineWidth = 0.5;
      canvasCtx.globalAlpha = 0.2,
      canvasCtx.stroke();
  };

  var gaiaCatalog = A.catalogHiPS(
    'http://axel.u-strasbg.fr/HiPSCatService/I/345/gaia2', 
    {
      // sourceSize: 12, 
      name: 'Gaia', style: 'plus', displayLabel: false,
      filter: filterGaiaCatalog, shape: drawFunction,
    },
  );
  aladin.addCatalog(gaiaCatalog);        

  aladin.on('objectClicked', function(object) {
    console.log(object);
  })

  aladin.on('objectHovered', function(object) {
    var parallax, luminosity, proper_motion;

    if (object) {
      // ----------------
      // Debug/testing code
      // ----------------
      console.log(object);

      // ----------------
      // This block was written for if we wanted to store/generate sounds for each source elsewhere.
      // ----------------
      // var sourceId = 'audioElement'+object.data.source_id;
      // var audioElement = document.getElementById(sourceId);
      // if (!audioElement) {
      //   var audioElement = document.createElement('audio');
      //   audioElement.setAttribute('id', sourceId);
      //   audioElement.setAttribute('src', "https://www.mywebsite.soton.ac.uk/api/source/"+object.data.source_id);
      // }
      // audioElement.play();

      // ----------------
      // Play a tone based on the parallax of the source
      // ----------------
      if (object.data) {
        if (object.data.parallax) {
          parallax = Number(object.data.parallax);
          luminosity = Number(object.data.lum_val);
          proper_motion = Math.sqrt(Number(object.data.pmra)**2 + Number(object.data.pmdec)**2);

          // ----------------
          // Tracking the maxima and minima in a lazy way; getting the distribution from the data would be better
          // ----------------
          if(parallax > parallax_max) {
            parallax_max = parallax;
          }
          if (parallax < parallax_min) {
            parallax_min = parallax;
          }
          if (luminosity < lum_min) {
            lum_min = luminosity;
          }
          if (luminosity > lum_max) {
            lum_max = luminosity;
          }
          if (proper_motion > pm_max) {
            pm_max = proper_motion;
          }
          if (proper_motion < pm_min) {
            pm_min = proper_motion;
          }

          synth_mono.triggerAttackRelease(
            parallaxToFreq(parallax),
            0.3
          );
          synth_metal.triggerAttackRelease(
            properMotionToFreq(proper_motion),
            0.1
          )
          console.log("Parallax: "+parallax+", luminosity: "+luminosity+", proper motion: "+proper_motion);
          console.log("Ranges - parallax: "+parallax_min+" - "+parallax_max+", luminosity: "+lum_min+" - "+lum_max+", proper motion: "+pm_min+" - "+pm_max);
        }
      }
    }
  });
});  