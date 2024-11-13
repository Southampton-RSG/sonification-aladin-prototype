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

const otype_blacklist = [
  "Pla", "Planet",
]


const english_to_greek = {
  "Alpha": "\u0391", 
  "Beta": "\u0392", 
  "Gamma": "\u0393", 
  "Delta": "\u0394", 
  "Epsilon": "\u0395", 
  "Zeta": "\u0396", 
  "Eta": "\u0397", 
  "Theta": "\u0398", 
  "Iota": "\u0399", 
  "Kappa": "\u039A", 
  "Lambda": "\u039B", 
  "Mu": "\u039C", 
  "Nu": "\u039D", 
  "Xi": "\u039E", 
  "Omicron": "\u039F", 
  "Pi": "\u03A0", 
  "Rho": "\u03A1", 
  "Sigma": "\u03A3", 
  "Tau": "\u03A4", 
  "Upsilon": "\u03A5", 
  "upsih": "\u03D2", 
  "Phi": "\u03A6", 
  "Chi": "\u03A7", 
  "Psi": "\u03A8", 
  "Omega": "\u03A9", 
  "alpha": "\u03B1", 
  "beta": "\u03B2", 
  "gamma": "\u03B3", 
  "delta": "\u03B4", 
  "epsilon": "\u03B5", 
  "zeta": "\u03B6", 
  "eta": "\u03B7", 
  "theta": "\u03B8", 
  "thetasym": "\u03D1", 
  "iota": "\u03B9", 
  "kappa": "\u03BA", 
  "lambda": "\u03BB", 
  "mu": "\u03BC", 
  "nu": "\u03BD", 
  "xi": "\u03BE", 
  "omicronE": "\u03BF", 
  "pi": "\u03C0", 
  "piv": "\u03D6", 
  "rho": "\u03C1", 
  "sigmaf": "\u03C2", 
  "sigma": "\u03C3", 
  "tau": "\u03C4", 
  "upsilon": "\u03C5", 
  "phi": "\u03C6", 
  "chi": "\u03C7", 
  "psi": "\u03C8", 
  "omega": "\u03C9"
}


const id_to_name = {
  "Lyn": "Absolutno",
  "XO-5": "Absolutno",
  "\u03b81 Eri": "Acamar",
  "HR 897": "Acamar",
  "\u03b1 Eri": "Achernar",
  "HR 472": "Achernar",
  "\u03b7 Cas": "Achird",
  "HR 219": "Achird",
  "\u03b21 Sco": "Acrab",
  "HR 5984": "Acrab",
  "\u03b1 Cru": "Acrux",
  "HR 4730": "Acrux",
  "\u03b1 Cnc": "Acubens",
  "HR 3572": "Acubens",
  "\u03b6 Leo": "Adhafera",
  "HR 4031": "Adhafera",
  "\u03b5 CMa": "Adhara",
  "HR 2618": "Adhara",
  "\u03be And": "Adhil",
  "HR 390": "Adhil",
  "\u03b5 Tau": "Ain",
  "HR 1409": "Ain",
  "\u03bd1 Sgr": "Ainalrami",
  "HR 7116": "Ainalrami",
  "": "Zembra",
  "HD 95086": "Aiolos",
  "\u03b7 Lyr": "Aladfar",
  "HR 7298": "Aladfar",
  "_ Ser": "Alasia",
  "HD 168746": "Alasia",
  "\u03c0 Sgr": "Albaldah",
  "HR 7264": "Albaldah",
  "\u03b5 Aqr": "Albali",
  "HR 7950": "Albali",
  "\u03b1 Cyg": "Deneb",
  "HR 7417": "Albireo",
  "\u03b1 Crv": "Alchiba",
  "HR 4623": "Alchiba",
  "80 UMa": "Alcor",
  "HR 5062": "Alcor",
  "\u03b7 Tau": "Alcyone",
  "HR 1165": "Alcyone",
  "\u03b1 Tau": "Aldebaran",
  "HR 1457": "Aldebaran",
  "\u03b1 Cep": "Alderamin",
  "HR 8162": "Alderamin",
  "\u03b3 Gru": "Aldhanab",
  "HR 8353": "Aldhanab",
  "\u03b6 Dra": "Aldhibah",
  "HR 6396": "Aldhibah",
  "\u03b5 Del": "Aldulfin",
  "HR 7852": "Aldulfin",
  "\u03b2 Cep": "Alfirk",
  "HR 8238": "Alfirk",
  "\u03b12 Cep": "Algedi",
  "HR 7754": "Algedi",
  "\u03b3 Peg": "Algenib",
  "HR 39": "Algenib",
  "\u03b31 Leo": "Algieba",
  "HR 4057": "Algieba",
  "\u03b2 Per": "Algol",
  "HR 936": "Algol",
  "\u03b4 Crv": "Algorab",
  "HR 4757": "Algorab",
  "\u03b3 Gem": "Alhena",
  "HR 2421": "Alhena",
  "\u03b5 UMa": "Alioth",
  "HR 4905": "Alioth",
  "\u03b5 Cyg": "Aljanah",
  "HR 7949": "Aljanah",
  "\u03b7 UMa": "Alkaid",
  "HR 5191": "Alkaid",
  "\u03bc Boo": "Alkalurops",
  "HR 5733": "Alkalurops",
  "\u03ba UMa": "Alkaphrah",
  "HR 3594": "Alkaphrah",
  "\u03c5 Peg": "Alkarab",
  "HR 8905": "Alkarab",
  "\u03b1 Crt": "Alkes",
  "HR 4287": "Alkes",
  "\u03b5 Aur": "Almaaz",
  "HR 1605": "Almaaz",
  "\u03b3 And": "Almach",
  "HR 603": "Almach",
  "\u03b1 Gru": "Alnair",
  "HR 8425": "Alnair",
  "\u03b32 Sgr": "Alnasl",
  "HR 6746": "Alnasl",
  "\u03b5 Ori": "Alnilam",
  "HR 1903": "Alnilam",
  "\u03b6 Ori": "Alnitak",
  "HR 1948": "Alnitak",
  "\u03c3 Sco": "Alniyat",
  "HR 6084": "Alniyat",
  "\u03b1 Hya": "Alphard",
  "HR 3748": "Alphard",
  "\u03b1 CrB": "Alphecca",
  "HR 5793": "Alphecca",
  "\u03b1 And": "Alpheratz",
  "HR 15": "Alpheratz",
  "\u03b7 Psc": "Alpherg",
  "HR 437": "Alpherg",
  "\u03bc Dra": "Alrakis",
  "HR 6370": "Alrakis",
  "\u03b1 Psc": "Alrescha",
  "HR 596": "Alrescha",
  "- Dra": "Alruba",
  "HR 6618": "Alruba",
  "\u03c3 Dra": "Alsafi",
  "HR 7462": "Alsafi",
  "31 Lyn": "Alsciaukat",
  "HR 3275": "Alsciaukat",
  "\u03b4 Vel": "Alsephina",
  "HR 3485": "Alsephina",
  "\u03b2 Aql": "Alshain",
  "HR 7602": "Alshain",
  "\u03bd Cap": "Alshat",
  "HR 7773": "Alshat",
  "\u03b1 Aql": "Altair",
  "HR 7557": "Altair",
  "\u03b4 Dra": "Altais",
  "HR 7310": "Altais",
  "\u03bb Leo": "Alterf",
  "HR 3773": "Alterf",
  "\u03b7 CMa": "Aludra",
  "HR 2827": "Aludra",
  "\u03be UMa": "Alula Australis",
  "HR 4375": "Alula Australis",
  "\u03bd UMa": "Alula Borealis",
  "HR 4377": "Alula Borealis",
  "\u03b81 Ser": "Alya",
  "HR 7141": "Alya",
  "\u03be Gem": "Alzirr",
  "HR 2484": "Alzirr",
  "_ CMa": "Atakoraka",
  "HD 43197": "Amadioha",
  "_ Crt": "Amansinaya",
  "WASP-34": "Amansinaya",
  "_ Peg": "Anadolu",
  "WASP-52": "Anadolu",
  "\u03b8 Aqr": "Ancha",
  "HR 8499": "Ancha",
  "\u03c42 Eri": "Angetenar",
  "HR 850": "Angetenar",
  "_ UMa": "Aniara",
  "HD 102956": "Aniara",
  "\u03b1  Phe": "Ankaa",
  "HR 99": "Ankaa",
  "\u03b1 Vul": "Anser",
  "HR 7405": "Anser",
  "\u03b1 Sco": "Antares",
  "HR 6134": "Antares",
  "\u03b8 Aql": "Antinous",
  "HD 191692": "Antinous",
  "_ Boo": "Arcal\u00eds",
  "HD 131496": "Arcal\u00eds",
  "\u03b1 Boo": "Arcturus",
  "HR 5340": "Arcturus",
  "\u03b22 Sgr": "Arkab Posterior",
  "HR 7343": "Arkab Posterior",
  "\u03b21 Sgr": "Arkab Prior",
  "HR 7337": "Arkab Prior",
  "\u03b1 Lep": "Arneb",
  "HR 1865": "Arneb",
  "\u03b6 Sgr": "Ascella",
  "HR 7194": "Ascella",
  "\u03b4 Cnc": "Asellus Australis",
  "HR 3461": "Asellus Australis",
  "\u03b3 Cnc": "Asellus Borealis",
  "HR 3449": "Asellus Borealis",
  "\u03b5 Hya": "Ashlesha",
  "HR 3482": "Ashlesha",
  "\u03b9 Car": "Aspidiske",
  "HR 3699": "Aspidiske",
  "21 Tau": "Asterope",
  "HR 1151": "Asterope",
  "WASP-64": "Atakoraka",
  "\u03b7 Dra": "Athebyne",
  "HR 6132": "Athebyne",
  "\u03bf Per": "Atik",
  "HR 1131": "Atik",
  "27 Tau": "Atlas",
  "HR 1178": "Atlas",
  "\u03b1 TrA": "Atria",
  "HR 6217": "Atria",
  "\u03b5 Car": "Avior",
  "HR 3307": "Avior",
  "HD 224693": "Ax\u00f3lotl",
  "HD 18742": "Ayeyarwady",
  "\u03c01 Cyg": "Azelfafage",
  "HR 8301": "Azelfafage",
  "\u03b7 Eri": "Azha",
  "HR 874": "Azha",
  "\u03be Pup": "Azmidi",
  "HR 3045": "Azmidi",
  "GJ 367": "A\u00f1a\u00f1uca",
  "8 UMi": "Baekdu",
  "HD 133086": "Baekdu",
  "\u03b3 Oph": "Bake-eo (or Bake Eo)",
  "HR 6629": "Bake-eo (or Bake Eo)",
  "V2500 Oph": "Barnard's Star",
  "GJ 699": "Barnard's Star",
  "\u03b6 Cet": "Baten Kaitos",
  "HR 539": "Baten Kaitos",
  "LHS 3844": "Bats\u0169\u0300",
  "\u03c53 Eri": "Beemim",
  "HR 1393": "Beemim",
  "\u03bf1 Eri": "Beid",
  "HR 1298": "Beid",
  "HD 181342": "Belel",
  "\u03b3 Ori": "Bellatrix",
  "HR 1790": "Bellatrix",
  "HAT-P-15": "Berehynia",
  "\u03b1 Ori": "Betelgeuse",
  "HR 2061": "Betelgeuse",
  "41  Ari": "Bharani",
  "HR 838": "Bharani",
  "HD 86081": "Bibh\u0101",
  "\u03b8 Peg": "Biham",
  "HR 8450": "Biham",
  "HD 206610": "Bosona",
  "\u03b4 Ari": "Botein",
  "HR 951": "Botein",
  "\u03c3 Lib": "Brachium",
  "HR 5603": "Brachium",
  "HD 38283": "Bubup",
  "HD 16175": "Buna",
  "\u03be Aqr": "Bunda",
  "HR 8264": "Bunda",
  "HD 8574": "B\u00e9l\u00e9nos",
  "\u03b1 Car": "Canopus",
  "HR 2326": "Canopus",
  "\u03b1 Aur": "Capella",
  "HR 1708": "Capella",
  "\u03b2 Cas": "Caph",
  "HR 21": "Caph",
  "\u03b1 Gem": "Castor",
  "HR 2891": "Castor",
  "\u03c52 Cas": "Castula",
  "HR 265": "Castula",
  "\u03b2 Oph": "Cebalrai",
  "HR 6603": "Cebalrai",
  "HD 63454": "Ceibo",
  "16 Tau": "Celaeno",
  "HR 1140": "Celaeno",
  "\u03bc Ara": "Cervantes",
  "HR 6585": "Cervantes",
  "47 UMa": "Chalawan",
  "HR 4277": "Chalawan",
  "\u03b82 Tau": "Chamukuy",
  "HR 1412": "Chamukuy",
  "WASP-50": "Chaophraya",
  "\u03b2 CVn": "Chara",
  "HR 4785": "Chara",
  "HAT-P-5": "Chaso\u0148",
  "HD 192699": "Chechia",
  "\u03b8 Leo": "Chertan",
  "HR 4359": "Chertan",
  "HD 1502": "Citadelle",
  "HD 52265": "Cital\u00e1",
  "HD 4208": "Cocibolca",
  "55 Cnc": "Copernicus",
  "HR 3522": "Copernicus",
  "\u03b12 CVn": "Cor Caroli",
  "HR 4915": "Cor Caroli",
  "\u03c9 Her": "Cujam",
  "HR 6117": "Cujam",
  "\u03b2 Eri": "Cursa",
  "HR 1666": "Cursa",
  "\u03b21 Cap": "Dabih",
  "HR 7776": "Dabih",
  "\u03b1 For": "Dalim",
  "HR 963": "Dalim",
  "L 168-9": "Danfeng",
  "HR 7924": "Deneb",
  "\u03b4 Cap": "Deneb Algedi",
  "HR 8322": "Deneb Algedi",
  "\u03b2 Leo": "Denebola",
  "HR 4534": "Denebola",
  "\u03b1 Com": "Diadem",
  "HR 4968": "Diadem",
  "WASP-121": "Dilmun",
  "HD 96063": "Dingolay",
  "\u03b2 Cet": "Diphda",
  "HR 188": "Diphda",
  "WASP-72": "Diya",
  "HD 117618": "Dofida",
  "HAT-P-3": "Ebla",
  "\u03b4 Sco": "Dschubba",
  "HR 5953": "Dschubba",
  "\u03b1 UMa": "Dubhe",
  "HR 4301": "Dubhe",
  "\u03c81 Dra": "Dziban",
  "HR 6636": "Dziban",
  "WASP-17": "D\u00ecw\u00f6",
  "\u03b9 Dra": "Edasich",
  "HR 5744": "Edasich",
  "17 Tau": "Electra",
  "HR 1142": "Electra",
  "\u03d5 Vir": "Elgafar",
  "HR 5409": "Elgafar",
  "\u03b8 Col": "Elkurud",
  "HR 2177": "Elkurud",
  "\u03b2 Tau": "Elnath",
  "HR 1791": "Elnath",
  "\u03b3 Dra": "Eltanin",
  "HR 6705": "Eltanin",
  "HD 7199": "Emiw",
  "\u03b5 Peg": "Enif",
  "HR 8308": "Enif",
  "\u03b3 Cep": "Errai",
  "HR 8974": "Errai",
  "42 Dra": "Fafnir",
  "HR 6945": "Fafnir",
  "\u03c0 Sco": "Fang",
  "HR 5944": "Fang",
  "\u03b4 Cyg": "Fawaris",
  "HR 7528": "Fawaris",
  "HR 3923": "Felis",
  "BD-17 63": "Felixvarela",
  "WASP-166": "Filetdor",
  "HD 102195": "Flegetonte",
  "\u03b1 PsA": "Fomalhaut",
  "HR 8728": "Fomalhaut",
  "HD 100655": "Formosa",
  "HAT-P-14": "Franz",
  "\u03b6 Cas": "Fulu",
  "HR 153": "Fulu",
  "\u03b2 Psc": "Fumalsamakah",
  "HR 8773": "Fumalsamakah",
  "HD 109246": "Funi",
  "\u03b6 CMa": "Furud",
  "HR 2282": "Furud",
  "G Sco": "Fuyue",
  "HR 6630": "Fuyue",
  "\u03b3 Cru": "Gacrux",
  "HR 4763": "Gacrux",
  "HD 73534": "Gakyid",
  "GJ 486": "Gar",
  "\u00b5 Cep": "Garnet Star",
  "HR 8316": "Garnet Star",
  "PSR B0633+17": "Geminga",
  "\u03bb Dra": "Giausar",
  "HR 4434": "Giausar",
  "\u03b3 Crv": "Gienah",
  "HR 4662": "Gienah",
  "\u03b5 Cru": "Ginan",
  "HR 4700": "Ginan",
  "WASP-13": "Gloas",
  "WASP-43": "Gnomon",
  "\u03b2 CMi": "Gomeisa",
  "HR 2845": "Gomeisa",
  "\u03be Dra": "Grumium",
  "HR 6688": "Grumium",
  "HAT-P-26": "Guahayona",
  "\u03ba Ser": "Gudja",
  "HR 5879": "Gudja",
  "V5652 Sgr": "Gumala",
  "HD 179949": "Gumala",
  "36 Oph": "Guniibuu",
  "HR 6402": "Guniibuu",
  "\u03b2 Cen": "Hadar",
  "HR 5267": "Hadar",
  "\u03b7 Aur": "Haedus",
  "HR 1641": "Haedus",
  "\u03b1 Ari": "Hamal",
  "HR 617": "Hamal",
  "\u03b9 Aur": "Hassaleh",
  "HR 1577": "Hassaleh",
  "\u03b9 Ori": "Hatysa",
  "HR 1899": "Hatysa",
  "51 Peg": "Helvetios",
  "HR 8729": "Helvetios",
  "\u03b6 Vir": "Heze",
  "HR 5107": "Heze",
  "HD 28678": "Hoggar",
  "\u03b6 Peg": "Homam",
  "HR 8634": "Homam",
  "HAT-P-38": "Horna",
  "HD 98219": "Hunahp\u00fa",
  "HAT-P-2": "Hunor",
  "\u03c1 Sco": "Iklil",
  "HR 5928": "Iklil",
  "HD 82886": "Illyrian",
  "\u03b4 Cru": "Imai",
  "HR 4656": "Imai",
  "HD 156411": "Inquill",
  "HD 20868": "Intan",
  "HR 3743": "Intercrus",
  "WASP-38": "Irena",
  "HD 208487": "Itonda",
  "\u03b5 Boo": "Izar",
  "HR 5506": "Izar",
  "\u03bd Sco": "Jabbah",
  "HR 6027": "Jabbah",
  "\u03bf Gem": "Jishui",
  "HR 2930": "Jishui",
  "GJ 3470": "Kaewkosin",
  "\u03b3 Cet": "Kaffaljidhma",
  "HR 804": "Kaffaljidhma",
  "HD 83443": "Kalausi",
  "HD 145457": "Kamuy",
  "\u03ba Vir": "Kang",
  "HR 5315": "Kang",
  "HD 137388": "Karaka",
  "\u03b5 Sgr": "Kaus Australis",
  "HR 6879": "Kaus Australis",
  "\u03bb Sgr": "Kaus Borealis",
  "HR 6913": "Kaus Borealis",
  "\u03b4 Sgr": "Kaus Media",
  "HR 6859": "Kaus Media",
  "HD 175541": "Kaveh",
  "\u03bf2 Eri": "Keid",
  "HR 1325": "Keid",
  "\u03bb Vir": "Khambalia",
  "HR 5359": "Khambalia",
  "\u03b1 Equ": "Kitalpha",
  "HR 8131": "Kitalpha",
  "\u03b2 UMi": "Kochab",
  "HR 5563": "Kochab",
  "HIP 12961": "Koeia",
  "XO-4": "Koit",
  "HAT-P-12": "Komondor",
  "\u03b2 Her": "Kornephoros",
  "HR 6148": "Kornephoros",
  "WASP-63": "Kosjenka",
  "\u03b2 Crv": "Kraz",
  "HR 4786": "Kraz",
  "\u03be Cep": "Kurhah",
  "HR 8417": "Kurhah",
  "Y CVn": "La Superba",
  "HR 4846": "La Superba",
  "\u03b1 Tuc": "Lang-Exster",
  "HR 8502": "Lang-Exster",
  "\u03b5 Sco": "Larawag",
  "HR 6241": "Larawag",
  "\u03b6 Cen": "Leepwal",
  "HD 121263": "Leepwal",
  "HAT-P-42": "Lerna",
  "\u03c5 Sco": "Lesath",
  "HR 6508": "Lesath",
  "\u03be Aql": "Libertas",
  "HR 7595": "Libertas",
  "PSR B1257+12": "Lich",
  "HD 118203": "Liesma",
  "39 Ari": "Lilii Borea",
  "HR 824": "Lilii Borea",
  "HD 212771": "Lionrock",
  "HD 45350": "Lucilinburhuc",
  "HD 45652": "Lusit\u00e2nia",
  "\u03bb Her": "Maasym",
  "HR 6526": "Maasym",
  "HD 93083": "Macondo",
  "HD 32518": "Mago",
  "\u03b8 Aur": "Mahasim",
  "HR 2095": "Mahasim",
  "HD 152581": "Mahsati",
  "20 Tau": "Maia",
  "HR 1149": "Maia",
  "V732 Vir": "Malmok",
  "WASP-39": "Malmok",
  "\u03bb Oph": "Marfik",
  "HR 6149": "Marfik",
  "\u03b1 Peg": "Markab",
  "HR 8781": "Markab",
  "\u03ba Vel": "Markeb",
  "HR 3734": "Markeb",
  "\u03ba Her": "Marsic",
  "HR 6008": "Marsic",
  "WD 0806-661": "Maru",
  "\u03b7 Peg": "Matar",
  "HR 8650": "Matar",
  "HIP 65426": "Matza",
  "HAT-P-21": "Mazalaai",
  "\u03b5 Gem": "Mebsuta",
  "HR 2473": "Mebsuta",
  "\u03b4 UMa": "Megrez",
  "HR 4660": "Megrez",
  "\u03bb Ori": "Meissa",
  "HR 1879": "Meissa",
  "\u03b6 Gem": "Mekbuda",
  "HR 2650": "Mekbuda",
  "\u03b5 Cnc": "Meleph",
  "HR 3429": "Meleph",
  "\u03b2 Aur": "Menkalinan",
  "HR 2088": "Menkalinan",
  "\u03b1 Cet": "Menkar",
  "HR 911": "Menkar",
  "\u03b8 Cen": "Menkent",
  "HR 5288": "Menkent",
  "\u03be Per": "Menkib",
  "HR 1228": "Menkib",
  "\u03b2 UMa": "Merak",
  "HR 4295": "Merak",
  "38 Boo": "Merga",
  "HR 5533": "Merga",
  "\u03b1 CrA": "Meridiana",
  "HR 7254": "Meridiana",
  "23 Tau": "Merope",
  "HR 1156": "Merope",
  "\u03b31 Ari": "Mesarthim",
  "HR 546": "Mesarthim",
  "\u03b2 Car": "Miaplacidus",
  "HR 3685": "Miaplacidus",
  "\u03b2 Cru": "Mimosa",
  "HR 4853": "Mimosa",
  "\u03c3 Hya": "Minchir",
  "HR 3418": "Minchir",
  "\u03b4 Vir": "Minelauva",
  "HR 4910": "Minelauva",
  "\u03b4 Ori": "Mintaka",
  "HR 1852": "Mintaka",
  "\u03bf Cet": "Mira",
  "HR 681": "Mira",
  "\u03b2 And": "Mirach",
  "HR 337": "Mirach",
  "\u03b7 Per": "Miram",
  "HR 834": "Miram",
  "\u03b1 Per": "Mirfak",
  "HR 1017": "Mirfak",
  "\u03b2 Cma": "Mirzam",
  "HR 2294": "Mirzam",
  "\u03ba Per": "Misam",
  "HR 941": "Misam",
  "\u03b6 UMa": "Mizar",
  "HR 5054": "Mizar",
  "XO-1": "Moldoveanu",
  "WASP-79": "Montuno",
  "WASP-60": "Morava",
  "HAT-P-23": "Moriah",
  "\u03b1 Tri": "Mothallah",
  "HR 544": "Mothallah",
  "HD 30856": "Mouhoun",
  "WASP-71": "Mpingo",
  "\u03b3 CMa": "Muliphein",
  "HR 2657": "Muliphein",
  "\u03b7 Boo": "Muphrid",
  "HR 5235": "Muphrid",
  "\u03bf UMa": "Muscida",
  "HR 3323": "Muscida",
  "18 Del": "Musica",
  "HR 8030": "Musica",
  "HAT-P-29": "Muspelheim",
  "WASP-6": "M\u00e1rohu",
  "HD 130322": "M\u00f6nch",
  "\u03be Cnc": "Nahn",
  "HR 3627": "Nahn",
  "WASP-62": "Naledi",
  "\u03b6 Pup": "Naos",
  "HR 3165": "Naos",
  "\u03b3 Cap": "Nashira",
  "HR 8278": "Nashira",
  "HD 85390": "Natasha",
  "\u03b2 Boo": "Nekkar",
  "HR 5602": "Nekkar",
  "51 And": "Nembus",
  "HR 464": "Nembus",
  "HD 6434": "Nenque",
  "HD 49674": "Nervia",
  "\u03c3 CMa": "Unurgunite",
  "HR 2646": "Unurgunite",
  "\u03b2 Lep": "Nihal",
  "HR 1829": "Nihal",
  "HD 136418": "Nikawiy",
  "GJ 436": "Noquisi",
  "HD 48265": "Nosaxa",
  "\u03c3 Sgr": "Nunki",
  "HR 7121": "Nunki",
  "\u03b2 CrB": "Nusakan",
  "HR 5747": "Nusakan",
  "HD 17156": "Nushagak",
  "WASP-15": "Nyamien",
  "HD 68988": "N\u00e1sti",
  "HD 149026": "Ogma",
  "\u03b6 Aql": "Okab",
  "HR 7235": "Okab",
  "GJ 1214": "Orkaria",
  "\u03c4 Sco": "Paikauhale",
  "HR 6165": "Paikauhale",
  "WASP-32": "Parumleo",
  "\u03b1 Pav": "Peacock",
  "HR 7790": "Peacock",
  "WASP-80": "Petra",
  "\u03b1 Col": "Phact",
  "HR 1956": "Phact",
  "\u03b3 UMa": "Phecda",
  "HR 4554": "Phecda",
  "\u03b3 UMi": "Pherkad",
  "HR 5735": "Pherkad",
  "V1703 Aql": "Phoenicia",
  "HD 192263": "Phoenicia",
  "23 Com": "Phyllon Kissinou",
  "\u03bb Cnc": "Piautos",
  "HR 3268": "Piautos",
  "HD 164604": "Pincoya",
  "\u03bc2 Sco": "Pipirima",
  "HR 6252": "Pipirima",
  "\u03bd Pup": "Pipit",
  "HR 2451": "Pipit",
  "V1434 Her": "Pipoltr",
  "TrES-3": "Pipoltr",
  "28 Tau": "Pleione",
  "HR 1180": "Pleione",
  "HD 221287": "Poerava",
  "\u03b1 UMi": "Polaris",
  "HR 424": "Polaris",
  "\u03c3 Oct": "Polaris Australis",
  "HR 7228": "Polaris Australis",
  "\u03bc Sgr": "Polis",
  "HR 6812": "Polis",
  "\u03b2 Gem": "Pollux",
  "HR 2990": "Pollux",
  "\u03b3 Vir": "Porrima",
  "HR 4825": "Porrima",
  "46 LMi": "Praecipua",
  "HR 4247": "Praecipua",
  "\u03b3 Tau": "Prima Hyadum",
  "HR 1346": "Prima Hyadum",
  "\u03b1 CMi": "Procyon",
  "HR 2943": "Procyon",
  "\u03b7 Gem": "Propus",
  "HR 2216": "Propus",
  "\u03b1 Cen": "Toliman",
  "GJ 551": "Proxima Centauri",
  "\u03b5 Eri": "Ran",
  "HR 1084": "Ran",
  "\u03b4 Eri": "Rana",
  "HR 1136": "Rana",
  "HD 153950": "Rapeto",
  "\u03bc Leo": "Rasalas",
  "HR 3905": "Rasalas",
  "\u03b11 Her": "Rasalgethi",
  "HR 6406": "Rasalgethi",
  "\u03b1 Oph": "Rasalhague",
  "HR 6556": "Rasalhague",
  "\u03b2 Dra": "Rastaban",
  "HR 6536": "Rastaban",
  "\u03b1 Leo": "Regulus",
  "HR 3982": "Regulus",
  "\u03b6 Psc": "Revati",
  "HR 361": "Revati",
  "\u03b1 Ret": "Rhombus",
  "HR 1336": "Rhombus",
  "\u03b2 Ori": "Rigel",
  "HR 1713": "Rigel",
  "HR 5459": "Rigil Kentaurus",
  "HD 149143": "Rosaliadecastro",
  "\u03b2 Del": "Rotanev",
  "HR 7882": "Rotanev",
  "\u03b4 Cas": "Ruchbah",
  "HR 403": "Ruchbah",
  "\u03b1 Sgr": "Rukbat",
  "HR 7348": "Rukbat",
  "\u03b7 Oph": "Sabik",
  "HR 6378": "Sabik",
  "\u03b6 Aur": "Saclateni",
  "HR 1612": "Saclateni",
  "\u03b3 Aqr": "Sadachbia",
  "HR 8518": "Sadachbia",
  "\u03bc Peg": "Sadalbari",
  "HR 8684": "Sadalbari",
  "\u03b1 Aqr": "Sadalmelik",
  "HR 8414": "Sadalmelik",
  "\u03b2 Aqr": "Sadalsuud",
  "HR 8232": "Sadalsuud",
  "\u03b3 Cyg": "Sadr",
  "HR 7796": "Sadr",
  "HD 100777": "Sagarmatha",
  "\u03ba Ori": "Saiph",
  "HR 2004": "Saiph",
  "\u03c4 Peg": "Salm",
  "HR 8880": "Salm",
  "HAT-P-34": "Sansuna",
  "\u03b8 Sco": "Sargas",
  "HR 6553": "Sargas",
  "\u03b4 Her": "Sarin",
  "HR 6410": "Sarin",
  "53 Eri": "Sceptrum",
  "HR 1481": "Sceptrum",
  "\u03b2 Peg": "Scheat",
  "HR 8775": "Scheat",
  "\u03b1 Cas": "Schedar",
  "HR 168": "Schedar",
  "\u03b41 Tau": "Secunda Hyadum",
  "HR 1373": "Secunda Hyadum",
  "\u03b5 Cas": "Segin",
  "HR 0542": "Segin",
  "\u03b3 Boo": "Seginus",
  "HR 5435": "Seginus",
  "\u03b1 Sge": "Sham",
  "HR 7479": "Sham",
  "HD 99109": "Shama",
  "\u03c1 Leo": "Shaomin",
  "HD 91316": "Shaomin",
  "HIP 79431": "Sharjah",
  "\u03bb Sco": "Shaula",
  "HR 6527": "Shaula",
  "\u03b2 Lyr": "Sheliak",
  "HR 7106": "Sheliak",
  "\u03b2 Ari": "Sheratan",
  "HR 553": "Sheratan",
  "HD 181720": "Sika",
  "\u03b1 CMa": "Sirius",
  "HR 2491": "Sirius",
  "\u03ba Aqr": "Situla",
  "HR 8610": "Situla",
  "\u03b4 Aqr": "Skat",
  "HR 8709": "Skat",
  "BD+14-4559": "Solaris",
  "E Hya": "Solitaire",
  "HR 5526": "Solitaire",
  "\u03b1 Vir": "Spica",
  "HR 5056": "Spica",
  "\u03b1 Lac": "Stellio",
  "HR 8585": "Stellio",
  "HAT-P-6": "Sterrennacht",
  "HD 75898": "Stribor",
  "\u03b1 Del": "Sualocin",
  "HR 7906": "Sualocin",
  "\u03bf Leo": "Subra",
  "HR 3852": "Subra",
  "\u03bb Vel": "Suhail",
  "HR 3634": "Suhail",
  "\u03b3 Lyr": "Sulafat",
  "HR 7178": "Sulafat",
  "\u03b9 Vir": "Syrma",
  "HR 5338": "Syrma",
  "HD 205739": "S\u0101maya",
  "\u03c03 Ori": "Tabit",
  "HR 1543": "Tabit",
  "HAT-P-40": "Taika",
  "\u03c7 UMa": "Taiyangshou",
  "HR 4518": "Taiyangshou",
  "8 Dra": "Taiyi",
  "HR 4916": "Taiyi",
  "\u03b9 UMa": "Talitha",
  "HR 3569": "Talitha",
  "WASP-21": "Tangra",
  "\u03bc UMa": "Tania Australis",
  "HR 4069": "Tania Australis",
  "\u03bb UMa": "Tania Borealis",
  "HR 4033": "Tania Borealis",
  "HD 63765": "Tapecue",
  "\u03b3 Aql": "Tarazed",
  "HR 7525": "Tarazed",
  "\u03b2 Cnc": "Tarf",
  "HR 3249": "Tarf",
  "19 Tau": "Taygeta",
  "HR 1145": "Taygeta",
  "\u03b6 Cnc": "Tegmine",
  "HR 3208": "Tegmine",
  "\u03bc Gem": "Tejat",
  "HR 2286": "Tejat",
  "HR 8726": "Tengshe",
  "\u03c9 Sgr": "Terebellum",
  "HR 7597": "Terebellum",
  "HAT-P-9": "Tevel",
  "\u03c52 Eri": "Theemin",
  "HR 1464": "Theemin",
  "\u03b1 Dra": "Thuban",
  "HR 5291": "Thuban",
  "\u03b2 Gru": "Tiaki",
  "HR 8636": "Tiaki",
  "tau Aql": "Tianfu",
  "HR 7669": "Tianfu",
  "\u03b6 Tau": "Tianguan",
  "HR 1910": "Tianguan",
  "7 Dra": "Tianyi",
  "HR 4863": "Tianyi",
  "HD 148427": "Timir",
  "WASP-161": "Tislit",
  "\u03c5 And": "Titawin",
  "HR 458": "Titawin",
  "WASP-22": "Tojil",
  "HR 5460": "Toliman",
  "HR 4609": "Tonatiuh",
  "\u03bf Psc": "Torcular",
  "HR 510": "Torcular",
  "HAT-P-36": "Tuiren",
  "HD 23079": "Tupi",
  "HD 108147": "Tup\u00e3",
  "\u03c1 Pup": "Tureis",
  "HR 3185": "Tureis",
  "\u03b9 Hya": "Ukdah",
  "HR 3845": "Ukdah",
  "HD 102117": "Uklun",
  "\u03b1 Ser": "Unukalhai",
  "HR 5854": "Unukalhai",
  "\u03b1 Lup": "Uridim",
  "HR 5469": "Uridim",
  "HD 231701": "Uruk",
  "LTT 9779": "U\u00faba",
  "\u03b1 Lyr": "Vega",
  "HR 7001": "Vega",
  "14 And": "Veritate",
  "HR 8930": "Veritate",
  "\u03b5 Vir": "Vindemiatrix",
  "HR 4932": "Vindemiatrix",
  "\u03b4 Gem": "Wasat",
  "HR 2777": "Wasat",
  "WASP-19": "Wattle",
  "\u03b2 Col": "Wazn",
  "HR 2040": "Wazn",
  "\u03b4 CMa": "Wezen",
  "HR 2693": "Wezen",
  "WASP-69": "Wouri",
  "\u03b6 Phe": "Wurren",
  "HR 338": "Wurren",
  "\u03bc1 Sco": "Xamidimura",
  "HR 6247": "Xamidimura",
  "HD 173416": "Xihe",
  "\u03bb Boo": "Xuange",
  "HR 5351": "Xuange",
  "\u03b5 Oph": "Yed Posterior",
  "HR 6075": "Yed Posterior",
  "\u03b4 Oph": "Yed Prior",
  "HR 6056": "Yed Prior",
  "\u03b4 UMi": "Yildun",
  "HR 6789": "Yildun",
  "31 Leo": "Yun\u00fc (Yunu)",
  "HD 87837": "Yun\u00fc (Yunu)",
  "\u03b7 Vir": "Zaniah",
  "HR 4689": "Zaniah",
  "\u03b3 Eri": "Zaurak",
  "HR 1231": "Zaurak",
  "\u03b2 Vir": "Zavijava",
  "HR 4540": "Zavijava",
  "HATS-72": "Zembra",
  "\u03c51 Hya": "Zhang",
  "HR 3903": "Zhang",
  "\u03b6 Eri": "Zibal",
  "HR 984": "Zibal",
  "\u03b4 Leo": "Zosma",
  "HR 4357": "Zosma",
  "\u03b12 Lib": "Zubenelgenubi",
  "HR 5531": "Zubenelgenubi",
  "\u03b3 Lib": "Zubenelhakrabi",
  "HR 5787": "Zubenelhakrabi",
  "\u03b2 Lib": "Zubeneschamali",
  "HR 5685": "Zubeneschamali"
}


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


let synth_mono, synth_metal;

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
        synth_mono.triggerAttackRelease(
          parallaxToFreq(Number(source_data.parallax)), 
          TIME_BASE_MONO + (TIME_MULT_FLUX * maximum_flux),
        );
        break;

      case "pm":
        synth_metal.triggerAttackRelease(
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

  aladin.on('objectClicked', function(object) {
    if (object) {
      // console.log("Object Clicked:");
      // console.log(object);
      sonifySource(object);

      A.catalogFromSimbad(
        object, 0.005, {},
        (cat) => {

          // Simbad will have returned any exoplanets around a star, or extragalactic objects...
          const simbadSources = cat.getSources();
          var simbadData;
          for (var idx=0; idx < simbadSources.length; idx++) {
            if (otype_blacklist.indexOf(simbadSources[idx].data.otype) == -1) {
              simbadData = cat.getSource(idx).data;
              break;
            }
          }
 
          if (!simbadData) {
            var view = object.catalog.view;
            view.aladin.popup.setTitle(
              "Catalogue Error"
            );
            view.aladin.popup.setText(
              "Couldn't find the details for this source!"
            );
            view.aladin.popup.setSource(object);
            view.aladin.popup.show();
            return;
          }

          // Get the name and object type from the data
          // The ID may contain blocks of multiple whitespace, so we remove that
          var star_id = simbadData.main_id.replace(/\s+/g, ' ').trim();
          var star_otype = simbadData.otype;

          // We'll use them to get the name and star type
          var star_name;
          var star_type;

          // Now we try getting the type from the otype, which may be blank
          if (otype_to_type[star_otype]) {
            star_type = otype_to_type[star_otype];
          } else {
            // The otype *may* be in the first block of the ID (e.g. "*V  bet Cyg")
            var test_otype = star_id.split(" ", 1)[0];
            if (otype_to_type[test_otype]) {
              star_type = otype_to_type[test_otype];
              star_id = simbadData.main_id.split(" ", 1)[1];
            }
          }

          // Try comparing to the IAU star names list
          if (id_to_name[star_id]) {
            star_name = id_to_name[star_id];

          } else {
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
            // This may have been done earlier if there wasn't an otype in the catalogue entry
            for (const otype of Object.keys(otype_to_type)) {
              if (star_id_parts.at(0) == otype) {
                star_name_parts.splice(0, 1);
              }
            }
            star_name = star_name_parts.join(' ');
          }

          var star_description = "";
          if (star_type) {
            star_description = star_type + "<br>";
          }

          // Get the view so we can create a popup
          var view = object.catalog.view;
          view.aladin.popup.setTitle(
            star_name
          );
          view.aladin.popup.setText(
            star_description+"See more detail on <a href='https://simbad.cds.unistra.fr/simbad/sim-id?Ident="+simbadData.main_id+"&NbIdent=1&submit=submit+id'>SIMBAD</a>"
          );
          view.aladin.popup.setSource(object);
          view.aladin.popup.show();
        }      
      );
    }
  })

  aladin.on('objectHovered', function(object) {
    if (object) {
      sonifySource(object);
    }
  });
});  