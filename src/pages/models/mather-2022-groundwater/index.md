---
templateKey: model
slug: mather-2022-groundwater
title: Constraining the response of continental-scale groundwater flow to climate
  change
date: '2024-05-20T02:00:54.000Z'
featuredpost:
for_codes:
  - 370401
status:
doi: https://doi.org/10.25914/t2mn-bk81
url: https://mate.science/models/mather-2022-groundwater
creditText: Mather, B., Müller, R. Dietmar., O'Neill, C., Beall, A.,
  Vervoort, R. Willem., & Moresi, Louis. (2024). Constraining the response of continental-scale
  groundwater flow to climate change [Data set]. AuScope, National Computational Infrastructure.
  https://doi.org/10.25914/t2mn-bk81
software:
  name: 'Underworld2: Python Geodynamics Modelling for Desktop, HPC and Cloud'
  doi: https://doi.org/10.5281/zenodo.7455999
  url_source: https://github.com/underworldcode/underworld2
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
  - name: Ben
    family_name: Mather
    ORCID: 0000-0003-3566-1557
  - name: Dietmar
    family_name: Müller
    ORCID: 0000-0002-3334-5764
  - name: Craig
    family_name: O'Neill
    ORCID: 0000-0002-6034-1881
  - name: Adam
    family_name: Beall
    ORCID: 0000-0002-7182-1864
  - name: R.Willem
    family_name: Vervoort
    ORCID: 0000-0002-6557-0237
  - name: Louis-Noel
    family_name: Moresi
    ORCID: 0000-0003-3685-174X
associated_publication:
  title: Constraining the response of continental-scale groundwater flow to climate change
  url: http://dx.doi.org/10.1038/s41598-022-08384-w
  doi: 10.1038/s41598-022-08384-w
  publisher: Springer Science and Business Media LLC
  journal: Scientific Reports
  date: 2022-3-16
  authors:
    - name: Ben
      family_name: Mather
    - name: R. Dietmar
      family_name: Müller
    - name: Craig
      family_name: O’Neill
    - name: Adam
      family_name: Beall
    - name: R. Willem
      family_name: Vervoort
    - name: Louis
      family_name: Moresi
compute_info:
  name: National Computational Infrastructure
  organisation: ''
  url: https://ror.org/04yx6dh41
  doi: https://ror.org/04yx6dh41
research_tags:
  - groundwater
  - thermal-hydraulic
  - Bayesian
  - water-management
  - Python
compute_tags:
  - Python
  - C
  - finite element
  - heat equation
  - advection-diffusion
funder:
  - name: NSW Department of Industry
    doi: ''
  - name: AuScope
    doi: https://ror.org/04s1m4564
abstract: Numerical models of groundwater flow play a critical role for water management
  scenarios under climate extremes. Large-scale models play a key role in determining
  long range flow pathways from continental interiors to the oceans, yet struggle
  to simulate the local flow patterns offered by small-scale models. We have developed
  a highly scalable numerical framework to model continental groundwater flow which
  capture the intricate flow pathways between deep aquifers and the near-surface.
  The coupled thermal-hydraulic basin structure is inferred from hydraulic head measurements,
  recharge estimates from geochemical proxies, and borehole temperature data using
  a Bayesian framework. We use it to model the deep groundwater flow beneath the Sydney–Gunnedah–Bowen
  Basin, part of Australia’s largest aquifer system. Coastal aquifers have flow rates
  of up to 0.3 m/day, and a corresponding groundwater residence time of just 2,000
  years. In contrast, our model predicts slow flow rates of 0.005 m/day for inland
  aquifers, resulting in a groundwater residence time of 400,000 years. Perturbing
  the model to account for a drop in borehole water levels since 2000, we find that
  lengthened inland flow pathways depart significantly from pre-2000 streamlines as
  groundwater is drawn further from recharge zones in a drying climate. Our results
  illustrate that progressively increasing water extraction from inland aquifers may
  permanently alter long-range flow pathways. Our open-source modelling approach can
  be extended to any basin and may help inform policies on the sustainable management
  of groundwater.
description: This model was developed in order to study groundwater flow on a continental
  scale, focusing on the Sydney–Gunnedah–Bowen Basin in Australia. Using data such
  as hydraulic head measurements and borehole temperatures, it predicts how water
  moves through deep aquifers to the surface. Coastal aquifers show fast water flow,
  while inland aquifers have much slower flow. The study shows that increased water
  extraction from inland areas could permanently change water flow patterns. This
  open-source model can be used for other regions and aims to support sustainable
  groundwater management policies
images:
  landing_image:
    src: ./graphics/fig1.png
    caption: ''
  graphic_abstract:
    src: ./graphics/fig1.png
    caption: "Coupled heat-groundwater flow model of the Sydney–Gunnedah–Bowen Basin
      based on the MAP estimate of material properties and boundary conditions. (A)
      Groundwater velocity field with coal seams outlined in grey overlain with temperature
      gradients measured in boreholes. This visualisation of the velocity field obtained
      from our model was rendered in 3D using Paraview 5.9 (https://www.paraview.org/).
      (B) temperature field overlain with heat flux vectors. The 2D slice was generated
      from our models using Matplotlib 3.4 (https://matplotlib.org/).\n"
  model_setup:
    src: ./graphics/figure_2.png
    caption: 3D stratigraphy of the Sydney–Gunnedah–Bowen Basin. The vertical spacing
      of layers has been exaggerated for visual clarity. The model of the basin was
      rendered in 3D using Underworld.
animation:
  src:
  caption:
model_setup_info:
  url: ''
  summary: In this paper, we apply our numerical framework to the  Sydney–Gunnedah–Bowen
    (SGB) Basin in eastern Australia. The SGB Basin  covers about 1.5 million square
    kilometers, and we model it in  high-resolution 3D, using over 10 million cells
    (or 6 x 6 x 0.6 km, in the x, y, z directions, respectively)  to detail flow patterns
    down to 12 km beneath the crust.  By adjusting the model to match real-world data,
    it provides accurate insights into water and heat movement through deep aquifers
    in  large areas. Temperature advection due to groundwater flow is described  by
    the advection-diffusion equation. Darcy flux is calculated from the groundwater
    flow equation. Groundwater recharge and discharge  are driven by changes in hydraulic
    head, which is set to the height of  the water table at the top boundary surface.
    The thermal boundary conditions include a constant temperature set to  the top
    boundary, which corresponds to the annual mean surface  temperature. The side
    walls are assigned zero flux, and the bottom  temperature boundary is an unknown
    variable that we invert from borehole temperature data within our Bayesian optimization
    scheme.
model_files:
  url: ''
  notes: In the Scripts folder, HL05 was used to run the optimisation problem and
    HL06 was used to take the maximum a posteriori model and run it at high resolution.
  file_tree: ''
  existing_identifier: https://github.com/brmather/Sydney_Basin/tree/master
  nci_file_path:
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/mather-2022-groundwater/catalog.html
  include: true
dataset:
  url: ''
  notes: "model_output_data contains the following file types:\r\n\r\n.h5 - Underworld2
    data files\r\n.xdmf- Underworld2 xdmf header files\r\n.csv - Various data in csv
    format\r\n.npz - data on numpy binary format\r\n.png - image files\r\n.pvsm -
    Paraview state files\r\n.txt - data in .txt format"
  existing_identifier: ''
  nci_file_path:
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/mather-2022-groundwater/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
