---
layout: page
title: "Progress report for Southampton-XFEL"
theme: white
transition: none
author: Hans Fangohr
period: Reporting period from April 2017 to Oct 2018
---

# {{ page.title }}

Marijan Beg and Hans Fangohr

April 2017 - October 2018
---

## Finance and administration

Completed move from the University of Southampton to the European XFEL GmbH. No problems encountered. One new person (Sergii Mamedov) hired on the project for 6 PM. He is going to work part time for 9 months.

---
## Hiring

* New OpenDreamKit position advertised.
* Shortlisting and interview stages completed.
* Top three candidates are selected.  
* Sergii Mamedov hired and started on 18 Oct 2018.

---
## Achievements

* Updated proposal and JOOMMF work plan to reflect the removal of WP7

* T2.7 Open source dissemination of micromagnetic VRE
    * Repositories for source code under github.com/joommf
    * Set up publicly accessible Jenkins/Travis CI
    * Added Docker image containing JOOMMF and all its dependencies to DockerHub
    * Another announcement made to the community via micromagnetic mailing list
    * Conda installation done for OOMMF and all JOOMMF packages
      (OSX and Linux)
    * Set up read the docs for every code repository
    * Set up code coverage for all code repositories
    * Conda packages for all three major operating systems completed.

* T2.8 Micromagnetic VRE dissemination workshops
    * Workshops
      * Five workshops completed
      * One workshop (walk-in session) scheduled in Washington DC, USA in January 2019
      * Details in the "Workshops and dissemination activities" section
      
    * Publications, conference contributions, and tutorials listed in the "Other" section.
    


* T4.14 Online portal for Micromagnetic VRE demonstrator
    * No separate machine was purchased to host it; using existing
      hardware at University of Southampton instead (courtesy of EPSRC
      Center for Doctoral Training in Next Generation Computational Modelling)
    * Online portal is based on Docker and provides the anonymous use of JOOMMF
    * Available [here](https://tryjoommf.soton.ac.uk)
    * Allows users to re-execute the tutorial and documentation notebooks
    * It will develop over time as further extensions to JOOMMF are made (T3.8 and T4.11) and more tutorial notebooks written (T4.13)
    * We also employ MyBinder for running JOOMMF in the cloud
    * We also have an intentyion to use EGI

* T4.13 Demonstrator: MVRE notebooks
    * Jupyter notebooks documenting specific features of JOOMMF
    * Tutorials used for workshops ([here](https://github.com/joommf/tutorial))

---
## Work in progress

* Further work and extensions in all work packages.

* T3.8: Further developments and extensions (OOMMF Python interface)

* T4.9 & T4.11: 3d visualisations of vector fields, and widgets

---
## Workshops and dissemination activities

Four workshops have been completed in this period:

* Institute of Physics (IOP) Magnetism conference, 04 April 2017, York, UK
    * details about the workshop [here](http://magnetism2017.iopconfs.org/OOMMF)
    * about 30 participants
    * organisers did not allow us to have the details of registered participants due to data protection
    * 19 participants provided their details directly to us: 6 females, 13 males
    * Workshop conducted jointly with Michael Donahue - developer of OOMMF
    * Workshop materials (tutorials and exercises) are available [here](https://github.com/joommf/tutorial/tree/master/workshops/2017-04-05-IOPMagnetism2017)
    * Co-funded with EPSRC CCP Computational Magnetism Network (EP/M022668/1)

* Intermag 2017 conference, 24 April 2017, Dublin, Ireland
    * One of the major conferences in the field of magnetism research
    * 50 registered participants, plus 7 additional attendees
    * Two sessions: main workshop event and the follow up session
    * The follow up session was used to go into more details about specific features of JOOMMF and to receive feedback and requests from users
    * Co-funded with EPSRC CCP Computational Magnetism Network (EP/M022668/1)

* 62nd Annual Conference on Magnetism and Magnetic Materials, 06-10 Nov 2017, Pittsburgh, PA, USA
    * One of the major conferences in the field of magnetism research
    * Workshop conducted informally with JOOMMF users and people who want to start using it
    * Received feedback from the users as well as the feature requests

* Advances in Magnetism 2017, 04-07 February 2018, La Thuile, Italy
    * Tutorial session for all conference attendees
    * Over 100 participants

* International Conference on Magnetism, 14-20 July 2018, San Francisco, USA
    * Part of the official conference programme

One workshop has been scheduled for the upcoming period:

* Joint Magnetism and Magnetic Materials - Intermag conference, 14-18 Jan 2019, Washington DC, USA
    * Walk-in session planned

One invited talk has been completed for the upcoming period:

* 9th Joint European Magnetic Symposia, 03-09 September 2018, Mainz, Germany

---
## Other

Research output acknowledging OpenDreamKit in the period from April 2017 to October 2018:

* Publications
    * D. Cortés-Ortuño et al. Proposal for a micromagnetic standard problem for materials with Dzyaloshinskii-Moriya interaction. New Joural of Physics (accepted), preprint: http://arxiv.org/abs/1803.11174 (2018).
    * R. A. Pepper et al. Skyrmion states in thin confined polygonal nanostructures. Journal of Applied Physics 123, 093903 (2018).
    * D. Cortés-Ortuño et al. Thermal stability and topological protection of skyrmions in nanotracks. Scientific Reports 7, 4060 (2017).
    * M. Beg et al. Stable and manipulable Bloch point, preprint: http://arxiv.org/abs/1808.10772 (2018).
    * M.-A. Bisotti et al. Fidimag – A Finite Difference Atomistic and Micromagnetic Simulation Package. Journal of Open Research Software 6, 22 (2018).
    * H. Fangohr et al. Data analysis support in Karabo at European XFEL. Proceedings of 16th International Conference on Accelerator and Large Experimental Physics Control Systems, Barcelona, Spain (2017).

* Invited talks
    * M. Beg. Skyrmionic states and Bloch points in confined helimagnetic nanostructures. 9th Joint European Magnetic Symposia – JEMS2018, Mainz, Germany, 3–7 September 2018.
    * M. Beg. Skyrmionic states in confined helimagnetic nanostructures. International Conference on Magnetism and Spintronics (Sol-Skymag 2017), San Sebastian, Spain, 19-23 June 2017.

* Conference contributions
    * (accepted) M. Beg et al. Field manipulation of Bloch points in helimagnetic nanostructures. 2019 Joint Magnetism & Magnetic Materials - Intermag Conference, Washington DC, USA, 14–18 January 2019.
    * (accepted) R. A. Pepper et al. Fast parallel techniques for the calculation of the dipole-dipole interaction. 2019 Joint Magnetism & Magnetic Materials - Intermag Conference, Washington DC, USA, 14–18 January 2019.
    * H. Fangohr. Driving simulation and data analysis of magnetic nanostructures through Jupyter Notebook. PyCON.DE, Karlsruhe, Germany, 24-28 October 2018.
    * M. Beg et al. Driving data analysis through the Jupyter Notebook at European XFEL. Digital Infrastructures for Research 2018 - DI4R 2018, Lisbon, Portugal, 8–11 October 2018.
    * M. Beg et al. Stable Bloch point in helimagnetic nanostructures containing boundary between grains with different chirality. International Conference on Magnetism - ICM 2018, San Francisco, CA, USA, 15–20 July 2018.
    * D. Cortés-Ortuño et al. Proposal for a micromagnetic standard problem for materials with Dzyaloshinskii-Moriya interaction. International Conference on Magnetism - ICM 2018, San Francisco, CA, USA, 15–20 July 2018.
    * D. Cortés-Ortuñoet al. Thermal stability and topological protection of skyrmions in nanotracks. International Conference on Magnetism - ICM 2018, San Francisco, CA, USA, 15–20 July 2018. 
    * M. Beg et al. Stable Bloch point in helimagnetic nanostructures containing boundary between grains with different chirality. IEEE International Magnetics Conference - Intermag 2018, Singapore, 23–27 April 2018.
    * M. Beg et al. Stable magnetic singularity in helimagnetic nanostructures containing boundary between grains with different chirality. 2nd IEEE Conference on Advances in Magnetics - AIM 2018, La Thuile, Italy, 4–7 February 2018.
    * H. Fangohr et al. Data analysis support in Karabo at European XFEL. Proceedings of 16th International Conference on Accelerator and Large Experimental Physics Control Systems, Barcelona, Spain (2017).
    * M. Beg et al. Stable magnetic singularity in helimagnetic nanostructures containing boundary between grains with different chirality. 62nd Annual Conference on Magnetism and Magnetic Materials, Pittsburgh, PA, USA, 6–10 November 2017.
    * M. Beg et al. Proposal for a micromagnetic standard problem for materials with Dzyaloshinskii-Moriya interaction. 62nd Annual Conference on Magnetism and Magnetic Materials, Pittsburgh, PA, USA. 6–10 November 2017.
    * R. A. Pepper et al. Skyrmionic state stability in polygonal helimagnetic nanostructures. International Conference on Magnetism and Spintronics (Sol-Skymag 2017), San Sebastian, Spain, 19–23 June 2017.
    * D. Cortés-Ortuño et al. Thermal stability and topological protection of skyrmions in nanotracks. International Conference on Magnetism and Spintronics (Sol-Skymag 2017), San Sebastian, Spain, 19–23 June 2017.
    * D. Cortés-Ortuño et al. Thermal stability and topological protection of skyrmions in nanotracks. IEEE International Magnetics Conference - Intermag 2017, Dublin, Ireland, 24–28 April 2017.
    * R. A. Pepper et al. Ground state skyrmion and helical states in confined FeGe nanostructures. IEEE International Magnetics Conference - Intermag 2017, Dublin, Ireland, 24–28 April 2017.
    * M. Beg et al. Isolated skyrmion dynamics in confined helimagnetic nanostructures. Institute of Physics (IOP) Magnetism 2017, University of York, York, UK, 3–4 April 2017.
    * M. Beg et al. Computational micromagnetics with JOOMMF. Institute of Physics (IOP) Magnetism 2017, University of York, York, UK, 3–4 April 2017.
    * M. Beg et al. Demagnetisation energy and magnetisation variation effects on the isolated skyrmion dynamics. Institute of Physics (IOP) Magnetism 2017, University of York, York, UK, 3–4 April 2017.

* Packages in PyPi and conda cloud:
    * M. Beg et al. discretisedfield 0.8.3, repository available at: available at: https://github.com/joommf/discretisedfield, 
    * M. Beg et al. joommfutil 0.8.3, repository available at: https://github.com/joommf/joommfutil (2018).  
    * M. Beg et al. micromagneticmodel 0.8.2, repository available at: https://github.com/joommf/micromagneticmodel (2018).
    * M. Beg et al. oommfodt 0.8.2, repository available at: https://github.com/joommf/oommfodt (2018).
    * M. Beg et al. oommfc 0.8.8, repository available at: https://github.com/joommf/oommfc (2018).
    * M. Beg et al. joommf 0.8.4, repository available at: https://github.com/joommf/joommf (2018).

* VRE deployments:

    * TryJOOMMF virtual research environment: https://tryjoommf.soton.ac.uk (2018).
