---
templateKey: model
slug: cenki-2022-uht-granulitic-terranes
title: 'Subduction dynamics and plate coupling along seismically active margin: the
  role of slab steps'
date: '2024-10-24T02:18:49.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: https://doi.org/10.25914/vw5k-q269
url: https://mate.science//models/gollapalli-2022-sunda-subduction
creditText: 'Gollapalli, T. (2024). Subduction dynamics and plate coupling along seismically
  active margin: the role of slab steps [Data set]. AuScope, National Computational
  Infrastructure. https://doi.org/vw5k-q269'
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
associated_publication:
  title: Unravelling tectonic coupling and loading along the Sunda margin through 3-D regional numerical  modelling
  doi: https://doi.org/10.26180/21664034.v1
  date: 2022-12
  authors:
    - name: Thyagarajulu
      family_name: Gollapalli
compute_info:
  name: Gadi Supercomputer
  organisation: National Computational Infrastructure
  url: https://pid.nci.org.au/doi/f5966_0057_9267_4579
  doi: https://doi.org/10.25914/608bfd1838db2
research_tags:
  - Subduction
  - Plate boundary
compute_tags:
  - Python
  - Finite element
  - Particle-in-cell
funder:
  name: National Computational Infrastructure
  doi: https://ror.org/04yx6dh41
abstract: The negative buoyancy of the slab primarily controls the subducting plate
  and trench motions, and tectonic stresses around the convergent margins. Lateral
  variations in negative buoyancy associated with varying slab depth along strike
  must affect plate and margin motions, and, most importantly, have an impact on the
  stress acting across the margin, thereby setting the context for plate coupling,
  tectonics and present-day seismicity. Here, we investigated these interactions in
  3-D subduction numerical models, focusing on along-trench variations in the subduction
  depth and the resulting perturbations to the force balance. While we focus on the
  steps in the slab depth, we additionally test the role of subducting plate, i.e.,
  cohesion and viscosity, and upper plate properties, i.e., thickness, viscosity,
  and cohesion. The results show that the magnitude of convergence velocity only depends
  on the integrated slab mass and rheology of the subducting plate when the upper
  plate is thin. Instead, the trench retreat/advance is sensitive to the heterogeneity
  in the slab depth, and a complex pattern arises atop the slab step, with a characteristic
  length of ~500 km from the slab depth perturbation. The remaining parameters of
  the subducting and upper plate mainly affect the magnitude of the trench velocities
  with minor influence on the pattern. The highest deformation/stress in the upper
  plate is observed around the slab step due to the rigidity of the plate, causing
  mutual perturbation between the deep and shallow slab portions, and the lateral
  flow around the step. These results are compared with the observations along the
  Sunda margin, where similar slab depth variations are found. The upper plate deformation
  in the model shows remarkable compatibility with the observed distributions of compression
  and extension of the Andaman- Sumatra-Java segments. Our study indicates that trench-parallel
  forces, arising from the natural variations of slab depth, exert a first-order control
  on the plate coupling and deformation along convergent margins and should not be
  neglected.
description: The negative buoyancy of the slab drives subducting plate and trench
  motions, influencing tectonic stresses at convergent margins. Variations in slab
  depth along the trench affect plate coupling and seismicity. We investigated these
  effects using 3-D subduction models, focusing on slab depth variations and their
  impact on force balance. Results show convergence velocity is primarily controlled
  by slab mass and subducting plate rheology, while trench movement is sensitive to
  slab depth heterogeneity. The highest stress occurs around slab steps, aligning
  with deformation patterns observed along the Sunda margin. This study highlights
  the crucial role of trench-parallel forces in plate dynamics.
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
