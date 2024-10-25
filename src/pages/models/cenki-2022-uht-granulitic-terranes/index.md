---
templateKey: model
slug: cenki-2022-uht-granulitic-terranes-1
title: 'Timing of partial melting and granulite formation during the genesis of high
  to ultra‐high temperature terranes: Insight from numerical experiments'
date: '2024-10-25T06:41:30.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: https://doi.org/10.25914/aaen-nc33
url: https://mate.science//models/cenki-2022-uht-granulitic-terranes-1
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
    src: ./graphics/Figure2_v9.png
    caption: ' Figure 2. A-B. Model geometry, initial conditions as well as geotherm,
      viscosity and density profiles. The circles pattern superimposed on the continental
      crust represents the finite strain ellipses. White squares represent the Lagrangian
      particles recording the PTt paths presented in Fig. 4. A. Initial conditions
      for models RHP2_diff, mimicking a Proterozoic highly differentiated and highly
      radiogenic crust. B. Initial conditions for model RHP1_unif, simulating a Phanerozoic
      uniform and less radiogenic crust. C-J. Orogenic modeling results showing two
      snapshots for each model: i) shortening-delamination and ii) collapse. Shortening
      velocity is either slow (0.24 cm.y-1, C-F) or fast (2.4 cm.y-1, G-J).'
  graphic_abstract:
    src: ./graphics/Figure3_v6.png
    caption: ' Figure 3. Depth – time profiles indicating the onset of partial melting
      and granulite formation through the evolution of the models.'
  model_setup:
    src: ''
    caption: ''
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
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/cenki-2022-uht-granulitic-terranes-1/catalog.html
  include: true
dataset:
  url: ''
  notes: ''
  existing_identifier: ''
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/cenki-2022-uht-granulitic-terranes-1/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
