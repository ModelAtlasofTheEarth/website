---
templateKey: model
slug: finch-2024-cprime
title: 'The ephemeral development of C′ shear bands: A numerical modelling approach'
date: '2024-10-29T02:36:04.000Z'
featuredpost:
for_codes:
  - 370401
status:
  - completed
doi: https://doi.org/10.25914/whbg-hd74
url: https://mate.science//models/finch-2024-cprime
creditText: 'Finch, M., Bons, P.D.., Steinbach, F., Griera Artigas, A., Llorens, M.,
  Gomez-Rivas, E.., Ran, H.., & de Riese, T.. (2024). The ephemeral development of
  C′ shear bands: A numerical modelling approach [Data set]. AuScope, National Computational
  Infrastructure. https://doi.org/whbg-hd74'
software:
  name: Elle Numerical Simulation Platform
  doi: https://elle.ws/
  url_source: https://sourceforge.net/p/elle/git/ci/master/tree/
licence:
  licence_url: https://creativecommons.org/licenses/by/4.0/legalcode
  licence_image: ../../../img/licence/by.png
  description: Creative Commons Attribution 4.0 International
  licence_file: license.txt
submitter:
  name: Melanie
  family_name: Finch
  ORCID: https://orcid.org/0000-0001-9699-2769
creators:
  - name: Melanie
    family_name: Finch
    ORCID: 0000-0001-9699-2769
  - name: Paul D.
    family_name: Bons
    ORCID: 0000-0002-6469-3526
  - name: Florian
    family_name: Steinbach
    ORCID: Invalid ORCiD ID
  - name: Albert
    family_name: Griera Artigas
    ORCID: 0000-0003-4598-8385
  - name: Maria-Gema
    family_name: Llorens
    ORCID: 0000-0002-6148-2600
  - name: Enrique
    family_name: Gomez-Rivas
    ORCID: 0000-0002-1317-6289
  - name: Hao
    family_name: Ran
    ORCID: 0000-0002-8639-3890
  - name: Tamara
    family_name: de Riese
    ORCID: 0000-0001-5828-8711
associated_publication:
  title: 'The ephemeral development of C′ shear bands: A numerical modelling approach'
  url: http://dx.doi.org/10.1016/j.jsg.2020.104091
  doi: 10.1016/j.jsg.2020.104091
compute_info:
  name: ''
  organisation: ''
  url: ''
  doi: ''
research_tags: []
compute_tags:
  - VPFFT
  - Elle
funder:
  - name: Alexander von Humboldt Foundation
    doi: https://ror.org/012kf4317
  - name: Ministerio de Ciencia, Innovación y Universidades
    doi: https://ror.org/05r0vyz12
funding:
  - name: Ministerio de Ciencia, Innovación y Universidades
    doi: https://ror.org/05r0vyz12
    number_id: RYC2018-026335-I
abstract: ''
description: "This model simulates the development of C' shear bands in ductile shear
  zones. The model begins with an equigranular texture of three phases: a strong phase
  (e.g., feldspar) an intermediate-strength phase (e.g., quartz) and an anisotropic
  weak phase (e.g., mica). Dextral shearing stretches and rotates the microstructure,
  forming S-C fabric, asymmetric folds and C' shear bands."
images:
  landing_image:
    src: ./graphics/Fig  3.png
    caption: 'Stages of microstructural development in a model with 15% weak phase
      (black) and a medium phase strength contrast. (a) Starting microstructure, (b)
      stage 1: grain elongation and rotation. Note the distribution of maximum strain
      rate (red arrows) localised to tips of WP grains that are parallel to the C
      plane, (c) stage 2: S-C fabric development. Stress is highest in the IP+SP adjacent
      to high strain rate layers of interconnected WP (red and orange arrows). (d)
      stage 3: shear band development and strain partitioning. Maximum stress in the
      model is in the gap in the shear band (red arrow). Green arrows highlight areas
      that have been asymmetrically folded (c.f. Fig. 1a). The first column shows
      the grain microstructure, the second column shows the normalised von Mises strain
      rate and the third column shows the von Mises stress. Images in the same row
      correspond to the same model and step.'
  graphic_abstract:
    src: ./graphics/Fig  5.png
    caption: The formation of C' shear bands by the rotation of a C plane forwards
      due to high strain rate in the shear band and high stress at the tip of the
      shear band. (a) Discontinuous shear band with section parallel to the SZB at
      high strain rate (red arrow) and high stress in the IP+SP region at the end
      of the shear band (orange arrow). (b) A low strain rate section in the shear
      band is bracketed on either side by high strain rate sections (red arrows) and
      begins to rotate forwards. (c) C' shear band forms in low strain rate section
      (red dashed line). (d) Strain rate reduces in the shear band and the C' shear
      band has rotated back into parallelism with the SZB and C planes. The first
      column shows the grain microstructure, the second column shows the normalised
      von Mises strain rate and the third column shows the von Mises stress. Model
      shown contains 15% weak phase and a high phase strength contrast. Images in
      the same row correspond to the same model and step.
  model_setup:
    src: ./graphics/Fig 2.png
    caption: 'Basic process of microstructure simulation. (a) The starting microstructure
      consists of three grain types that undergo one increment of γ = 0.02 dextral
      shear. (b) The microstructure is deformed with wrapping boundaries. (c) The
      microstructure is repositioned back to a square before the next increment of
      strain. (d) Zoom in of (a) showing the three flynn (grain) types: strong phase
      (SP), intermediate-strength phase (IP), and weak phase (WP). (e) Zoom-in of
      (d) showing that flynn grain boundaries are defined by double (blue) and triple
      (red) bnodes joined by straight lines. An additional grid of unconnected nodes
      (unodes, black) is overlain on flynns and stores state variables and flynn properties.'
animation:
  src: ./graphics/
  caption: ''
model_setup_info:
  url: ''
  summary: "A three-phase microstructure was used with 15% weak phase (WP), 42.5%
    intermediate-strength phase (IP) and 42.5% strong phase (SP). The starting model
    was square and defined by 2,748 equant grains with a random distribution of the
    three phases. Velocity boundary conditions with constant strain rate were applied
    with top-to-the-right (dextral) simple shear in increments of Δγ = 0.02, up to
    a finite shear strain of γ=18 in 900 steps. After each deformation step, the model
    was repositioned to the initial square unit cell and grain properties mapped back
    on to the grid before the next deformation step. A power-law viscous rheology\
    \  was employed with n = 3.\r\nEach phase was associated with a mineral model
    that specified the slip systems and their effective strength or resistance to
    shear. The mineral models employed attempted to broadly approximate the most important
    features of mica (WP), quartz (IP), and feldspar (SP) in order to more closely
    correspond to previous experimental work. To model the WP we used a mineral model
    with hexagonal symmetry and three slip systems (basal, prismatic, and pyramidal)
    because, although mica is monoclinic, it is pseudohexagonal and its most important
    mechanical feature is an easy glide plane since shear in mica is easier parallel
    to the basal plane than in any other direction. Accordingly we set  the basal
    plane of the WP to one tenth of the non-basal WP planes, producing a mechanically
    anisotropic WP. Feldspar is also pseudohexagonal, so we employed a hexagonal mineral
    model for the SP, but with all slip systems at the same effective strength. For
    the IP we used the crystal model of quartz with four slip systems (basal, prismatic,
    pyramidal <a> and pyramidal <c+a>) and gave the effective strength of all four
    slip systems the same value, making the IP effectively mechanically isotropic.
    The IP was 25x stronger than the WP basal plane and the SP was 2x stronger than
    the IP."
model_files:
  url: ''
  notes: The starting microstructure for the model is an .Elle file that can be viewed
    and edited in notepad or similar. The microstructure can be viewed with the showelle
    program. To run the simulation the program Elle can be downloaded from elle.ws.
  file_tree: ''
  existing_identifier: ''
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/finch-2024-cprime/catalog.html
  include: true
dataset:
  url: ''
  notes: Output data consists of 900 files that are 21 Mb each and an avi movie that
    is 80 Mb
  existing_identifier: ''
  nci_file_path: 
    https://thredds.nci.org.au/thredds/catalog/nm08/MATE/finch-2024-cprime/catalog.html
  include: true
metadataFile: ro-crate-metadata.json
---
