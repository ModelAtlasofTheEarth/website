---
templateKey: model
slug: cenki-2022-uht-granulitic-terranes
title: 'Timing of partial melting and granulite formation during the genesis of high
  to ultra‐high temperature terranes: Insight from numerical experiments'
date: '2024-10-25T06:41:30.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: https://doi.org/10.25914/aaen-nc33
url: https://mate.science//models/cenki-2022-uht-granulitic-terranes
creditText: 'Cenki-Tok or Cenki, B., Rey, Patrice F.., Arcay, D., & Giordani, J. (2024).
  Timing of partial melting and granulite formation during the genesis of high to
  ultra‐high temperature terranes: Insight from numerical experiments [Data set].
  AuScope, National Computational Infrastructure. https://doi.org/aaen-nc33'
software:
  name: Underworld 2
  doi: https://doi.org/10.5281/zenodo.3975252
  url_source: ''
licence:
  licence_url: https://creativecommons.org/licenses/by/4.0/legalcode
  licence_image: ../../../img/licence/by.png
  description: Creative Commons Attribution 4.0 International
  licence_file: license.txt
submitter:
  name: Bénédicte
  family_name: Cenki-Tok or Cenki
  ORCID: https://orcid.org/0000-0001-7649-4498
creators:
  - name: Bénédicte
    family_name: Cenki-Tok or Cenki
    ORCID: 0000-0001-7649-4498
  - name: Patrice
    family_name: Rey
    ORCID: 0000-0002-1767-8593
  - name: Diane
    family_name: Arcay
    ORCID: 0000-0001-6773-0807
  - name: Julian
    family_name: Giordani
    ORCID: 0000-0003-4515-9296
associated_publication:
  title: 'Timing of partial melting and granulite formation during the genesis of
    high to ultra‐high temperature terranes: Insight from numerical experiments'
  url: http://dx.doi.org/10.1111/ter.12577
  doi: 10.1111/ter.12577
  publisher: Wiley
  journal: Terra Nova
  date: 2022-1-14
  authors:
    - name: Bénédicte
      family_name: Cenki
    - name: Patrice F.
      family_name: Rey
    - name: Diane
      family_name: Arcay
    - name: Julian
      family_name: Giordani
compute_info:
  name: ''
  organisation: ''
  url: ''
  doi: ''
research_tags:
  - HT‐UHT terranes
  - Orogenic cycle
compute_tags:
  - Python
  - Finite Element
funder:
  - name: ''
    doi: ''
abstract: Long‐lived high to ultra‐high temperature (HT‐UHT) granulitic terranes formed
  throughout Earth's history. Yet, the detailed processes involved in their formation
  remain unresolved and notably the sequence of appearance and duration of migmatisation
  and granulites conditions in the orogenic cycle. These processes can be evaluated
  by analytical and numerical models. First, solving the steady‐state heat equation
  allows underlining the interdependency of the parameters controlling the crustal
  geotherm at thermal equilibrium. Second, performing two‐dimensional thermo‐mechanical
  experiments of an orogenic cycle, from shortening to gravitational collapse, allows
  to consider non‐steady‐state geotherms and understand how deformation velocity may
  affect the relative timing of migmatite and granulite formation. These numerical
  experiments with elevated radiogenic heat production and slow shortening rates allow
  the formation of large volumes of prograde migmatites and granulites going through
  the sillimanite field as observed in many HT‐UHT terranes. Finally, the interplay
  between these parameters can explain the difference in predicted pressure‐temperature‐time
  paths that can be compared with the natural rock archive.
description: Long-lived high to ultra-high temperature (HT-UHT) granulitic terranes
  formed throughout Earth's history. Yet, the detailed processes involved in their
  formation remain unresolved and notably the sequence of appearance and duration
  of migmatisation and granulites conditions in the orogenic cycle. These processes
  can be evaluated by analytical and numerical models. First, solving the steady-state
  heat equation allows underlining the interdependency of the parameters controlling
  the crustal geotherm at thermal equilibrium. Second, performing two-dimensional
  thermo-mechanical experiments of an orogenic cycle, from shortening to gravitational
  collapse, allows to consider non-steady-state geotherms and understand how deformation
  velocity may affect the relative timing of migmatite and granulite formation. These
  numerical experiments with elevated radiogenic heat production and slow shortening
  rates allow the formation of large volumes of prograde migmatites and granulites
  going through the sillimanite field as observed in many HT-UHT terranes. Finally,
  the interplay between these parameters can explain the difference in predicted pressure-temperature-time
  paths that can be compared with the natural rock archive.
images:
  landing_image:
    src: ./graphics/vel_sr_inv_landing_page.png
    caption: "\nMantle flow and upper plate deformation due to slab step"
  graphic_abstract:
    src: ./graphics/sketch.png
    caption: "\nSketch of the tectonic forces acting at the Sunda margin and interface
      stress along Andaman (DD’), Sumatra (FF’), and Java (MM’). At the Sumatra margin,
      an additional transferred force ($F^*_{SP}$) from Java is acting that contributes
      to crustal thickening/compression in the upper plate. The blue stars represent
      the interplate earthquakes, and black dots are intraplate seismicity. The sketch
      neglects the curvature of the trench and the obliquity of convergence."
  model_setup:
    src: ./graphics/model_matvar_edit_model_setup.png
    caption: "\nNumerical model setup. The parameter `d` denotes the depth of the
      long slab (i.e., 660 km, green plane), and `Δ𝑑` represents step length (i.e.,
      the difference between the long and short slab). The long and short slabs extend
      from 0-2000 and 2000-4000 km in the Y-direction. The trench is located at X
      = 2000 km."
animation:
  src: ./graphics/
  caption: ''
model_setup_info:
  url: ''
  summary: "The numerical models are performed with Underworld, a well-tested open-source
    finite element code, to solve the equations of conservation of momentum, mass,
    and energy for an incompressible fluid on a Cartesian Eulerian mesh (Moresi et
    al., 2007; Beucher et al., 2019). The 2D thermo-mechanical experiments involve
    a geological model of dimensions 480 km x 160 km discretized over a computational
    grid made of 240 x 80 elements. The initial setup consists of a 35 km or 40 km
    thick crust with 20 km of air-like material above, and mantle below (Fig. 2A-B).
    Each model runs through three stages: \r\n\r\ni) a shortening phase during which
    the crust thickens to ~ 60 km with either a slow total velocity of 0.24 cm/yr
    during 70 My or a fast total velocity of 2.4 cm/yr during ~ 7 My (delivering a
    strain rate averaged over the length of the model of $1.6 \\times 10^{-16} s^{-1}$
    and $1.6 \\times 10^{-15} s^{-1}$ respectively); ii) a rapid increase in BHF (from
    $0.020 W/m^2$ to $0.030 W/m^2$) over 2.5 My while the velocities imposed on the
    vertical boundaries are set to zero (vx = vy = 0 cm/yr) mimicking the thermal
    impact of a mantle delamination phase; iii) a relaxation phase in which the crust
    returns to normal thickness under slow extensional boundary conditions (total
    velocity of 0.10 cm/yr) associated with a decrease in BHF from $0.030 W/m^2$ to
    $0.020 W/m^2$ in ~ 70 My. Details of modeling procedures, rheological and thermal
    parameters, as well as the input Python script, are available as supplementary
    data.\r\n\r\nThese experiments focus on two end-member crustal structures with
    average values of total RHP at ~ $1 \\mu W/m^3$ and ~ $2 \\mu W/m^3$ (Fig. 2).
    A value of ~ $1 \\mu W/m^3$ is in line with RHP calculations predicted from the
    present-day composition of the bulk continental crust determined by Taylor and
    McLennan (1995). Models RHP1_unif mimic a Phanerozoic orogenic cycle involving
    a continental crust with a uniform RHP ($1.0483 \\mu W/m^3$) yielding an initial
    Moho temperature of 650°C at 40 km depth (Fig. 1A). However, Mareschal and Jaupart
    (2013), Artemieva et al. (2017), and Gard et al. (2019) showed that the crustal
    RHP may have been higher than ~ $1 \\mu W/m^3$ during the Proterozoic, having
    varied between ~ $0.8 \\mu W/m^3$ and ~ $4 \\mu W/m^3$ between 0.5 Ga and 2.5
    Ga with an average RHP close to ~ $2 \\mu W/m^3$. In addition, recent studies
    reveal that, in tectonically stable regions, the upper crust’s RHP may be higher
    than in the lower crust (Goes et al., 2020; Alessio et al., 2020). The conditions
    for model RHP2_diff include a total average RHP of ~ $2.0922 \\mu W/m^3$ with
    high RHP in the upper crust (~ $5 \\mu W/m^3$) that decreases exponentially with
    a length scale factor $h_c$ of 20 km yielding an initial Moho temperature at 35
    km depth of 650°C (Fig. 1D). Models RHP2_diff aim at approaching thermal conditions
    of a differentiated crust prevailing during the Proterozoic."
model_files:
  url: ''
  notes: ''
  file_tree: ''
  existing_identifier: https://github.com/underworld-community/cenki-et-al-UHT-granulitic-terranes
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/cenki-2022-uht-granulitic-terranes/catalog.html
  include: true
dataset:
  url: ''
  notes: ''
  existing_identifier: ''
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/cenki-2022-uht-granulitic-terranes/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
