---
layout: modern-sub
title: "Publications"
permalink: /publications/
---

<div class="publications-page">
    <div class="page-intro">
        <p>With an <strong>h-index of 30</strong>, my research spans computational biology, bioinformatics tool development, viral integration mechanisms, mitochondrial genomics, and modern AI applications to biological data. My work has been published in leading journals including <em>Nature Medicine</em>, <em>Cell Metabolism</em>, <em>Genome Research</em>, <em>PLoS Computational Biology</em>, and <em>Bioinformatics</em>.</p>
        
        <div class="external-links">
            <a href="https://scholar.google.com/citations?user=dTC-vJIAAAAJ&hl=en" target="_blank" class="btn btn-primary">
                <i class="fas fa-graduation-cap"></i> Google Scholar Profile
            </a>
        </div>
    </div>

    <div class="publications-content">
        <div class="publications-summary">
            <div class="summary-stats">
                <div class="stat-item">
                    <span class="stat-number">40+</span>
                    <span class="stat-label">Total Publications</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">30</span>
                    <span class="stat-label">H-Index</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">4</span>
                    <span class="stat-label">First Author</span>
                </div>
            </div>
            <p class="summary-note">(3 first author, 1 sole author, 1 book chapter, 1 book, 1 dissertation)</p>
        </div>

        <div class="publications-controls">
            <div class="search-box">
                <input type="text" id="publication-search" placeholder="Search publications...">
                <i class="fas fa-search"></i>
            </div>
            <div class="sort-controls">
                <select id="sort-by">
                    <option value="year-desc">Year (Newest First)</option>
                    <option value="year-asc">Year (Oldest First)</option>
                    <option value="title">Title</option>
                    <option value="journal">Journal</option>
                </select>
            </div>
        </div>

        <div class="publications-list" id="publications-container">
            {% assign sorted_publications = site.publications | sort: 'date' | reverse %}
            {% if sorted_publications.size > 0 %}
            {% for publication in sorted_publications %}
            <div class="publication-item-detailed" data-year="{{ publication.date | date: '%Y' }}" data-title="{{ publication.title | downcase }}" data-journal="{{ publication.venue | downcase }}">
                <div class="publication-content">
                    <h3 class="publication-title">{{ publication.title }}</h3>
                    {% if publication.citation %}
                    {% assign citation_parts = publication.citation | remove: '"' | split: ')' %}
                    {% assign authors_part = citation_parts[0] | split: '(' | first | strip %}
                    <p class="publication-authors">{{ authors_part }}</p>
                    {% endif %}
                    <p class="publication-venue"><strong>{{ publication.venue }}</strong>, {{ publication.date | date: '%Y' }}</p>
                    {% if publication.excerpt %}
                    <div class="publication-excerpt">
                        {{ publication.excerpt | markdownify }}
                    </div>
                    {% endif %}
                    {% if publication.paperurl %}
                    <div class="publication-links">
                        {% assign link_text = "Paper" %}
                        {% if publication.title contains "Tests of Robustness in Peer Review" %}
                            {% assign link_text = "Dissertation" %}
                        {% elsif publication.title contains "Data Mashups in R" %}
                            {% assign link_text = "Book" %}
                        {% elsif publication.title contains "Computational Pipelines and Workflows in Bioinformatics" %}
                            {% assign link_text = "Chapter" %}
                        {% endif %}
                        <a href="{{ publication.paperurl }}" target="_blank" class="btn btn-primary btn-sm">
                            <i class="fas fa-external-link-alt"></i> {{ link_text }}
                        </a>
                    </div>
                    {% endif %}
                </div>
            </div>
            {% endfor %}
            {% else %}
            <div class="no-content">
                <i class="fas fa-book fa-3x"></i>
                <h3>No publications available</h3>
                <p>Publications information will be updated soon.</p>
            </div>
            {% endif %}
        </div>
        
        <div class="publications-footnote">
            <p><small>* ISI Highly Cited</small></p>
            <p><small>† Best Research Paper: 14th International Conference on Metadata and Semantics Research</small></p>
        </div>
    </div>

    <div class="page-footer">
        <div class="back-to-home">
            <a href="/" class="btn btn-secondary">
                <i class="fas fa-home"></i> Back to Home
            </a>
        </div>
    </div>
</div>
