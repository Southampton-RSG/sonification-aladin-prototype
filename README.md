# sonification-aladin-prototype
Aladin-light sonification prototype, very rough outline.

## Resources

### Star Names
Some stars have 'proper' IAU names, and these are resolved from the identifiers list we get back from SIMBAD.

Many return as their default name the Bayer designations (e.g. 'β Cephieid'). 
However, these are prepended with a 3-letter object type code (e.g. `V*`), 
use a custom three-letter greek code (e.g. `bet`) and a three-letter constellation abbreviation (e.g. `cep`),
for a resulting name like `V* bet cep`.

We detect these using the list of object types from [SIMBAD here](https://simbad.cds.unistra.fr/guide/otypes.htx).
If it's updated new JSON needs to be derived from it:
1. Download the types as 2 `.csv` files, and place `otypes_nodes.csv` in the `data/` folder.
2. Run `scripts/otypes_nodes_to_json.py` to convert them to `.json` format.
3. Copy the contents of `otypes.json` into the javascript source as `const otype_to_type`.

Once detected, we drop the object type and expand the abbreviations using:
* Constellation abbreviations from [ViZier via AstroPy here](https://github.com/astropy/astropy/blob/a3f20ce33891396a8b754b6a3850272c501a3022/astropy/coordinates/data/constellation_names.dat). These are stored in [astropy_constellations.json](data/astropy_constellations.json), and in the javascript source as `const constellation_abbreviations`.
* Greek letter codes from [SIMBAD here](https://simbad.u-strasbg.fr/Pages/guide/chA.htx). These are converted to a mapping by hand and stored in [english_to_greek](data/english_to_greek.json).


## References
### Aladin Sky Atlas
This work has made use of "Aladin sky atlas" developed at CDS, Strasbourg Observatory, France.
[2022ASPC..532....7B](https://ui.adsabs.harvard.edu/abs/2022ASPC..532....7B/abstract); Aladin Lite v3.

### SIMBAD Database
This work has made use of the SIMBAD database, operated at CDS, Strasbourg, France. 
[2000,A&AS,143,9](https://ui.adsabs.harvard.edu/abs/2000A%26AS..143....9W);"The SIMBAD astronomical database", Wenger et al.

### Gaia Dataset
This work has made use of data from the European Space Agency (ESA) mission Gaia ([https://www.cosmos.esa.int/gaia](https://www.cosmos.esa.int/gaia)), 
processed by the Gaia Data Processing and Analysis Consortium (DPAC, [https://www.cosmos.esa.int/web/gaia/dpac/consortium](https://www.cosmos.esa.int/web/gaia/dpac/consortium)). 
Funding for the DPAC has been provided by national institutions, in particular the institutions participating in the Gaia Multilateral Agreement.

### Background Image
[Gaia's View of the Milky Way (ESA/Gaia/DPAC, CC BY-SA 3.0 IGO)](https://www.eso.org/public/images/eso1908e/)
