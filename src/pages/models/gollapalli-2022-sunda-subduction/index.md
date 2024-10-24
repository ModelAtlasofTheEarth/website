---
templateKey: model
slug: gollapalli-2022-sunda-subduction
title: 'Subduction dynamics and plate coupling along seismically active margin: the role of slab steps'
date: '2024-08-19T01:26:29.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: ''
url: https://mate.science//models/gollapalli-2022-sunda-subduction
creditText: ''
software:
  name: 'Underworld2: Python Geodynamics Modelling for Desktop, HPC and Cloud'
  doi: https://doi.org/10.5281/zenodo.3975252
  url_source: ''
licence:
  licence_url: https://creativecommons.org/licenses/by/4.0/legalcode
  licence_image: ../../../img/licence/by.png
  description: Creative Commons Attribution 4.0 International
  licence_file: license.txt
submitter:
  name: Thyagarajulu
  family_name: Gollapalli
  ORCID: https://orcid.org/0000-0001-9394-4104
creators:
  - name: Thyagarajulu
    family_name: Gollapalli
    ORCID: 0000-0001-9394-4104
associated_publication: {}
compute_info:
  name: Gadi Supercomputer
  organisation: National Computational Infrastructure
  url: https://pid.nci.org.au/doi/f5966_0057_9267_4579
  doi: https://doi.org/10.25914/608bfd1838db2
research_tags: []
compute_tags: []
funder:
  - name: _No response_
    doi: ''
abstract: The negative buoyancy of the slab primarily controls the subducting plate and trench motions, and tectonic stresses around the convergent margins. Lateral variations in negative buoyancy associated with varying slab depth along strike must affect plate and margin motions, and, most importantly, have an impact on the stress acting across the margin, thereby setting the context for plate coupling, tectonics and present-day seismicity. Here, we investigated these interactions in 3-D subduction numerical models, focusing on along-trench variations in the subduction depth and the resulting perturbations to the force balance. While we focus on the steps in the slab depth, we additionally test the role of subducting plate, i.e., cohesion and viscosity, and upper plate properties, i.e., thickness, viscosity, and cohesion. The results show that the magnitude of convergence velocity only depends on the integrated slab mass and rheology of the subducting plate when the upper plate is thin. Instead, the trench retreat/advance is sensitive to the heterogeneity in the slab depth, and a complex pattern arises atop the slab step, with a characteristic length of ~500 km from the slab depth perturbation. The remaining parameters of the subducting and upper plate mainly affect the magnitude of the trench velocities with minor influence on the pattern. The highest deformation/stress in the upper plate is observed around the slab step due to the rigidity of the plate, causing mutual perturbation between the deep and shallow slab portions, and the lateral flow around the step. These results are compared with the observations along the Sunda margin, where similar slab depth variations are found. The upper plate deformation in the model shows remarkable compatibility with the observed distributions of compression and extension of the Andaman- Sumatra-Java segments. Our study indicates that trench-parallel forces, arising from the natural variations of slab depth, exert a first-order control on the plate coupling and deformation along convergent margins and should not be neglected.
description: The negative buoyancy of the slab drives subducting plate and trench motions, influencing tectonic stresses at convergent margins. Variations in slab depth along the trench affect plate coupling and seismicity. We investigated these effects using 3-D subduction models, focusing on slab depth variations and their impact on force balance. Results show convergence velocity is primarily controlled by slab mass and subducting plate rheology, while trench movement is sensitive to slab depth heterogeneity. The highest stress occurs around slab steps, aligning with deformation patterns observed along the Sunda margin. This study highlights the crucial role of trench-parallel forces in plate dynamics.
images:
  landing_image:
    src: ./graphics/vel_sr_inv_landing_page.png
    caption: "\nMantle flow and upper plate deformation due to slab step"
  graphic_abstract:
    src: ./graphics/sketch.png
    caption: "\nSketch of the tectonic forces acting at the Sunda margin and interface stress along Andaman (DD’), Sumatra (FF’), and Java (MM’). At the Sumatra margin, an additional transferred force ($F^*_{SP}$) from Java is acting that contributes to crustal thickening/compression in the upper plate. The blue stars represent the interplate earthquakes, and black dots are intraplate seismicity. The sketch neglects the curvature of the trench and the obliquity of convergence."
  model_setup:
    src: ./graphics/model_matvar_edit_model_setup.png
    caption: "\nNumerical model setup. The parameter `d` denotes the depth of the long slab (i.e., 660 km, green plane), and `Δ𝑑` represents step length (i.e., the difference between the long and short slab). The long and short slabs extend from 0-2000 and 2000-4000 km in the Y-direction. The trench is located at X = 2000 km."
animation:
  src: ./graphics/side_view_snapshot.png
  caption: "\nMantle flow and upper plate deformation due to slab step"
model_setup_info:
  url: ''
  summary: The model setup consists of the subducting plate with attached slab and upper plate inserted in the 660 km upper mantle lying over 340 km lower mantle. The model extends 4000 km in each x, y, and 1000 km in the z-axis with a numerical resolution of 512×512×128, respectively. This resolution results in an element size of 7.8 km in all three directions. Each element is populated with 20 Lagrangian particles to store material properties. All boundaries in the model are under free slip conditions. All models include a 100 km thick subducting plate and slab. The rheology in the top 30 km (crust) is viscoplastic, and the rest (70 km lithospheric mantle) is viscous. Oceanic lithosphere has a density contrast of 50 $kg/m^3$ with respect to the underlying sublithospheric mantle. The entire slab has a uniform initial dip angle of 45°. The upper plate consists of crust 30 km thick, and its lithospheric mantle thickness is varied between 20 km, 40 km, and 60 km. The trailing end of the subducting plate is free and upper plate end is fixed. The density contrast between the upper plate and mantle is set to zero. This avoids lithostatic pressure gradients, and the stress distribution in the upper plate is only influenced by the dynamics driven by lateral slab buoyancy variations.  Therefore, the stress distribution in the upper plate can be used as a proxy for tectonic coupling at the interface.
model_files:
  url: ''
  notes: Underworld2 input files of Sunda Subduction Zone (3D cartesian models).
  file_tree: ''
  existing_identifier: https://doi.org/10.5281/zenodo.7022845
  nci_file_path: https://thredds.nci.org.au/thredds/catalog/nm08/MATE/gollapalli-2022-sunda-subduction/catalog.html
  include: true
dataset:
  url: ''
  notes: Output data mainly contains *.h5 and *.xdmf files.
  existing_identifier: ''
  nci_file_path: https://thredds.nci.org.au/thredds/catalog/nm08/MATE/gollapalli-2022-sunda-subduction/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
