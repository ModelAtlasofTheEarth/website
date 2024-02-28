---
templateKey: 'model'
slug: 'mather-2022-groundwater'
title: 'Constraining the response of continental‐scale groundwater flow to climate change'
date: 2023-08-28T17:04:10.000Z
featuredpost: false
for_codes:
  - 0406
  - 0403
  - 040603
  - 040601
  - 040301
status: completed
software:
  - name: Underworld2
    doi: 10.5281/zenodo.7455999
    url_source: https://zenodo.org/records/7455999
licence:
  name: CC BY 4.0
  licence_url: https://creativecommons.org/licenses/by/4.0/
  licence_image: ../../../img/licence/by.png
  description: CC BY 4.0 DEED Attribution 4.0 International
  licence_file: ./licence.txt
contributor:
  name: Ben
  family_name: Mather
  ORCID: 0000-0003-3566-1557
  affiliation: University of Sydney
authors:
  - name: Ben
    family_name: Mather
    email: ben.mather@sydney.edu.au
    ORCID: 0000-0003-3566-1557
    affiliation: University of Sydney
  - name: Dietmar
    family_name: Müller
    ORCID: 0000-0002-3334-5764
    affiliation: University of Sydney
  - name: Craig
    family_name: O’Neill
    ORCID: 0000-0002-6034-1881
    affiliation: Queensland University of Technology
  - name: Adam
    family_name: Beall
    ORCID: 0000-0002-7182-1864
    affiliation: School of Earth and Environmental Sciences, Cardiff University
  - name: Willem
    family_name: Vervoort
    ORCID: 0000-0002-6557-0237
    affiliation: University of Sydney
  - name: Louis
    family_name: Moresi
    ORCID: 0000-0003-3685-174X
    affiliation: Research School of Earth Sciences, Australian National University
associated_publication:
  title: Constraining the response of continental-scale groundwater flow to climate change
  journal: Scientific Reports
  publisher: Nature
  doi: 10.1038/s41598-022-08384-w
  url: http://dx.doi.org/10.1038/s41598-022-08384-w
compute_info:
  computer_name:
  organisation:
  doi:
  url:
research_tags:
  - groundwater
  - basins
  - Darcy
  - Climate Change
compute_tags:
  - Python
grants_funders:
  - funder_name: National Collaborative Research Infrastructure Strategy, NCRIS
    number_id:
    doi:
abstract: >
  Numerical models of groundwater flow play a critical role for water management scenarios under climate extremes. Large-scale models play a key role in determining long range flow pathways from continental interiors to the oceans, yet struggle to simulate the local flow patterns ofered by small-scale models. We have developed a highly scalable numerical framework to model continental groundwater flow which capture the intricate flow pathways between deep aquifers and the near-surface. The coupled thermal-hydraulic basin structure is inferred from hydraulic head measurements, recharge estimates from geochemical proxies, and borehole temperature data using a Bayesian framework. We use it to model the deep groundwater flow beneath the Sydney–Gunnedah–Bowen Basin, part of Australia’s largest aquifer system. Coastal aquifers have flow rates of up to 0.3 m/ day, and a corresponding groundwater residence time of just 2,000 years. In contrast, our model predicts slow flow rates of 0.005 m/day for inland aquifers, resulting in a groundwater residence time of ∼400,000 years. Perturbing the model to account for a drop in borehole water levels since 2000, we fnd that lengthened inland flow pathways depart signifcantly from pre-2000 streamlines as groundwater is drawn further from recharge zones in a drying climate. Our results illustrate that progressively increasing water extraction from inland aquifers may permanently alter long-range flow pathways. Our open-source modelling approach can be extended to any basin and may help inform policies on the sustainable management of groundwater.
images:
  landing_image:
    src: ./graphics/fig1.png
    caption:
  graphic_abstract:
    src: ./graphics/fig1.png
    caption:
  model_setup:
    src: ./graphics/figure_2.png
    caption:
animations:
  - src:
    caption:
model_setup_info:
  url:
  summary: |
    We populate a 3D model of basin architecture (as shown in figure) with initial thermal and hydraulic material properties described in Table 1 of Mather, et. al, 2022.
    The vertical spacing of layers has been exaggerated for visual clarity.
    The model of the basin was rendered in 3D using Underworld.
    Groundwater recharge and discharge are driven by changes in hydraulic head.
    The hydraulic head prescribed to the top boundary surface is set to the height of the water table.
    The thermal boundary conditions include a constant temperature set to the top boundary $(T_0 = 18 \mathrm{\degree C})$, which corresponds to the annual mean surface temperature.
    The side walls are assigned zero fux and the bottom temperature boundary, $T_1$, is an unknown variable that we invert from borehole temperature data within our Bayesian optimisation scheme.
dataset:
  url:  https://cloudstor.aarnet.edu.au/plus/s/kNwa6dN6nXxXs55
  doi:
  notes:
  file_tree:
model_files:
  url: https://github.com/brmather/Sydney_Basin
  notes: In the Scripts folder, HL05 was used to run the optimisation problem and HL06 was used to take the maximum a posteriori model and run it at high resolution.
  file_tree:
---
