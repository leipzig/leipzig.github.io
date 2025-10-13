---
layout: modern-sub
title: "Curriculum Vitae"
permalink: /cv/
redirect_from:
  - /resume
---

<div class="cv-page">
    <div class="page-intro">
        <p>Complete curriculum vitae including education, professional experience, publications, presentations, and achievements in bioinformatics and computational biology.</p>
        <div class="cv-download">
            <a href="/files/leipzig_cv.pdf" target="_blank" class="btn btn-primary">
                <i class="fas fa-download"></i> Download PDF CV
            </a>
        </div>
    </div>

    <div class="cv-content">
        <section class="cv-section">
            <h2><i class="fas fa-graduation-cap"></i> Education</h2>
            <div class="cv-items">
                <div class="cv-item">
                    <div class="cv-date">2021</div>
                    <div class="cv-details">
                        <h3>PhD in Information Science</h3>
                        <p class="cv-institution"><strong>Drexel University</strong></p>
                        <p class="cv-description">Specialized in computational biology, reproducible research, and bioinformatics methodology</p>
                    </div>
                </div>
                <div class="cv-item">
                    <div class="cv-date">2003</div>
                    <div class="cv-details">
                        <h3>Master of Computer Science</h3>
                        <p class="cv-institution"><strong>North Carolina State University</strong></p>
                        <p class="cv-description">Focus on algorithms, data structures, and software engineering</p>
                    </div>
                </div>
                <div class="cv-item">
                    <div class="cv-date">1997</div>
                    <div class="cv-details">
                        <h3>Bachelor of Science in Biology</h3>
                        <p class="cv-institution"><strong>Wake Forest University</strong></p>
                        <p class="cv-description">Pre-medical track with research experience in neuropharmacology</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2><i class="fas fa-briefcase"></i> Professional Experience</h2>
            <div class="cv-items">
                <div class="cv-item">
                    <div class="cv-date">08/2022 - Present</div>
                    <div class="cv-details">
                        <h3>Product Manager</h3>
                        <p class="cv-institution"><strong>TileDB</strong></p>
                        <p class="cv-description">Manage the population genomics product line, including product development, sales demos, customer support, and marketing.</p>
                    </div>
                </div>
                <div class="cv-item">
                    <div class="cv-date">09/2020 - 07/2022</div>
                    <div class="cv-details">
                        <h3>Content Lead</h3>
                        <p class="cv-institution"><strong>Truwl</strong></p>
                        <p class="cv-description">Led onboarding of tools, workflows, and high-impact analyses into the Truwl platform.</p>
                    </div>
                </div>
                <div class="cv-item">
                    <div class="cv-date">09/2017 - 11/2019</div>
                    <div class="cv-details">
                        <h3>Bioinformatics Engineer</h3>
                        <p class="cv-institution"><strong>Panorama Medicine</strong></p>
                        <p class="cv-description">Developed cloud-based pipelines and analysis for drug repositioning efforts. First employee.</p>
                    </div>
                </div>
                <div class="cv-item">
                    <div class="cv-date">11/2010 - 06/2017</div>
                    <div class="cv-details">
                        <h3>Senior Data Integration Analyst & GRIN Informatics Lead</h3>
                        <p class="cv-institution"><strong>Children's Hospital of Philadelphia (CHOP)</strong></p>
                        <p class="cv-description">Led bioinformatics core operations and developed tools for genomic variant analysis.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2><i class="fas fa-book"></i> Selected Publications</h2>
            <div class="cv-publications">
                <p class="cv-summary"><strong>40+ peer-reviewed publications</strong> with an h-index of 30</p>
                {% assign sorted_publications = site.publications | sort: 'date' | reverse | slice: 0, 5 %}
                {% for publication in sorted_publications %}
                <div class="cv-publication-item">
                    <h4>{{ publication.title }}</h4>
                    <p><em>{{ publication.venue }}</em>, {{ publication.date | date: '%Y' }}</p>
                </div>
                {% endfor %}
                <div class="cv-more">
                    <a href="/publications/" class="btn btn-secondary btn-sm">
                        <i class="fas fa-list"></i> View All Publications
                    </a>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2><i class="fas fa-microphone"></i> Conference Presentations</h2>
            <div class="cv-talks">
                {% assign sorted_talks = site.talks | sort: 'date' | reverse | slice: 0, 3 %}
                {% for talk in sorted_talks %}
                <div class="cv-talk-item">
                    <h4>{{ talk.title }}</h4>
                    <p><em>{{ talk.venue }}</em>, {{ talk.date | date: '%Y' }}</p>
                </div>
                {% endfor %}
                <div class="cv-more">
                    <a href="/talks/" class="btn btn-secondary btn-sm">
                        <i class="fas fa-list"></i> View All Talks
                    </a>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2><i class="fas fa-chalkboard-teacher"></i> Teaching Experience</h2>
            <div class="cv-teaching">
                {% for course in site.teaching reversed %}
                <div class="cv-teaching-item">
                    <h4>{{ course.title }}</h4>
                    <p><strong>{{ course.venue }}</strong>, {{ course.date | date: '%Y' }}</p>
                </div>
                {% endfor %}
            </div>
        </section>

        <section class="cv-section">
            <h2><i class="fas fa-award"></i> Key Achievements</h2>
            <ul class="cv-achievements">
                <li>Led four diagnostic, therapeutic and SaaS startups in defining their bioinformatic product strategy</li>
                <li>Founded PhillyR user group and top-20 contributor to biostars.org bioinformatics Q&A community</li>
                <li>Author of O'Reilly book 'Data Mashups in R' and multiple bioinformatics software tools</li>
                <li>Expert in developing cloud-based pipelines for genomics, transcriptomics, and clinical applications</li>
                <li>Proven track record in scaling bioinformatics workflows from research prototypes to production systems</li>
            </ul>
        </section>
    </div>

    <div class="page-footer">
        <div class="back-to-home">
            <a href="/" class="btn btn-secondary">
                <i class="fas fa-home"></i> Back to Home
            </a>
        </div>
    </div>
</div>
