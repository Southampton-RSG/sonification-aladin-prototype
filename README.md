# sonification-aladin-prototype
Aladin-light sonification prototype, very rough outline.

## Resources

### Star Types
Star types ([`otypes.json`](otypes.json)) are derived from the [SIMBAD object types list](https://simbad.cds.unistra.fr/guide/otypes.htx). If it's updated new JSON needs to be derived from it:
1. Download the types as 2 `.csv` files, and place `otypes_nodes.csv` in the `data/` folder.
2. Run `scripts/otypes_nodes_to_json.py` to convert them to `.json` format.
3. Copy the contents of `otypes.json` into the javascript source as `const otype_to_type`.
4. You may need to update `const otypes_blacklist`, as SIMBAD queries on a star return its exoplanets, and we need to filter them out using their `otype`.

### Star Names
Some stars have 'real' names from the [IAU list of names](https://www.iau.org/public/themes/naming_stars/). If it's updated, new JSON needs to be derived from it.
1. Download the star names as a `.csv` file, and place it in the `data/` folder as `iau_star_names.csv`.
2. Run `scripts/iau_names_to_json.py` to convert them into `.json` format.
3. Copy the contents of `id_to_name.json` into the javascript source as `const id_to_name`.

These use the constellation name abbreviation mappings from [ViZier via AstroPy here](https://github.com/astropy/astropy/blob/a3f20ce33891396a8b754b6a3850272c501a3022/astropy/coordinates/data/constellation_names.dat). These are stored in [data/astropy_constellations.json](astropy_constellations.json), and in the javascript source as `const constellation_abbreviations`.

As [SIMBAD has specific greek letter coding](https://simbad.u-strasbg.fr/Pages/guide/chA.htx) we need to convert those to unicode to standardise with the IAU's list and for display. These are stored in [data/tla_english_to_greek.json](english_to_greek.json), and in the javascript source as `english_to_greek.json`.

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
