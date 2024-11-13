import csv
import json
from csv import DictReader
from io import FileIO
from pathlib import Path
from typing import List


names_csv: FileIO = open(
    Path("data/iau_star_names.csv"), "r"
)
names_reader: DictReader = csv.reader(names_csv)

id_to_name: dict[str, str] = {}

for name, designation, _, id, _, _, _, _, _, _ in names_reader:
    if id:
        id_to_name[id] = name
    if designation:
        id_to_name[designation] = name

names_json: FileIO = open("id_to_name.json", "w")
json.dump(id_to_name, names_json, indent=2)
