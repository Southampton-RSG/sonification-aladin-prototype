//import { id_to_name, greek_name_to_unicode, otype_to_description, constellation_abbreviations } from './data.mjs';
const constellation_abbreviations = {
  "And": "Andromeda",
  "Ant": "Antlia",
  "Aps": "Apus",
  "Aqr": "Aquarius",
  "Aql": "Aquila",
  "Ara": "Ara",
  "Ari": "Aries",
  "Aur": "Auriga",
  "Boo": "Boötes",
  "Cae": "Caelum",
  "Cam": "Camelopardalis",
  "Cnc": "Cancer",
  "CVn": "Canes Venatici",
  "CMa": "Canis Major",
  "CMi": "Canis Minor",
  "Cap": "Capricornus",
  "Car": "Carina",
  "Cas": "Cassiopeia",
  "Cen": "Centaurus",
  "Cep": "Cepheus",
  "Cet": "Cetus",
  "Cha": "Chamaleon",
  "Cir": "Circinus",
  "Col": "Columba",
  "Com": "Coma Berenices",
  "CrA": "Corona Australis",
  "CrB": "Corona Borealis",
  "Crv": "Corvus",
  "Crt": "Crater",
  "Cru": "Crux ",
  "Cyg": "Cygnus",
  "Del": "Delphinus",
  "Dor": "Dorado",
  "Dra": "Draco",
  "Equ": "Equuleus",
  "Eri": "Eridanus",
  "For": "Fornax",
  "Gem": "Gemini",
  "Gru": "Grus",
  "Her": "Hercules",
  "Hor": "Horologium",
  "Hya": "Hydra",
  "Hyi": "Hydrus",
  "Ind": "Indus",
  "Lac": "Lacerta",
  "Leo": "Leo",
  "LMi": "Leo Minor",
  "Lep": "Lepus",
  "Lib": "Libra",
  "Lup": "Lupus",
  "Lyn": "Lynx",
  "Lyr": "Lyra",
  "Men": "Mensa",
  "Mic": "Microscopium",
  "Mon": "Monoceros",
  "Mus": "Musca",
  "Nor": "Norma",
  "Oct": "Octans",
  "Oph": "Ophiucus",
  "Ori": "Orion",
  "Pav": "Pavo",
  "Peg": "Pegasus",
  "Per": "Perseus",
  "Phe": "Phoenix",
  "Pic": "Pictor",
  "Psc": "Pisces",
  "PsA": "Pisces Austrinus",
  "Pup": "Puppis",
  "Pyx": "Pyxis",
  "Ret": "Reticulum",
  "Sge": "Sagitta",
  "Sgr": "Sagittarius",
  "Sco": "Scorpius",
  "Scl": "Sculptor",
  "Sct": "Scutum",
  "Ser": "Serpens",
  "Sex": "Sextans",
  "Tau": "Taurus",
  "Tel": "Telescopium",
  "Tri": "Triangulum",
  "TrA": "Triangulum Australe",
  "Tuc": "Tucana",
  "UMa": "Ursa Major",
  "UMi": "Ursa Minor",
  "Vel": "Vela",
  "Vir": "Virgo",
  "Vol": "Volans",
  "Vul": "Vulpecula"
}

const otype_to_type = {
  "Id": "Description",
  "Label": "Description",
  "?": "Object of Unknown Nature",
  "Unknown": "Object of Unknown Nature",
  "pr*": "Pre-Main Sequence Star",
  "..1": "Pre-Main Sequence Star",
  "..10": "Barium Star",
  "..11": "Dwarf Carbon Star",
  "..12": "Carbon-Enhanced Metal Poor Star",
  "Al*": "Eclipsing Binary of Algol type",
  "..13": "Eclipsing Binary of Algol type",
  "bL*": "Eclipsing Binary of beta Lyr type",
  "..14": "Eclipsing Binary of beta Lyr type",
  "WU*": "Eclipsing Binary of W UMa type",
  "..15": "Eclipsing Binary of W UMa type",
  "NL*": "Nova-like Binary",
  "..16": "Nova-like Binary",
  "DN*": "Dwarf Nova",
  "..17": "Dwarf Nova",
  "DQ*": "CV of DQ Her type  Intermediate polar.",
  "..18": "CV of DQ Her type  Intermediate polar.",
  "AM*": "CV of AM CVn type",
  "..19": "CV of AM CVn type",
  "LBV": "Luminous Blue Variable",
  "..2": "Luminous Blue Variable",
  "..20": "Irregular Variable with rapid variations",
  "Fl*": "Flare Star",
  "..21": "Flare Star",
  "..22": "Star showing Eclipses by its Planet",
  "*iC": "Star towards a Cluster",
  "..23": "Star towards a Cluster",
  "*iA": "Star towards an Association",
  "..24": "Star towards an Association",
  "*iN": "Star towards a Nebula",
  "..25": "Star towards a Nebula",
  "*i*": "Star in double system",
  "..26": "Star in double system",
  "BNe": "Bright Nebula",
  "..27": "Bright Nebula",
  "HzG": "Galaxy with high redshift",
  "..28": "Galaxy with high redshift",
  "ERO": "ERO/VRO, Extremely/Very Red Object",
  "..29": "ERO/VRO, Extremely/Very Red Object",
  "FU*": "FU Ori Variable",
  "..3": "FU Ori Variable",
  "..30": "ULIRG, Ultra Luminous Infrared Galaxy",
  "LyA": "Ly\u0391 Absorption Line System",
  " DLA": " DLA Absorption Line System",
  " mAL": " mAL Absorption Line System",
  " LLS": " LLS Absorption Line System",
  " BAL": " BAL Absorption Line System",
  "..31": "Absorption Line System",
  "red": "Very Red Source",
  "..32": "Very Red Source",
  "..4": "Red Clump Star",
  "sr*": "Semi-Regular Variable",
  "..5": "Semi-Regular Variable",
  "..6": "O-rich AGB Star",
  "ZZ*": "Pulsating White Dwarf",
  "..7": "Pulsating White Dwarf",
  "ELMWD": "Extremely Low Mass White Dwarf",
  "..8": "Extremely Low Mass White Dwarf",
  "..9": "CH Star",
  "*": "Star",
  "Star": "Star",
  "**": "Double or Multiple Star",
  "a2*": "\u03912 CVn Variable",
  "alf2CVnV*": "\u03912 CVn Variable",
  "AB*": "Asymptotic Giant Branch Star",
  "AGB*": "Asymptotic Giant Branch Star",
  "Ae*": "Herbig Ae/Be Star",
  "AGN": "Active Galaxy Nucleus",
  "As*": "Association of Stars",
  "Association": "Association of Stars",
  "bC*": "beta Cep Variable",
  "bCepV*": "beta Cep Variable",
  "bCG": "Blue Compact Galaxy",
  "BlueCompactG": "Blue Compact Galaxy",
  "BD*": "Brown Dwarf",
  "BrownD*": "Brown Dwarf",
  "Be*": "Be Star",
  "BH": "Black Hole",
  "BlackHole": "Black Hole",
  "BiC": "Brightest Galaxy in a Cluster (BCG)",
  "BrightestCG": "Brightest Galaxy in a Cluster (BCG)",
  "Bla": "Blazar",
  "Blazar": "Blazar",
  "BLL": "BL Lac",
  "BLLac": "BL Lac",
  "blu": "Blue Object",
  "blue": "Blue Object",
  "BS*": "Blue Straggler",
  "BlueStraggler": "Blue Straggler",
  "bub": "Bubble",
  "Bubble": "Bubble",
  "BY*": "BY Dra Variable",
  "BYDraV*": "BY Dra Variable",
  "C*": "Carbon Star",
  "cC*": "Classical Cepheid Variable",
  "ClassicalCep": "Classical Cepheid Variable",
  "Ce*": "Cepheid Variable",
  "Cepheid": "Cepheid Variable",
  "CGb": "Cometary Globule / Pillar",
  "ComGlob": "Cometary Globule / Pillar",
  "CGG": "Compact Group of Galaxies",
  "Compact_Gr_G": "Compact Group of Galaxies",
  "Cl*": "Cluster of Stars",
  "Cluster*": "Cluster of Stars",
  "Cld": "Cloud",
  "Cloud": "Cloud",
  "ClG": "Cluster of Galaxies",
  "cm": "Centimetric Radio Source",
  "cmRad": "Centimetric Radio Source",
  "cor": "Dense Core",
  "denseCore": "Dense Core",
  "CV*": "Cataclysmic Binary",
  "CataclyV*": "Cataclysmic Binary",
  "DNe": "Dark Cloud (nebula)",
  "DarkNeb": "Dark Cloud (nebula)",
  "dS*": "delta Sct Variable",
  "delSctV*": "delta Sct Variable",
  "EB*": "Eclipsing Binary",
  "EclBin": "Eclipsing Binary",
  "El*": "Ellipsoidal Variable",
  "EllipVar": "Ellipsoidal Variable",
  "Em*": "Emission-line Star",
  "EmLine*": "Emission-line Star",
  "EmG": "Emission-line galaxy",
  "EmissionG": "Emission-line galaxy",
  "EmO": "Emission Object",
  "EmObj": "Emission Object",
  "Er*": "Eruptive Variable",
  "Eruptive*": "Eruptive Variable",
  "err": "Not an Object (Error, Artefact, ...)",
  "Inexistent": "Not an Object (Error, Artefact, ...)",
  "ev": "Transient Event",
  "Transient": "Transient Event",
  "Ev*": "Evolved Star",
  "Evolved*": "Evolved Star",
  "FIR": "Far-IR source (\u03bb >= 30 \u00b5m)",
  "FarIR": "Far-IR source (\u03bb >= 30 \u00b5m)",
  "flt": "Interstellar Filament",
  "Filament": "Interstellar Filament",
  "G": "Galaxy",
  "Galaxy": "Galaxy",
  "gam": "Gamma-ray Source",
  "gamma": "Gamma-ray Source",
  "gB": "Gamma-ray Burst",
  "gammaBurst": "Gamma-ray Burst",
  "gD*": "gamma Dor Variable",
  "gammaDorV*": "gamma Dor Variable",
  "GiC": "Galaxy towards a Cluster of Galaxies",
  "GtowardsCl": "Galaxy towards a Cluster of Galaxies",
  "GiG": "Galaxy towards a Group of Galaxies",
  "GtowardsGroup": "Galaxy towards a Group of Galaxies",
  "GiP": "Galaxy in Pair of Galaxies",
  "GinPair": "Galaxy in Pair of Galaxies",
  "glb": "Globule (low-mass dark cloud)",
  "Globule": "Globule (low-mass dark cloud)",
  "GlC": "Globular Cluster",
  "GlobCluster": "Globular Cluster",
  "gLe": "Gravitational Lens",
  "GravLens": "Gravitational Lens",
  "gLS": "Gravitational Lens System (lens+images)",
  "GravLensSystem": "Gravitational Lens System (lens+images)",
  "GNe": "Nebula",
  "GalNeb": "Nebula",
  "GrG": "Group of Galaxies",
  "GroupG": "Group of Galaxies",
  "grv": "Gravitational Source",
  "Gravitation": "Gravitational Source",
  "GWE": "Gravitational Wave Event",
  "GravWaveEvent": "Gravitational Wave Event",
  "H2G": "HII Galaxy",
  "HIIG": "HII Galaxy",
  "HB*": "Horizontal Branch Star",
  "HorBranch*": "Horizontal Branch Star",
  "HH": "Herbig-Haro Object",
  "HerbigHaroObj": "Herbig-Haro Object",
  "HI": "HI (21cm) Source",
  "HII": "HII Region",
  "HIIReg": "HII Region",
  "HS*": "Hot Subdwarf",
  "HotSubdwarf": "Hot Subdwarf",
  "HV*": "High Velocity Star",
  "HighVel*": "High Velocity Star",
  "HVC": "High-velocity Cloud",
  "HVCld": "High-velocity Cloud",
  "HXB": "High Mass X-ray Binary",
  "HighMassXBin": "High Mass X-ray Binary",
  "IG": "Interacting Galaxies",
  "InteractingG": "Interacting Galaxies",
  "IR": "Infra-Red Source",
  "Infrared": "Infra-Red Source",
  "Ir*": "Irregular Variable",
  "IrregularV*": "Irregular Variable",
  "ISM": "Interstellar Medium Object",
  "LeG": "Gravitationally Lensed Image of a Galaxy",
  "LensedG": "Gravitationally Lensed Image of a Galaxy",
  "LeI": "Gravitationally Lensed Image",
  "LensedImage": "Gravitationally Lensed Image",
  "LeQ": "Gravitationally Lensed Image of a Quasar",
  "LensedQ": "Gravitationally Lensed Image of a Quasar",
  "Lev": "(Micro)Lensing Event",
  "LensingEv": "(Micro)Lensing Event",
  "LIN": "LINER-type Active Galaxy Nucleus",
  "LINER": "LINER-type Active Galaxy Nucleus",
  "LM*": "Low-mass Star",
  "Low-Mass*": "Low-mass Star",
  "LP*": "Long-Period Variable",
  "LongPeriodV*": "Long-Period Variable",
  "LSB": "Low Surface Brightness Galaxy",
  "LowSurfBrghtG": "Low Surface Brightness Galaxy",
  "LXB": "Low Mass X-ray Binary",
  "LowMassXBin": "Low Mass X-ray Binary",
  "Ma*": "Massive Star",
  "Massiv*": "Massive Star",
  "Mas": "Maser",
  "Maser": "Maser",
  "MGr": "Moving Group",
  "MouvGroup": "Moving Group",
  "Mi*": "Mira Variable",
  "Mira": "Mira Variable",
  "MIR": "Mid-IR Source (3 to 30 \u00b5m)",
  "MidIR": "Mid-IR Source (3 to 30 \u00b5m)",
  "mm": "Millimetric Radio Source",
  "mmRad": "Millimetric Radio Source",
  "MoC": "Molecular Cloud",
  "MolCld": "Molecular Cloud",
  "mR": "Metric Radio Source",
  "metricRad": "Metric Radio Source",
  "MS*": "Main Sequence Star",
  "MainSequence*": "Main Sequence Star",
  "mul": "Composite Object, Blend",
  "Blend": "Composite Object, Blend",
  "N*": "Neutron Star",
  "Neutron*": "Neutron Star",
  "NIR": "Near-IR Source (\u03bb < 3 \u00b5m)",
  "NearIR": "Near-IR Source (\u03bb < 3 \u00b5m)",
  "No*": "Classical Nova",
  "Nova": "Classical Nova",
  "OH*": "OH/IR Star",
  "OH/IR*": "OH/IR Star",
  "OpC": "Open Cluster",
  "OpenCluster": "Open Cluster",
  "Opt": "Optical Source",
  "Optical": "Optical Source",
  "Or*": "Orion Variable",
  "OrionV*": "Orion Variable",
  "out": "Outflow",
  "Outflow": "Outflow",
  "pA*": "Post-AGB Star",
  "post-AGB*": "Post-AGB Star",
  "PaG": "Pair of Galaxies",
  "PairG": "Pair of Galaxies",
  "PCG": "Proto Cluster of Galaxies",
  "protoClG": "Proto Cluster of Galaxies",
  "Pe*": "Chemically Peculiar Star",
  "ChemPec*": "Chemically Peculiar Star",
  "Pl": "Extra-solar Planet",
  "Planet": "Extra-solar Planet",
  "PM*": "High Proper Motion Star",
  "HighPM*": "High Proper Motion Star",
  "PN": "Planetary Nebula",
  "PlanetaryNeb": "Planetary Nebula",
  "PoC": "Part of Cloud",
  "PartofCloud": "Part of Cloud",
  "PoG": "Part of a Galaxy",
  "PartofG": "Part of a Galaxy",
  "Psr": "Pulsar",
  "Pulsar": "Pulsar",
  "Pu*": "Pulsating Variable",
  "PulsV*": "Pulsating Variable",
  "QSO": "Quasar",
  "Rad": "Radio Source",
  "Radio": "Radio Source",
  "rB": "Radio Burst",
  "radioBurst": "Radio Burst",
  "RC*": "R CrB Variable",
  "RCrBV*": "R CrB Variable",
  "reg": "Region defined in the Sky",
  "Region": "Region defined in the Sky",
  "rG": "Radio Galaxy",
  "RadioG": "Radio Galaxy",
  "RG*": "Red Giant Branch star",
  "RGB*": "Red Giant Branch star",
  "RNe": "Reflection Nebula",
  "RefNeb": "Reflection Nebula",
  "Ro*": "Rotating Variable",
  "RotV*": "Rotating Variable",
  "RR*": "RR Lyrae Variable",
  "RRLyrae": "RR Lyrae Variable",
  "RS*": "RS CVn Variable",
  "RSCVnV*": "RS CVn Variable",
  "RV*": "RV Tauri Variable",
  "RVTauV*": "RV Tauri Variable",
  "S*": "S Star",
  "s*b": "Blue Supergiant",
  "BlueSG": "Blue Supergiant",
  "s*r": "Red Supergiant",
  "RedSG": "Red Supergiant",
  "s*y": "Yellow Supergiant",
  "YellowSG": "Yellow Supergiant",
  "SB*": "Spectroscopic Binary",
  "SBG": "Starburst Galaxy",
  "StarburstG": "Starburst Galaxy",
  "SCG": "Supercluster of Galaxies",
  "SuperClG": "Supercluster of Galaxies",
  "SFR": "Star Forming Region",
  "StarFormingReg": "Star Forming Region",
  "sg*": "Evolved Supergiant",
  "Supergiant": "Evolved Supergiant",
  "sh": "Interstellar Shell",
  "HIshell": "Interstellar Shell",
  "smm": "Sub-Millimetric Source",
  "smmRad": "Sub-Millimetric Source",
  "SN*": "SuperNova",
  "Supernova": "SuperNova",
  "SNR": "SuperNova Remnant",
  "SNRemnant": "SuperNova Remnant",
  "St*": "Stellar Stream",
  "Stream": "Stellar Stream",
  "SX*": "SX Phe Variable",
  "SXPheV*": "SX Phe Variable",
  "Sy*": "Symbiotic Star",
  "Symbiotic*": "Symbiotic Star",
  "Sy1": "Seyfert 1 Galaxy",
  "Seyfert1": "Seyfert 1 Galaxy",
  "Sy2": "Seyfert 2 Galaxy",
  "Seyfert2": "Seyfert 2 Galaxy",
  "SyG": "Seyfert Galaxy",
  "Seyfert": "Seyfert Galaxy",
  "TT*": "T Tauri Star",
  "TTauri*": "T Tauri Star",
  "ULX": "Ultra-luminous X-ray Source",
  "UV": "UV-emission Source",
  "V*": "Variable Star",
  "Variable*": "Variable Star",
  "var": "Variable source",
  "Variable": "Variable source",
  "vid": "Underdense Region of the Universe",
  "Void": "Underdense Region of the Universe",
  "WD*": "White Dwarf",
  "WhiteDwarf": "White Dwarf",
  "WR*": "Wolf-Rayet",
  "WolfRayet*": "Wolf-Rayet",
  "WV*": "Type II Cepheid Variable",
  "Type2Cep": "Type II Cepheid Variable",
  "X": "X-ray Source",
  "XB*": "X-ray Binary",
  "XrayBin": "X-ray Binary",
  "Y*O": "Young Stellar Object",
  "YSO": "Young Stellar Object"
};


const greek_name_to_unicode = {
  "Alf": "Alpha (\u0391)", 
  "Bet": "Beta (\u0392)", 
  "Gam": "Gamma (\u0393)", 
  "Del": "Delta (\u0394)", 
  "Eps": "Epsilon (\u0395)", 
  "Zet": "Zeta (\u0396)", 
  "Eta": "Eta (\u0397)", 
  "Tet": "Theta (\u0398)", 
  "Iot": "Iota (\u0399)", 
  "Kap": "Kappa (\u039A)", 
  "Lam": "Lambda (\u039B)", 
  "Mu.": "Mu (\u039C)", 
  "Nu.": "Nu (\u039D)", 
  "Ksi": "Xi (\u039E)", 
  "Omi": "Omicron (\u039F)", 
  "Pi.": "Pi (\u03A0)", 
  "Rho": "Rho (\u03A1)", 
  "Sig": "Sigma (\u03A3)", 
  "Tau": "Tau (\u03A4)", 
  "Ups": "Upsilon (\u03A5)", 
  "Phi": "Phi (\u03A6)", 
  "Khi": "Chi (\u03A7)", 
  "Psi": "Psi (\u03A8)", 
  "Ome": "Omega (\u03A9)", 
  "alf": "alpha (\u03B1)", 
  "bet": "beta (\u03B2)", 
  "gam": "gamma (\u03B3)", 
  "del": "delta (\u03B4)", 
  "eps": "epsilon (\u03B5)", 
  "zet": "zeta (\u03B6)", 
  "eta": "eta (\u03B7)", 
  "tet": "theta (\u03B8)", 
  "iot": "iota (\u03B9)", 
  "kap": "kappa (\u03BA)", 
  "lam": "lambda (\u03BB)", 
  "mu.": "nu (\u03BC)", 
  "nu.": "mu (\u03BD)", 
  "ksi": "xi (\u03BE)", 
  "omi": "omicron (\u03BF)", 
  "pi.": "pi (\u03C0)", 
  "rho": "rho (\u03C1)", 
  "sig": "sigma (\u03C3)", 
  "tau": "tau (\u03C4)", 
  "ups": "upsilon (\u03C5)", 
  "phi": "phi (\u03C6)", 
  "khi": "chi (\u03C7)", 
  "psi": "psi (\u03C8)", 
  "ome": "omega (\u03C9)"
};


let synth_parallax, synth_pm;

/*******************************************************************************
 * Select which type of data should be sonified on mouseover. 
 *  
 * @param {object} input  The selection of data to sonify.
 *******************************************************************************/
function sonifyVarChanged(input) {
  sonify_var = input.dataset.sonify
}
/** The variable to sonify */
let sonify_var = "parallax";


/*******************************************************************************
 * Change the volume of the synth objects. 
 *  
 * @param {object} input  The selection of data to sonify.
 *******************************************************************************/
function sonifyVolumeChanged(input) {
  console.log(input+' input');
  volume_adjustment = Number(input.value);
  console.log('volume: '+volume_adjustment);

  if (volume_adjustment > -1) {
    Tone.Destination.mute = false;
    sonify_volume_icon_low.style.display = "block";
    sonify_volume_icon_off.style.display = "none";

    console.log(Tone.Destination.volume.value);

    Tone.Destination.volume.value = SYNTH_VOLUME_RANGE * volume_adjustment;

  } else {
    Tone.Destination.mute = true;
    sonify_volume_icon_low.style.display = "none";
    sonify_volume_icon_off.style.display = "block";
  }
}

/** Icons for low/off volume */
let sonify_volume_icon_low = document.getElementById("sonifyVolumeLow");
let sonify_volume_icon_off = document.getElementById("sonifyVolumeOff");


/** Sonification volume slider range */
SYNTH_VOLUME_RANGE = 8;

/** The base volumes for the actual synths, for modification by user scaling */
SYNTH_VOLUME_BASE_PARALLAX = -15.0;
SYNTH_VOLUME_BASE_PM = -25.0;

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
  // synth_parallax = new Tone.PolySynth(
  //   Tone.MonoSynth, {
  //     volume: SYNTH_VOLUME_BASE_PARALLAX,
  //     oscillator: {
  //       type: "square8",
  //     },
  //     envelope: {
  //       attack: 0.05,
  //       decay: 0.3,
  //       sustain: 0.4,
  //       release: 0.8,
  //     },
  //     filterEnvelope: {
  //       attack: 0.001,
  //       decay: 0.7,
  //       sustain: 0.1,
  //       release: 0.8,
  //       baseFrequency: 300,
  //       octaves: 4,
  //     }
  //   },
  // ).toDestination();

  synth_parallax = new Tone.PolySynth(
    Tone.MetalSynth, {
      harmonicity: 12,
      resonance: 800,
      modulationIndex: 20,
      envelope: {
        decay: 0.4,
      },
      volume: SYNTH_VOLUME_BASE_PM,
    },
  ).toDestination();


  synth_pm = new Tone.PolySynth(
    Tone.MetalSynth, {
      harmonicity: 12,
      resonance: 800,
      modulationIndex: 20,
      envelope: {
        decay: 0.4,
      },
      volume: SYNTH_VOLUME_BASE_PM,
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


/*******************************************************************************
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

var response_text;

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
    var maximum_flux = Math.log10(
      Math.max(source_data.phot_g_mean_flux, source_data.phot_bp_mean_flux, source_data.phot_rp_mean_flux)
    );
    
    switch(sonify_var) {
      case "parallax":
        synth_parallax.triggerAttackRelease(
          parallaxToFreq(Number(source_data.parallax)), 
          TIME_BASE_MONO + (TIME_MULT_FLUX * maximum_flux),
        );
        break;

      case "pm":
        synth_pm.triggerAttackRelease(
          properMotionToFreq(
            Math.sqrt(Number(source_data.pmra)**2 + Number(source_data.pmdec)**2)
          ), 
          TIME_BASE_METAL + (TIME_MULT_FLUX * maximum_flux),
        );
        break;
    }
    
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

  aladin.on('objectClicked', async function(object) {
    if (object) {
      // console.log("Object Clicked:");
      // console.log(object);
      sonifySource(object);
      console.log(object);

      const object_ident = "GaiaDR3 "+object.data.source_id;

      const SB_OPTIONS = [
        "obj.cooN=off",  // No coordinates
        "otypedisp=V",  // Full type name
        "obj.fluxsel=off",  // No fluxes
        "obj.bibsel=off",  // No bibliography
        "obj.sizesel=off",  // No extended object sizes
        "obj.spsel=off",  // No spectral type
        "obj.mtsel=off",  // No morphological type
        "obj.messel=off",  // No list of measurements
        "obj.notesel=off",  // No list of notes
      ];
      const SB_QUERY_URL = "https://simbad.cds.unistra.fr/simbad/sim-id?output.format=ascii&" + SB_OPTIONS.join('&');

      const response = await fetch(
          SB_QUERY_URL + "&Ident=" + object_ident,
          { method: 'GET', mode: 'cors', headers: {} }
      );
      const response_text = await response.text();
      const response_lines = response_text.split('\n');

      var view = object.catalog.view;
      if (response_lines[0][0] == '!') {
        // If the first character of the response is '!' it's an error
        view.aladin.popup.setTitle("Gaia DR3 " + object.data.source_id);
        view.aladin.popup.setText(
            '<a target="_blank" href="about.html#info-gaia-nodetail">No further details</a>'
        );

      } else {
        // We've got back a horrible chunk of ASCII we need to parse
        var general_details = response_lines[5].split('---');
        var star_id = general_details[0].slice(6).trim();
        var star_name;
        var star_type = general_details[1].trim();

        // Is there a 'NAME' entry in the list of IDs?
        var identifier_lines = response_lines.slice(17, -1);
        for (var idx = 0; idx < identifier_lines.length; idx++) {
          var identifiers = identifier_lines[idx].split('/\s\s+/');
          for (var idx2 = 0; idx2 < identifiers.length; idx2++) {
            var identity = identifiers[idx2].split(' ');
            if (identity[0] == "NAME") {
              star_name = identity[1];
            }
          }
        }

        if (!star_name) {
          // If it doesn't have a 'fixed' name, use the ID but it may be abbreviated (e.g. "*V bet Cyg")
          // First, we split it into bits
          var star_id_parts = star_id.split(' ');
          // Create a copy, to update - otherwise removing bits gets messy
          var star_name_parts = star_id_parts.slice();

          // Are any of the bits a constellation abbreviation (e.g. "cyg")? If so, expand them
          for (var idx=0; idx < star_id_parts.length; idx++) {
            for (const [abbreviation, full] of Object.entries(constellation_abbreviations)) {
              if (star_id_parts.at(idx) == abbreviation) {
                star_name_parts.splice(idx, 1, full);
              }
            }
          }

          // Are any of the bits a SIMBAD-style greek letter (e.g. "bet")? If so, correct them
          for (var idx=0; idx < star_id_parts.length; idx++) {
            for (const [letter_name, unicode] of Object.entries(greek_name_to_unicode)) {
              if(star_id_parts[idx] == letter_name) {
                star_name_parts.splice(idx, 1, unicode);
              }
            }
          }

          // Is it prepended by an object type (e.g. "*V")? If so, drop it
          for (const otype of Object.keys(otype_to_type)) {
            if (star_id_parts.at(0) == otype) {
              star_name_parts.splice(0, 1);
            }
          }
          star_name = star_name_parts.join(' ');
        }

        const SB_DETAIL_URL ="https://simbad.cds.unistra.fr/simbad/sim-id?output.format=html&Ident=";

        view.aladin.popup.setTitle(star_name);
        view.aladin.popup.setText(
            star_type+"<br>See more detail on <a href='"+SB_DETAIL_URL+object_ident+"'>SIMBAD</a>"
        );
      }

      view.aladin.popup.setSource(object);
      view.aladin.popup.show();
    }
  })

  aladin.on('objectHovered', function (object) {
    if (object) {
      sonifySource(object);
    }
  });
});  