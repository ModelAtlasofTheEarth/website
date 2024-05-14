---
templateKey: 'model'
slug: 'corcho-2022-collision'
title: 'The Role of Lithospheric-Deep Mantle Interactions on the Style and Stress Evolution of Arc-Continent Collision'
date: 2023-08-28T15:04:10.000Z
featuredpost: false
for_codes:
  - 3706
  - 370604
status: completed
doi: https://doi.org/10.25914/r3ya-bg54
software:
  - name: UWGeodynamics
    doi: 10.5281/zenodo.5606117
    url_source: https://github.com/underworldcode/UWGeodynamics
licence:
  name: CC BY 4.0
  licence_url: https://creativecommons.org/licenses/by/4.0/
  licence_image: ../../../img/licence/by.png
  description: CC BY 4.0 DEED Attribution 4.0 International
  licence_file: ./licence.txt
submitter:
  name: Andrés Felipe
  family_name: Rodríguez Corcho
  ORCID: 0000-0002-1521-7910
  affiliation: EarthByte Group, School of Geosciences, The University of Sydney
creators:
  - name: Andrés Felipe
    family_name: Rodríguez Corcho
    ORCID: 0000-0002-1521-7910
    affiliation: EarthByte Group, School of Geosciences, The University of Sydney
  - name: Sara
    family_name: Polanco
    ORCID: 0000-0002-1270-4377
    affiliation: EarthByte Group, School of Geosciences, The University of Sydney
  - name: Rebecca
    family_name: Farrington
    ORCID: 0000-0002-2594-6965
    affiliation: AuScope Melbourne, Victoria
  - name: Romain
    family_name: Beucher
    ORCID: 0000-0003-3891-5444
    affiliation: Australian Earth System Simulator, Canberra
  - name: Camilo
    family_name: Montes
    ORCID: 0000-0002-3553-0787
    affiliation: Department of Physics and Geosciences, Universidad del Norte
  - name: Louis
    family_name: Moresi
    ORCID: 0000-0003-3685-174X
    affiliation: Research School of Earth Sciences, Australian National University
associated_publication:
  title: The Role of Lithospheric‐Deep Mantle Interactions on the Style and Stress Evolution of Arc‐Continent Collision
  publisher: American Geophysical Union
  journal: Geochemistry, Geophysics, Geosystems
  doi: 10.1029/2022gc010386
  url: http://dx.doi.org/10.1029/2022gc010386
compute_info:
  name: Nectar Research Cloud
  organisation: Australian Research Data Commons
  url: https://ardc.edu.au/services/ardc-nectar-research-cloud/
research_tags:
  - collision
  - subduction
  - accretion
  - published study
  - model output data
  - model input files
  - model postprocessing files
compute_tags:
  - C
  - Python
funder:
  - name: Asociación Colombiana de Geólogos y Geofísicos del Petróleo
    doi: ''
  - name: Australian Research Council
    doi:  https://ror.org/05mmh0f86
  - name: Ministerio de Ciencia, Tecnología e Innovación
    doi:  https://ror.org/03fd5ne08
  - name: Nectar Research Cloud
    doi:  https://ardc.edu.au/services/ardc-nectar-research-cloud/
  - name: University of Melbourne
    doi:  https://ror.org/01ej9dk98
  - name: National Computational Infrastructure
    doi:  https://ror.org/04yx6dh41
funding:
  - name: Asociación Colombiana de Geólogos y Geofísicos del Petróleo
    number_id: XVIII
    doi: ''
  - name: Australian Research Council
    number_id: IH130200012
    doi: ''
  - name: Australian Research Council
    number_id: DP150102887
    doi: ''
  - name: Ministerio de Ciencia, Tecnología e Innovación
    number_id: "783"
    doi: ''
abstract: >
  Continents grow by the successive accretion of material to their margins, mostly collision and accretion of intra-oceanic magmatic arcs. We investigate the effect of arc buoyancy and viscosity on the mode of collision, and the effects on the margin using a computer modeling approach. Our simulations show that upon collision, it is a small differential in density (3%) between the colliding arc and the continental margin that dictates whether subduction continues or stops after collision. In addition, our models show that arc buoyancy and viscosity drive lithospheric extension in the continental plate. Also, as the subducting slab reaches a mantle discontinuity at 660 km depth, it folds and causes strain and stress fluctuations on the margin.
images:
  landing_image:
    src: ./graphics/landing_image.png
    caption: ""
  graphic_abstract:
    src: ./graphics/graphic_abstract.png
    caption: ""
  model_setup:
    src: ./graphics/model_setup.jpg
    caption:
animation:
  src: ./graphics/animation_25.mp4
  caption: "Alt text for animation 1"
model_setup_info:
  url:
  summary: We solve the Stokes equation to balance buoyancy forces, viscous stresses, and pressure gradients using the particle-in-cell, finite element code Underworld2/UWGeodynamics version 2.9.6. The models simulate arc-continent collision in a two-dimensional box, 3,600 km long and 800 km deep. The models comprise a 100–150 km-thick lithosphere, a 660 km-thick isoviscous upper mantle (asthenosphere), and a 140 km-thick isoviscous lower mantle. Our 3,600 × 800 km arc-continent collision models have a resolution of 296 (length) by 160 (depth) elements, which results in cells with a spatial resolution of 10.8 km (length) and 5 km (depth). This spatial resolution enables our models to account for the differences in thickness and composition between the crust and the lithosphere (Figures 1b–1e) in oceanic-continental plates and remnant intra-oceanic arcs. In our models, there are no imposed velocity boundary conditions. Therefore, subduction, mantle flow, arc-continent collision, and lithospheric deformation emerge entirely from buoyancy forces. We impose free-slip in all boundaries of the model except the bottom one, where we imposed no-slip.
dataset:
  url: https://dapds00.nci.org.au/thredds/catalog/nm08/MATE/corcho-2022-collision/catalog.html
  notes:
  file_tree:
  existing_identifier: ''
  nci_file_path: ''
model_files:
  url: https://github.com/dansand/corcho_2022_collision_test/tree/main/model_reproduction_files
  notes: ""
  existing_identifier: ''
  nci_file_path: ''
---
