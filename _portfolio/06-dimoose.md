---
title: "dimoose"
excerpt: "R package for dichotomous identification keys. Build a key from a plain spreadsheet with photos, draw it as a box diagram, or turn it into an offline web wizard for the field; also imports FishBase keys and generates keys from photos (CLIP/BioCLIP), sequence alignments and trait matrices. Includes an illustrated key to Montana's native broadleaf trees."
collection: portfolio
order: 6
language: "R"
link: "https://leipzig.github.io/dimoose/"
year: 2020
---

dimoose is an R package for **dichotomous identification keys**, the "1a or 1b?" keys used to identify plants and animals.

- Write a key in a plain spreadsheet, one row per lead, with photos, and build it with `keyFromSpreadsheet()`.
- Draw any key as a box diagram (SVG, PNG or PDF) with `keyDiagram()`.
- Turn it into a single offline web page that asks one question at a time, for use on a phone in the field, with `exportWizard()`.
- Import keys from FishBase, and generate keys from photos (CLIP/BioCLIP), sequence alignments and trait matrices.

It comes with an illustrated key to the eleven native broadleaf trees of Montana: [try it on your phone](https://leipzig.github.io/dimoose/montana/).

![Key to the native broadleaf trees of Montana](/images/dimoose-montana-key.svg)

[Documentation](https://leipzig.github.io/dimoose/) · [Source on GitHub](https://github.com/leipzig/dimoose)
