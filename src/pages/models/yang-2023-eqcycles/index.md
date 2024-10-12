---
templateKey: model
slug: yang-2023-eqcycles
title: Numerical Modeling of Earthquake Cycles Based On Navier-Stokes Equations With
  Viscoelastic-Plasticity Rheology
date: '2024-08-16T07:38:53.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: https://doi.org/10.25914/3jz9-mv44
url: https://mate.science//models/yang-2023-eqcycles
creditText: Yang, H., Moresi, Louis., Weng, H., & Giordani, J. (2024). Numerical Modeling
  of Earthquake Cycles Based On Navier-Stokes Equations With Viscoelastic-Plasticity
  Rheology [Data set]. AuScope, National Computational Infrastructure. https://doi.org/3jz9-mv44
software:
  name: Underworld
  doi: https://doi.org/10.5281/zenodo.3975252
  url_source: ''
licence:
  licence_url: https://creativecommons.org/licenses/by/4.0/legalcode
  licence_image: ../../../img/licence/by.png
  description: Creative Commons Attribution 4.0 International
  licence_file: license.txt
submitter:
  name: Haibin
  family_name: Yang
  ORCID: https://orcid.org/0000-0002-8628-3704
creators:
  - name: Haibin
    family_name: Yang
    ORCID: 0000-0002-8628-3704
  - name: Louis-Noel
    family_name: Moresi
    ORCID: 0000-0003-3685-174X
  - name: Huihui
    family_name: Weng
    ORCID: 0000-0002-2936-2342
  - name: Julian
    family_name: Giordani
    ORCID: 0000-0003-4515-9296
associated_publication:
  title: Numerical Modeling of Earthquake Cycles Based On Navier‐Stokes Equations
    With Viscoelastic‐Plasticity Rheology
  url: http://dx.doi.org/10.1029/2023gc010872
  doi: 10.1029/2023gc010872
  publisher: American Geophysical Union (AGU)
  journal: Geochemistry, Geophysics, Geosystems
  date: 2023-9
  authors:
    - name: Haibin
      family_name: Yang
    - name: Louis
      family_name: Moresi
    - name: Huihui
      family_name: Weng
    - name: Julian
      family_name: Giordani
compute_info:
  name: ''
  organisation: ''
  url: ''
  doi: ''
research_tags:
  - Earthquake Cycles
  - Navier-Stokes
  - Viscoelastic-Plasticity
  - Cratonic Earthquakes
compute_tags:
  - Python
  - Finite element
  - Particle-in-cell
funder:
  - name: National Natural Science Foundation of China
    doi: https://ror.org/01h0zpd94
  - name: National Computational Infrastructure
    doi: https://ror.org/04yx6dh41
funding:
  - name: National Natural Science Foundation of China
    doi: https://ror.org/01h0zpd94
    number_id: '#42030306'
abstract: "Visco-elastic-plastic modeling approaches for long-term tectonic deformation
  assume that\r\nco-seismic fault displacement can be integrated over 1000s–10,000s
  years (tens of earthquake cycles) with the\r\nappropriate failure law, and that
  short-timescale fluctuations in the stress field due to individual earthquakes\r
  \nhave no effect on long-term behavior. Models of the earthquake rupture process
  generally assume that the\r\ntectonic (long-range) stress field or kinematic boundary
  conditions are steady over the course of multiple\r\nearthquake cycles. This study
  is aimed to fill the gap between long-term and short-term deformations by\r\nmodeling
  earthquake cycles with the rate-and-state frictional (RSF) relationship in Navier-Stokes
  equations.\r\nWe reproduce benchmarks at the earthquake timescale to demonstrate
  the effectiveness of our approach. We\r\nthen discuss how these high-resolution
  models degrade if the time-step cannot capture the rupture process\r\naccurately
  and, from this, infer when it is important to consider coupling of the two timescales
  and the level of\r\naccuracy required. To build upon these benchmarks, we undertake
  a generic study of a thrust fault in the crust\r\nwith a prescribed geometry. It
  is found that lower crustal rheology affects the periodic time of characteristic\r
  \nearthquake cycles and the inter-seismic, free-surface deformation rate. In particular,
  the relaxation of the\r\nsurface of a cratonic region (with a relatively strong
  lower crust) has a characteristic double-peaked uplift\r\nprofile that persists
  for thousands of years after a major slip event. This pattern might be diagnostic
  of active\r\nfaults in cratonic regions."
description: "The numerical modeling method for long-term tectonic deformations\r\n
  averages out the co-seismic fault displacement into thousands to tens of thousands
  of years, and neglects\r\nnear-fault damages of earthquakes; therefore, it may not
  be able to decipher fault activities in detail. Software\r\nsimulating earthquake
  rupture dynamics may not have a good estimation of background stress due to longterm\r
  \ntectonic deformations. In this study, we develop a numerical framework that embeds
  earthquake rupture\r\ndynamics into a long-term tectonic deformation model by adding
  inertial terms and using highly adaptive\r\ntime-stepping that can capture deformation
  at plate-motion rates as well as individual earthquakes. The inertia\r\nterm, which
  is neglected in long-term large-scale modeling methods, is considered to simulate
  the dynamic\r\nrupture processes. The rate-and-state frictional relationship for
  co-seismic fault slip is implemented in\r\nviscoelastic-plastic earth. Benchmarks
  of viscous flow, viscoelastic wave propagation and earthquake cycle\r\nsimulations
  are tested. Based on these benchmarks, we undertake a generic study of a thrust
  fault in crust.\r\nWe find that lower crustal rheology affects the periodic time
  of characteristic large earthquake cycles and the\r\ninter-seismic free surface
  movement. Cratons with a relatively strong lower crust due to lower temperature\r
  \nremain two peaks in surface uplift profiles around the fault zone for thousands
  of years after one characteristic\r\nearthquake, which help identify active faults
  in cratons."
images:
  landing_image:
    src: ./graphics/Fig5_Compare1100.jpg
    caption: "Figure 5. Evolution of the stress at the reference point (0, 0, −10
      km) (a), maximum slip rate along the entire fault zone (b)\nand the adaptive
      time step used in simulation (c) for the reference model."
  graphic_abstract:
    src: ''
    caption: ''
  model_setup:
    src: ./graphics/Fig4_BP5ModelSetup.jpg
    caption: "Figure 4. The benchmark model BP5 for 3D sequence of earthquakes and\n
      aseismic slip modeling. (a) A vertical planar fault is embedded in the middle\n
      of a homogenous, isotropic half-space with a free surface at z = 0. Fault\n
      behavior is controlled by the rate-and-state friction law. A periodic boundary\n
      condition is applied in y direction. (b) The velocity-weakening (VW) region\n
      (dark and light blue) is located within a transition zone (white), outside of\n
      which is the velocity-strengthening (VS) region (gray). In y and z directions,\n
      the frictional domain and VW region are (L2, L3) and (l, w), respectively. An\n
      initial nucleation zone (dark blue square with a width of w) is designed at
      the\nleft end of the VW region."
animation:
  src: ./graphics/
  caption: ''
model_setup_info:
  url: ''
  summary: "The BP5 benchmark is first simulated with a reference model size of 96
    km (L1) × 100 km (L2) × 30 km\r\n(L3) by 128 × 64 × 64 quadrilateral bilinear
    elements. Results from the SEAS code comparison platform (https://\r\nstrike.scec.org/cvws/seas/)
    with the mesh resolution of 1000 m are selected for comparison in this study (Table
    2).\r\nThe stress at a depth of 10 km in the middle point along the fault strike
    (y = 0) and the maximum slip rate along\r\nthe entire fault are tracked for comparison
    (Figure 5). 0.1 m/s is taken as a threshold of fault slip rate to mark\r\nthe
    earthquake initiation."
model_files:
  url: ''
  notes: ''
  file_tree: ''
  existing_identifier: ''
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/yang-2023-eqcycles/catalog.html
  include: true
dataset:
  url: ''
  notes: ''
  existing_identifier: ''
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/yang-2023-eqcycles/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
