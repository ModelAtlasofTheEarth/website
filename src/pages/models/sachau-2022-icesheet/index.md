---
templateKey: model
slug: sachau-2022-icesheet
title: ISMIP-HOM benchmark experiments using Underworld
date: '2024-08-19T07:33:52.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: ''
url: https://mate.science//models/sachau-2022-icesheet
creditText: ''
software:
  name: 'Underworld2: Python Geodynamics Modelling for Desktop, HPC and Cloud'
  doi: https://doi.org/10.5281/zenodo.5935717
  url_source: ''
licence:
  licence_url: https://creativecommons.org/licenses/by/4.0/legalcode
  licence_image: ../../../img/licence/by.png
  description: Creative Commons Attribution 4.0 International
  licence_file: license.txt
submitter:
  name: Dan
  family_name: Sandiford
  ORCID: https://orcid.org/0000-0002-2207-6837
creators:
  - name: Till
    family_name: Sachau
    ORCID: 0000-0002-3790-1385
  - name: Haibin
    family_name: Yang
    ORCID: 0000-0002-8628-3704
  - name: Paul D.
    family_name: Bons
    ORCID: 0000-0002-6469-3526
  - name: Louis-Noel
    family_name: Moresi
    ORCID: 0000-0003-3685-174X
associated_publication:
  title: ISMIP-HOM benchmark experiments using Underworld
  url: http://dx.doi.org/10.5194/gmd-15-8749-2022
  doi: 10.5194/gmd-15-8749-2022
  publisher: Copernicus GmbH
  journal: Geoscientific Model Development
  date: 2022-12-2
  authors:
    - name: Till
      family_name: Sachau
    - name: Haibin
      family_name: Yang
    - name: Justin
      family_name: Lang
    - name: Paul D.
      family_name: Bons
    - name: Louis
      family_name: Moresi
compute_info:
  name: ''
  organisation: ''
  url: ''
  doi: ''
research_tags:
  - ice-sheet
  - benchmark
  - Stokes
  - anisotropy
  - mechanical
compute_tags:
  - Python
  - Finite-Element
  - Particle-in-cell
funder:
  - name: AuScope
    doi: https://ror.org/04s1m4564
  - name: University of Tübingen
    doi: https://ror.org/03a1kwz48
abstract: "Abstract. Numerical models have become an indispensable tool for\nunderstanding and predicting the flow of ice sheets and glaciers. Here we\npresent the full-Stokes software package Underworld to the glaciological\ncommunity. The code is already well established in simulating complex\ngeodynamic systems. Advantages for glaciology are that it provides a\nfull-Stokes solution for elastic–viscous–plastic materials and includes\nmechanical anisotropy. Underworld uses a material point method to track the\nfull history information of Lagrangian material points, of stratigraphic\nlayers and of free surfaces. We show that Underworld successfully reproduces\nthe results of other full-Stokes models for the benchmark experiments of the Ice Sheet Model Intercomparison Project for Higher-Order Models\n(ISMIP-HOM). Furthermore, we test finite-element meshes with different\ngeometries and highlight the need to be able to adapt the finite-element\ngrid to discontinuous interfaces between materials with strongly different\nproperties, such as the ice–bedrock boundary.\n                    "
description: Knowledge of the internal structures of the major continental ice sheets is improving, thanks to new investigative techniques. These structures are an essential indication of the flow behavior and dynamics of ice transport, which in turn is important for understanding the actual impact of the vast amounts of water trapped in continental ice sheets on global sea-level rise. The software studied here is specifically designed to simulate such structures and their evolution.
images:
  landing_image:
    src: ./graphics/gmd-15-8749-2022-f09.png
    caption: 'Marker lines prior to (a) and after 750 years of flow of (b) isotropic and (c) anisotropic ice. The axial plane of the resulting shear fold in isotropic ice mimics the bedrock topography, while it is controlled by shearing along a horizontal shear zone in the case of anisotropic ice. Green: bedrock, flow to the right.'
  graphic_abstract:
    src: ./graphics/graphic_abstract.png
    caption: 'Velocity field and strain rate field in isotropic ice (1) and inisotropic ice (2). Large strain rates and velocities occur in the vicinity of the bottleneck formed by the crest of the hill. Green: bedrock. For velocity, red is 70 m a−1 and blue is 0 m a−1. For strain rate, red is 0.032 $a^{−1}$, and blue is 0 $a^{−1}$.'
  model_setup:
    src: ./graphics/gmd-15-8749-2022-f01-web.png
    caption: (a) 2D geometry of Experiment B. This is identical to a section parallel X located at yˆ = 0.25 in Experiment A (right). Sloping angle α is given in degrees. Also depicted is the velocity field of the flowing ice, resulting for a model width L of 5000 m from the simulations described below. Color and arrow length visualize the amount of velocity. (b) Bedrock topography for Experiment A and general naming scheme for the axes of 3D experiments.
animation:
  src: ./graphics/
  caption: ''
model_setup_info:
  url: ''
  summary: ''
model_files:
  url: ''
  notes: ''
  file_tree: ''
  existing_identifier: https://doi.org/10.5281/zenodo.7384424
  nci_file_path: https://thredds.nci.org.au/thredds/catalog/nm08/MATE/sachau-2022-icesheet/catalog.html
  include: true
dataset:
  url: ''
  notes: ''
  existing_identifier: https://doi.org/10.5281/zenodo.7384424
  nci_file_path: https://thredds.nci.org.au/thredds/catalog/nm08/MATE/sachau-2022-icesheet/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
