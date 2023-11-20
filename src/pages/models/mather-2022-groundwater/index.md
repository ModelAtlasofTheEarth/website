# no spaces in key names, use underscores please
# - / > multiline text (what is the difference) 
# https://yaml.org/spec/1.2.2/
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
#repeat these items for several softwares
software:
  - name: Underworld2
    doi: 10.5281/zenodo.7455999
    url_source: https://zenodo.org/records/7455999
licence: 
  - name: cc-by-4.0
    licence_url: https://creativecommons.org/licenses/by/4.0/ 
    licence_image: https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png
    description: CC BY 4.0 DEED Attribution 4.0 International
contributor:
    name: Ben
    family_name: Mather
    email: ben.mather@sydney.edu.au
    ORCID: 0000-0003-3566-1557
    affiliation: University of Sydney
#repeat these items for several authors
authors:
  - name: Ben
    family_name: Mather
    email: ben.mather@sydney.edu.au
    ORCID: 0000-0003-3566-1557
    affiliation: University of Sydney
#repeat thes items for several authors
associated_publication:
  - title: Scientific Reports
    journal: Nature
    publisher: Springer Nature
    doi: https://doi.org/10.1038/s41598-022-08384-w
    url: https://www.nature.com/articles/s41598-022-08384-w
compute info:
  computer_name:
  organisation:
  doi:
  url:
research_tags:
  - groundwater
  - basins
  - Darcy
  - Python
  - Climate Change
compute tags:
  - python
grants_funders:
  - funder_name: National Collaborative Research Infrastructure Strategy, NCRIS
    number_id: 
    doi:
abstract: >
  Numerical models of groundwater flow play a critical role for water management scenarios under climate extremes. Large-scale models play a key role in determining long range flow pathways from continental interiors to the oceans, yet struggle to simulate the local flow patterns ofered by small-scale models. We have developed a highly scalable numerical framework to model continental groundwater flow which capture the intricate flow pathways between deep aquifers and the near-surface. The coupled thermal-hydraulic basin structure is inferred from hydraulic head measurements, recharge estimates from geochemical proxies, and borehole temperature data using a Bayesian framework. We use it to model the deep groundwater flow beneath the Sydney–Gunnedah–Bowen Basin, part of Australia’s largest aquifer system. Coastal aquifers have flow rates of up to 0.3 m/ day, and a corresponding groundwater residence time of just 2,000 years. In contrast, our model predicts slow flow rates of 0.005 m/day for inland aquifers, resulting in a groundwater residence time of ∼400,000 years. Perturbing the model to account for a drop in borehole water levels since 2000, we fnd that lengthened inland flow pathways depart signifcantly from pre-2000 streamlines as groundwater is drawn further from recharge zones in a drying climate. Our results illustrate that progressively increasing water extraction from inland aquifers may permanently alter long-range flow pathways. Our open-source modelling approach can be extended to any basin and may help inform policies on the sustainable management of groundwater.
images:
  landing_image:
    src: ./fig1.png
    caption:
  graphic_abstract:
    src: ./fig1.png
    caption:
  model_setup:
    src:
    caption:
animations:
  - src:
    caption:
dataset:
  url: 
  doi:
  notes: >
  file_tree:
model_files:
  url:
  notes:
  file_tree:
---