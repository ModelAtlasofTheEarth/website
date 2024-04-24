---
templateKey: model
slug: sandiford_2021_detachment-1
title: 'Kinematics of Footwall Exhumation at Oceanic Detachment faults: Solid‐Block
  Rotation and Apparent Unbending'
date: '2024-03-22T01:05:23.000Z'
featuredpost:
for_codes:
  - 370401
status:
doi: ''
metadataFile: ./ro-crate-metadata.json
software:
  - name: 'geodynamics/aspect: ASPECT 2.5.0'
    doi: https://doi.org/10.5281/zenodo.8200213
    url_source: ''
licence:
  name: CC BY 4.0
  licence_url: https://creativecommons.org/licenses/by/4.0/legalcode
  licence_image: ../../../img/licence/by.png
  description: Creative Commons Attribution 4.0 International
  licence_file: ./licence.txt
submitter:
  name: Dan
  family_name: Sandiford
  ORCID: https://orcid.org/0000-0002-2207-6837
associated_publication:
  authors:
    - '@type': Person
      '@id': http://orcid.org/0000-0002-2207-6837
      givenName: Dan
      familyName: Sandiford
      affiliation:
        - '@type': Organization
          name: Institute for Marine and Antarctic Studies University of Tasmania  Hobart
            TAS Australia
        - '@type': Organization
          name: Helmholtz Centre Potsdam—German Research Centre for Geosciences (GFZ)  Potsdam
            Germany
    - '@type': Person
      '@id': http://orcid.org/0000-0003-4985-1810
      givenName: Sascha
      familyName: Brune
      affiliation:
        - '@type': Organization
          name: Helmholtz Centre Potsdam—German Research Centre for Geosciences (GFZ)  Potsdam
            Germany
        - '@type': Organization
          name: Institute of Geosciences University of Potsdam  Potsdam Germany
    - '@type': Person
      '@id': http://orcid.org/0000-0002-9481-1749
      givenName: Anne
      familyName: Glerum
      affiliation:
        - '@type': Organization
          name: Helmholtz Centre Potsdam—German Research Centre for Geosciences (GFZ)  Potsdam
            Germany
    - '@type': Person
      '@id': http://orcid.org/0000-0002-5697-7203
      givenName: John
      familyName: Naliboff
      affiliation:
        - '@type': Organization
          name: Department of Earth and Environmental Science New Mexico Institute
            of Mining and Technology  Socorro NM USA
    - '@type': Person
      '@id': http://orcid.org/0000-0002-3170-3935
      givenName: Joanne M.
      familyName: Whittaker
      affiliation:
        - '@type': Organization
          name: Institute for Marine and Antarctic Studies University of Tasmania  Hobart
            TAS Australia
  title: 'Kinematics of Footwall Exhumation at Oceanic Detachment faults: Solid‐Block
    Rotation and Apparent Unbending'
  doi: http://dx.doi.org/10.1029/2021gc009681
  url: ''
  journal: Geochemistry, Geophysics, Geosystems
  publisher: American Geophysical Union (AGU)
  date: 2021-4
compute_info:
  name: Gadi Supercomputer
  organisation: National Computational Infrastructure
  url: https://pid.nci.org.au/doi/f5966_0057_9267_4579
  doi: https://doi.org/10.25914/608bfd1838db2
research_tags:
  - tectonics
  - faulting
  - detachment faults
compute_tags:
  - C++
  - finite-element
  - mesh-refinement
funder:
  - name: Australian Research Council
    doi: https://ror.org/05mmh0f86
  - name: ''
    doi: https://www.helmholtz.de/
funding:
  - name: Australian Research Council
    doi: https://ror.org/05mmh0f86
    number_id: DP180102280
  - name: ''
    doi: https://www.helmholtz.de/
    number_id: VH-NG-1132
abstract: Seafloor spreading at slow rates can be accommodated on large‐offset oceanic
  detachment faults (ODFs), that exhume lower crustal and mantle rocks in footwall
  domes termed oceanic core complexes (OCCs). Footwall rocks experience large rotation
  during exhumation, yet important aspects of the kinematics—particularly the relative
  roles of solid‐block rotation and flexure—are not clearly understood. Using a high‐resolution
  numerical model, we explore the exhumation kinematics in the footwall beneath an
  emergent ODF/OCC. A key feature of the models is that footwall motion is dominated
  by solid‐block rotation, accommodated by the nonplanar, concave‐down fault interface.
  A consequence is that curvature measured along the ODF is representative of a neutral
  stress configuration, rather than a “bent” one. Instead, it is in the subsequent
  process of “apparent unbending” that significant flexural stresses are developed
  in the model footwall. The brittle strain associated with apparent unbending is
  produced dominantly in extension, beneath the OCC, consistent with earthquake clustering
  observed in the Trans‐Atlantic Geotraverse at the Mid‐Atlantic Ridge.
images:
  landing_image:
    src: ./graphics/fig1.png
    caption: Deviatoric stresses and vorticity in reference model.
  graphic_abstract:
    src: ./graphics/fig4.png
    caption: fig4.png
  model_setup:
    src: ./graphics/initialconds.png
    caption: Initial conditions, showing mesh refinement.
animation:
  src: ./graphics/animation.mp4
  caption: Animation for alternative model showing vorticity.
model_setup_info:
  url: ''
  summary: The domain is $400 \; \mathrm{km}$ wide and $100 \; \mathrm{km}$ deep,
    and includes five levels of mesh refinement, as shown in the figure. The model
    is initialised with a symmetric temperature structure, defined by a transient
    1-D cooling profile, with an age of $0.5 \; \mathrm{Myr}$ in the center of the
    domain. The thermal profile ages outwardly in proportion to the applied spreading
    rate of $2 \; \mathrm{cm\,{yr}^{-1}}$ (full rate), which is representative for
    slow spreading ridges. Uniform inflow at the bottom boundary balances the outward
    flux of material at the side boundaries. The model has a true free surface, and
    a diffusion process is applied to the surface topography in order to counteract
    strong mesh deformation. A simplification here is that the effect of the water
    column is ignored, i.e. the detachment system is modeled as sub-aerial. There
    is no compositional differentiation in the model (i.e. no crust/mantle) and all
    parts of the domain are subject to the same constitutive model. The constitutive
    model incorporates viscous (dislocation creep), elastic and plastic (pseudo-brittle)
    deformation mechanisms, hereafter referred to as visco-elastic plastic (VEP) rheology,
    following the approach of Moresi et al. (2003). The advection-diffusion equation
    included an anomalously- high diffusivity $(3 \times {10}^{-6} \; \mathrm{m^2
    \, s^{-1}})$ which is intended to model the near axis cooling effect of hydrothermal
    circulation (cf. Lavier and Buck, 2002). As implemented here, the higher diffusivity
    applies throughout the domain, rather than being localized at the ridge (as in
    Lavier and Buck, 2002). The parameters chosen here result in $\sim 10 \; \mathrm{km}$
    lithosphere at the ridge axis, which is in the range identified for ODF development.
    Due to the difference in diffusivity values in the initial conditions $({10}^{-6}
    \; \mathrm{m^2 \, s^{-1}})$, and temperature evolution equation $(3 \times {10}^{-6})$,
    the thermal structure is not in steady state and some cooling of the off-axis
    lithosphere occurs.
model_files:
  url: ''
  notes: ''
  file_tree: ''
dataset:
  url: ''
  notes: ''
  doi: ''
creators:
  - name: Dan
    family_name: Sandiford
    ORCID: 0000-0002-2207-6837
  - name: Sascha
    family_name: Brune
    ORCID: 0000-0003-4985-1810
  - name: Anne
    family_name: Glerum
    ORCID: 0000-0002-9481-1749
  - name: John
    family_name: Naliboff
    ORCID: 0000-0002-5697-7203
  - name: Joanne M.
    family_name: Whittaker
    ORCID: 0000-0002-3170-3935
---
