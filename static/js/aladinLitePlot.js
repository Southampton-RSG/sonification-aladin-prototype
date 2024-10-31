let synth_mono, synth_metal;

// ----------------
// Need a user action to initiate the audio, you can't do it automatically
// ----------------
document.getElementById("startButton").onclick = function() {
  // ----------------
  // Hide the start button, show the map
  // ----------------
  Tone.start();
  document.getElementById("aladinDiv").classList.add("show");

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
      }
    },
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
    },
  ).toDestination();
};


// ----------------
// Basic scalers from values into playable frequencies.
// ----------------
const FREQ_BASE_PARALLAX = 0;
const FREQ_MULT_PARALLAX = 30;
const FREQ_BASE_PROPER_MOTION = 0;
const FREQ_MULT_PROPER_MOTION = 20;
const PIANO_BASE_PARALLAX = 1;
const PIANO_MULT_PARALLAX = 1;


/*******************************************************************************
 * Scales an input 'piano key number' into an audio frequency.
 * 
 * Piano key numbers go from 1-88, so we need to clamp the 'proposed' key number
 * to a valid one.
 * @link https://en.wikipedia.org/wiki/Piano_key_frequencies
 *  
 * @param {Number} value      The value, a physical quantity.
 * @param {Number} key_base   The 'base' key for that value.
 * @param {Number} key_mult   The multiplier from that value to the key.
 * @returns                   The corresponding audio frequency.
 *******************************************************************************/
function valueScaleToPianoFreq(value, key_base, key_mult) {
  var key_number = key_base + key_mult * value;
  key_number = Math.min(Math.max(key_number, 1), 88);
  return 2**((key_number-49)/12) * 440.0;
}


/**
 * Scales an input value into a sound frequency.
 * 
 * @param {Number} value      The value, a physical quantity.
 * @param {Number} freq_base  The 'base frequency' for that value.
 * @param {Number} freq_mult  The multiplier from the value to the frequency.
 * @returns                   A scaled audio frequency.
 *******************************************************************************/
function valueScaleToFreq(value, freq_base, freq_mult) {
  return freq_base + freq_mult * value;
}


/*******************************************************************************
 * Scales an input parallax into a sound frequency.
 * 
 * Handles low negative parallaxes (which are just down to error on the measurement).
 * @see valueScaleToFreq
 * 
 * @param {Number} parallax   The parallax of a source, clamped to minimum 0.
 * @returns                   A scaled audio frequency.
 *******************************************************************************/
function parallaxToFreq(parallax) {
  return valueScaleToFreq(
    Math.max(0, parallax), FREQ_BASE_PARALLAX, FREQ_MULT_PARALLAX
  );
}



/*******************************************************************************
 * Scales an input proper motion into a sound frequency.
 * 
 * @see valueScaleToFreq
 * 
 * @param {Number} proper_motion   The proper motion of a source.
 * @returns                        A scaled audio frequency.
 *******************************************************************************/
function properMotionToFreq(proper_motion) {
  return valueScaleToFreq(
    proper_motion, FREQ_BASE_PROPER_MOTION, FREQ_MULT_PROPER_MOTION
  );
}


// ----------------
// There are some spurious large negative parallaxes in the catalog that need removing
// ----------------
const PARALLAX_NEGATIVE_THRESHOLD = -0.1;

/*******************************************************************************
 * 
 * @param {Source} source 
 * @returns 
 *******************************************************************************/
function filterGaiaCatalog(source) {
  if (source.data.parallax > PARALLAX_NEGATIVE_THRESHOLD) {
    return true
  }
  // Considered filtering by phot_g_mean_flux or others
  // https://gea.esac.esa.int/archive/documentation/GDR2/Gaia_archive/chap_datamodel/sec_dm_main_tables/ssec_dm_gaia_source.html
}


// ----------------
// Sonify the object
// ----------------
const TIME_MULT_FLUX = 0.1;
const TIME_BASE_MONO = 0.3;
const TIME_BASE_METAL= 0.1;
/*******************************************************************************
 * Sonifies a source.
 * 
 * @param {Source}  Aladin.source to be sonified.
 *******************************************************************************/
function sonifySource(source) {
  if (source.data && source.data.parallax) {
    var source_data = source.data;
    var parallax = Number(source.data.parallax);
    // var luminosity = Number(source.data.lum_val);

    var proper_motion = Math.sqrt(Number(source_data.pmra)**2 + Number(source_data.pmdec)**2);
    var maximum_flux = Math.log10(
      Math.max(source_data.phot_g_mean_flux, source_data.phot_bp_mean_flux, source_data.phot_rp_mean_flux)
    );
    var timeMono = TIME_BASE_MONO + (TIME_MULT_FLUX * maximum_flux);
    var timeMetal = TIME_BASE_METAL + (TIME_MULT_FLUX * maximum_flux);

    synth_mono.triggerAttackRelease(
      parallaxToFreq(parallax), timeMono,
    );
    synth_metal.triggerAttackRelease(
      properMotionToFreq(proper_motion), timeMetal,
    );
   
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

    var screenPos = aladin.world2pix(source.ra, source.dec);
    var pulseDiv = document.createElement("div");
    pulseDiv.setAttribute('class','pulse'), document.getElementById('aladinLiteDiv').appendChild(pulseDiv), pulseDiv.style.top=screenPos[1]+'px',pulseDiv.style.left=screenPos[0]+'px';
    // pulseDiv.style.setProperty('--duration', "1.5s")
    setTimeout(function(){pulseDiv.remove();}, 2000);
  }
}

/*******************************************************************************
 * Returns the highest mean flux detected in any band.
 * 
 * @param {object} data   The data object for a source
 * @returns               The maximum of the G, BP, and RP-band fluxes.
 *******************************************************************************/
function getMaxMeanFlux(data) {
  return Math.max(
    data.phot_bp_mean_flux, data.phot_g_mean_flux, data.phot_rp_mean_flux
  );
}

// ----------------
// Initialise Aladin, load and filter Gaia, then set up the mouseover code
// ----------------
var aladin;
var fov_component;


A.init.then(() => {
  aladin = A.aladin(
    '#aladinLiteDiv', 
    {
      target:'gal center', fov: 50, cooFrame: 'galactic',
      showLayersControl: false, showStatusBar: false, showProjectionControl: false,
      showCooLocation: false, showReticle: false, showFrame: false, showCooGrid: false, 
      showTable: false,
    }
  );
 

  // ----------------
  // Define custom draw function
  // We can use this to e.g. filter by size relative to FOV
  // ----------------
  const DEGREES_30  = Math.PI * 1.0 / 6;
  const DEGREES_45  = Math.PI * 1.5 / 6;
  const DEGREES_60  = Math.PI * 2.0 / 6;

  const DEGREES_120 = Math.PI * 4.0 / 6;
  const DEGREES_135 = Math.PI * 4.5 / 6;
  const DEGREES_150 = Math.PI * 5.0 / 6;

  const DEGREES_210 = Math.PI * 7.0 / 6;
  const DEGREES_225 = Math.PI * 7.5 / 6;
  const DEGREES_240 = Math.PI * 8.0 / 6;

  const DEGREES_300 = Math.PI * 10.0 / 6;
  const DEGREES_315 = Math.PI * 10.5 / 6;
  const DEGREES_330 = Math.PI * 11.0 / 6;

  const MARKER_RADIUS = 6;
  const MARKER_LINE_WIDTH = 2;
  const MARKER_INNER = 2;
  const MARKER_ALPHA = 0.75;

  /*****************************************************************************
   * Draws a custom marker
   * 
   * @param {Source} source          The source object the marker is for.
   * @param {CanvasRenderingContext2D} canvasCtx  The drawing canvas context.
   * @param {ViewParams} viewParams  The parameters for the current Aladin view.
   *****************************************************************************/
  function drawFunction(source, canvasCtx, viewParams) {
    // canvasCtx.strokeStyle = 'goldenrod';
    // canvasCtx.lineWidth = MARKER_LINE_WIDTH;
    // canvasCtx.globalAlpha = 1.0;
  
    // canvasCtx.beginPath();
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, 0, Math.PI * 2);
    // canvasCtx.closePath();
    // canvasCtx.stroke();

    // =========================================================================
    // Crosshair Design
    // =========================================================================
    // canvasCtx.beginPath();
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_30,  DEGREES_45);
    // canvasCtx.lineTo(source.x+MARKER_INNER, source.y+MARKER_INNER);
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_45,  DEGREES_60);
    // canvasCtx.closePath();
    // canvasCtx.stroke();

    // canvasCtx.beginPath();
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_120, DEGREES_135);
    // canvasCtx.lineTo(source.x-MARKER_INNER, source.y+MARKER_INNER);
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_135, DEGREES_150);
    // canvasCtx.closePath();
    // canvasCtx.stroke();

    // canvasCtx.beginPath();
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_210, DEGREES_225);
    // canvasCtx.lineTo(source.x-MARKER_INNER, source.y-MARKER_INNER);
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_225, DEGREES_240);
    // canvasCtx.closePath();
    // canvasCtx.stroke();

    // canvasCtx.beginPath();
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_300, DEGREES_315);
    // canvasCtx.lineTo(source.x+MARKER_INNER, source.y-MARKER_INNER);
    // canvasCtx.arc(source.x, source.y, MARKER_RADIUS, DEGREES_315, DEGREES_330);
    // canvasCtx.closePath();
    // canvasCtx.stroke();
    // =========================================================================
  };

  var gaiaCatalog = A.catalogHiPS(
    'http://axel.u-strasbg.fr/HiPSCatService/I/345/gaia2', 
    options={
      name: 'Gaia',
      limit: 100,  // Not working?
      displayLabel: false,
      onClick: 'showPopup',
      filter: filterGaiaCatalog, 
      shape: drawFunction,
    },
  );
  aladin.addCatalog(gaiaCatalog);        

  aladin.on('zoomChanged', function(object) {
    fov_component = Math.cos(object * Math.PI * 2);
    // gaiaCatalog.reportChange();  // For if we need to update the catalog filters
  })

  aladin.on('objectClicked', function(object) {
    if (object) {
      console.log(object);
      sonifySource(object);

      var view = object.catalog.view;
      view.aladin.popup.setTitle(
        "ID: "+object.data.source_id
      );
      view.aladin.popup.setText(
        "Luminosity: "+object.data.lum_val
      );
      view.aladin.popup.setSource(object);
      view.aladin.popup.show();
    }
  })

  aladin.on('objectHovered', function(object) {
    if (object) {
      sonifySource(object);
    }
  });
});  