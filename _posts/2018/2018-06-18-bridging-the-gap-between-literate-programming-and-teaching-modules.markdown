---
layout: "post"
title: "Leveraging literate computing technology for teaching: a template web site for jupyter-based courses"
date: "2018-06-18 11:07"
author: Tania Allard
tags:
  - use-case
  - best-practice
  - open-science
  - teaching
  - jupyter
---

## Background
The [Jupyter notebook](http://jupyter.org/) is a popular tool used by thousands of individuals and organisations all over the world. The notebook popularity is associated
with the paradigm of **literate computing**; this is a variant of the paradigm of **literate programming** introduced by
**Donald E. Knuth**; under the latter the (computer) program is treated like
a piece of literature addressed to humans rather than to computers.
As a consequence, such programs focus on the logic and flow of human thought.
Similarly, a literate computing document integrates both the data analysis and textual documentation,
making the programs more robust, more portable, and easier to maintain than
programs that are solely written in high-level languages.

The notebooks, or rather the Jupyter Ecosystem have found their place within research,
education and data science, among many other areas, particularly promoting
knowledge transfer. I first started using the notebooks when I realized that they
allowed me not to only write code in a number of programming languages but also
allowed me to build a compelling narrative in which analysis, documentation, and data are
presented together transparently. Since then I have used the notebooks
for dissemination, education, prototyping, have developed ad-hoc extensions/widgets and
have helped others to use the notebooks better.

However, the emergence of novel technologies also brings a new set of challenges
to overcome during their implementation and usage. This case study presents
some of the work the members of ODK have done in order to bring literate programming to
the classroom.

## Scenario
Most universities in the UK have an institutional learning platform commonly used
by lecturers to share materials with students.
Such a platform only allows for upload and rendering of documents in .pdf, .txt,
and .docx formats (among others). As science becomes more computationally driven, there is a greater need to increase the data and computational literacy of
our students.
Several lecturers and professors at the University of Sheffield wanted to migrate
from using paid-license software, such as MATLAB, to open source software such as Python and at the same time, use the notebooks in their class.
In addition to the notebooks lecturers need a permanent site to upload the materials,
class notes, and other resources so that students can revise at any point and  
download the materials.

## Possible solutions
1. Use of the institutional learning platform and separate distribution of the notebooks.
2. Use of cloud solutions such as CoCalc to manage their course content.
3. Leverage the use of the Jupyter notebooks along with binder, Microsoft Azure notebooks and GitHub pages.

The main problem with solution 1. is the duplicate point of access for both students
and the people running the class increasing the maintenance burden.
We have used CoCalc in Sheffield for a number of classes (e.g. Biomedical sciences, scalable machine learning) with great success in the past. But in that case only those enrolled in the course can access the materials so unless the materials are in a service like GitHub or GitLab they cannot be publicly distributed.


## The implementation
Thanks to `nbformat` it is possible to convert the notebooks into other formats, such as .pdf, .tex, .py, .html, .md and even reveal.js slides. On the other hand, it is possible to now perform regression tests on the notebooks thanks to the ODK developed tool [nbval](https://github.com/computationalmodelling/nbval), and finally, GitHub supports and serves static websites generated using Jekyll.
Thus we worked on developing a readily usable Jekyll template specifically designed for university course modules and with Jupyter notebooks as the main source of content.
<br> <br>
<img src="{{site.url}}{{site.baseurl}}/assets/Jekyll.PNG" style="margin:10px 0; border:1px solid #b5b5b5;">
<br><br>
It would then be possible to convert the notebooks to `.md` or `.html` and then add the `.yaml` header needed by Jekyll to render it within the posts. In order to remove the manual burden we developed a python package [nbjekyll](https://github.com/trallard/nbjekyll) that uses nbformat to convert the notebook to a Jekyll post.
By calling nbjekyll within the filesystem containing a Jekyll blog it will find the notebooks and convert them into Jekyll ready .md files with the appropriate front-matter needed, export the images (if any) within the notebook and correctly update the paths in the .md files so that they point to the images in the site.

<img src="{{site.url}}{{site.baseurl}}/assets/Jekyll-2.PNG" style="margin: 10px 0; border: 1px solid #b5b5b5;">
<br>

In addition, when doing the conversion, `nbjekyll` uses nbval under the hood to perform a sanity check on the notebook. By doing so a badge is added to indicate if the tests on the notebook were successful of if there were any problems encountered during the testing phase.

Finally, as the whole site is intended to be used in conjunction with GitHub (or GitLab) the package leverages the use of version control to identify the last commit, the author and the date of the last commit and this information is added to the top of the yaml header so that it is rendered as shown in the image.

Finally, if the notebooks are hosted in Microsoft Azure, the author can indicate this in the `_config.yml` file and a cloud button will be added to the site so that the repository is imported as an Azure library and the notebooks can be accessed directly from the course site. This gives the advantage that the students can then clone the library for the course to  their own Azure account and can start working on the notebooks without the need to install any packages locally.


## Time and expertise required
Assuming that the researcher is familiar with the notebooks and with GitHub, installing the Python package is as simple as doing `pip install nbjekyll` and the template can be readily forked or imported from GitHub. Once this is done the publishing part should take only a few minutes. The notebooks can then be added or modified as `nbjekyll` will take care of the testing, converting and appropriate formatting of the books inside the repository.

A detailed guide on how to get started up to some advanced features of the module and the conversion package can be found at [http://bitsandchips.me/Modules-template-docs/](http://bitsandchips.me/Modules-template-docs/)

## To Do
- Support for the user to use [binder](http://mybinder.org/) shall the materials not be deposited in a Microsoft Azure library
- Jupyter Notebook extension to directly convert the notebook from the Jupyter server instead of the command line


## OpenDreamKit contribution
- Development of the Modules-template for jekyll
- Support to ongoing courses at the University of Sheffield and case study on the technology
- Creation of nbjekyll (avaiable from PyPI)
- Development of [nbval](https://github.com/computationalmodelling/nbval) which faciliates the testing of Jupyter notebooks (note this uses pytest)
