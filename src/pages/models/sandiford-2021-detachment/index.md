---
templateKey: model
slug: sandiford-2021-detachment
title: "Kinematics of footwall exhumation at oceanic detachment faults: solid‐block rotation and apparent unbending"
date: 2023-08-28T17:04:10.000Z
featuredpost: false
for_codes:
  - 3706
  - 370604
status: completed
software:
  - name: ASPECT
    doi: 10.5281/zenodo.6903424
    url_source: https://github.com/geodynamics/aspect
licence:
  name: cc-by-4.0
  licence_url: https://creativecommons.org/licenses/by/4.0/
  licence_image: https://creativecommons.org/wp-content/themes/vocabulary-theme/vocabulary/svg/cc/icons/cc-icons.svg#cc-logo
  description:
contributor:
  name: Dan
  family_name: Sandiford
  ORCID: 0000-0002-2207-6837
  affiliation: University of Sydney
authors:
  - name: Dan
    family_name: Sandiford
    ORCID: 0000-0002-2207-6837
    affiliation: University of Sydney
  - name: Sascha
    family_name: Brune
    ORCID: 0000-0003-4985-1810
    affiliation: Helmholtz Centre Potsdam—German Research Centre for Geosciences (GFZ)  Potsdam Germany
  - name: Anne
    family_name: Glerum
    ORCID: 0000-0002-9481-1749
    affiliation: Helmholtz Centre Potsdam—German Research Centre for Geosciences (GFZ)  Potsdam Germany
  - name: John
    family_name: Naliboff
    ORCID: 0000-0002-5697-7203
    affiliation: Department of Earth and Environmental Science New Mexico Institute of Mining and Technology  Socorro NM USA
  - name: Joanne M.
    family_name: Whittaker
    ORCID: 0000-0002-3170-3935
    affiliation: Institute for Marine and Antarctic Studies University of Tasmania  Hobart TAS Australia
associated_publication:
  DOI: 10.1029/2021gc009681
  URL: http://dx.doi.org/10.1029/2021gc009681
  author:
    - family: Sandiford
      given: Dan
      sequence: first
    - family: Brune
      given: Sascha
      sequence: additional
    - family: Glerum
      given: Anne
      sequence: additional
    - family: Naliboff
      given: John
      sequence: additional
    - family: Whittaker
      given: Joanne M.
      sequence: additional
  container_title:
    - Geochemistry, Geophysics, Geosystems
  issue: '4'
  issued:
    date_parts:
      - - 2021
        - 4
  title:
    - 'Kinematics of Footwall Exhumation at Oceanic Detachment faults: Solid‐Block Rotation
      and Apparent Unbending'
  type: journal-article
  volume: '22'
compute_info:
  computer_name: LISE
  organisation: Nationales Hochleistungsrechnen – NHR
  doi:
  url: https://nhr.zib.de
research_tags:
  - tectonics
  - extension
  - mid-ocean ridge
compute_tags:
  - C++
grants_funders:
  - funder_name: Australian Research Council
    number_id: DP180102280
    doi:
abstract: >
  Seafloor spreading at slow rates can be accommodated on large-offset oceanic detachment faults (ODFs), that exhume lower crustal and mantle rocks in footwall domes termed oceanic core complexes (OCCs). Footwall rocks experience large rotation during exhumation, yet important aspects of the kinematics—particularly the relative roles of solid-block rotation and flexure—are not clearly understood. Using a high-resolution numerical model, we explore the exhumation kinematics in the footwall beneath an emergent ODF/OCC. A key feature of the models is that footwall motion is dominated by solid-block rotation, accommodated by the nonplanar, concave-down fault interface. A consequence is that curvature measured along the ODF is representative of a neutral stress configuration, rather than a “bent” one. Instead, it is in the subsequent process of “apparent unbending” that significant flexural stresses are developed in the model footwall. The brittle strain associated with apparent unbending is produced dominantly in extension, beneath the OCC, consistent with earthquake clustering observed in the Trans-Atlantic Geotraverse at the Mid-Atlantic Ridge.
images:
  landing_image:
    src: ./graphics/fig1.png
    caption:
  graphic_abstract:
    src: ./graphics/fig1.png
    caption:
  model_setup:
    src: ./graphics/initialconds.png
    caption: "Test text here"
animations:
  - src: ./graphics/alternative_model.mp4
    caption:
model_setup_info:
  url: https://github.com/dansand/odf_paper
  summary: >
    The model is initialised with a thin lithosphere, defined by a transient cooling profile with a thermal age of 0.5 Myr in the center of the domain. The domain is 400 km wide and 100 km deep. The thermal profile ages outwardly in proportion to the applied spreading rate of 2 cm/yr (full rate), which is representative for slow ocean ridges in general. Uniform inflow at the bottom boundary balances the outward flux of material at the side boundaries. The model has a true free surface (Rose et al., 2017), and a diffusion process is applied to the surface topography in order to counteract strong mesh deformation. A simplification here is that the effect of the water column is ignored, i.e the detachment is modeled as sub-aerial. There is no compositional differentiation in the model (i.e. no crust/mantle). All parts of the domain are subject to the same constitutive model. The constitutive model incorporates viscous (dislocation creep), elastic and plastic (pseudo-brittle) deformation mechanisms, hereafter referred to as visco-elastic plastic (VEP) rheology, following the approach of Moresi et al. (2003). The advection-diffusion equation included an anomalously- high diffusivity (3e-6 m2s-1) intended as a paramaterization of the near axis cooling effect of hydrothermal circulation (cf. Lavier and Buck, 2002). As implemented here, the higher diffusivity applies thoughout the domain, rather than being localized at the ridge. The parameters chosen here result in ~10 km lithopshere at the ridge axis, which is in the range identified for ODF development. Due to the difference in diffusivity values in the initial conditions (1e-6), and temperature evolution equation (3e-6), the thermal structure is not in steady state; cooling of the off-axis lithosphere will occur.
model_files:
  url: https://github.com/dansand/odf_paper
  notes:
  file_tree:
dataset:
  url:
  doi:
  notes:
  file_tree:

---
