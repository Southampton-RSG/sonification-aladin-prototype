import csv
import json
from csv import DictReader
from io import FileIO
from pathlib import Path

otype_csv: FileIO = open(
    Path("data/otypes_nodes.csv"), "r"
)
otype_reader: DictReader = csv.reader(otype_csv)
otype_to_description: dict[str, str] = {}

for id, label, candidate, description in otype_reader:
    if '=' in description.split()[0]:
        # The description is something like "ABC=A Big Cloud"
        # but avoids catching "A Big Cloud (>= 3 Ly)"
        split_label, description = description.split('=')
        otype_to_description[split_label] = description

    if '{'  in description:
        # The description is either "{ABC} A Big Cloud" or "{ABC, ABS, ABG} Line System"
        split_label, description = description.split('}')
        description = description.strip()
        split_label = split_label.strip('{')

        if ',' in split_label:
            # It's the subtypes version, so we need to generate multiple entries
            for sub_label in split_label.split(','):
                otype_to_description[sub_label] = f"{sub_label} {description}"

        else:
            # It's the "{ABC} A Big Cloud" version
            otype_to_description[split_label] = description

    if id:
        otype_to_description[id] = description
    
    if label:
        otype_to_description[label] = description

otype_json: FileIO = open("otype_to_description.json", "w")
json.dump(otype_to_description, otype_json, indent=2)
