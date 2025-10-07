---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

With an **h-index of 30**, my research spans computational biology, bioinformatics tool development, viral integration mechanisms, mitochondrial genomics, and modern AI applications to biological data. My work has been published in leading journals including *Nature Medicine*, *Cell Metabolism*, *Genome Research*, *PLoS Computational Biology*, and *Bioinformatics*.

You can find the complete list of my publications and citation metrics on <u><a href="https://scholar.google.com/citations?user=dTC-vJIAAAAJ&hl=en" target="_blank">my Google Scholar profile</a></u>.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
