# Modern Template Integration

This document describes the integration of the modern single-page template from PichaiRaman.github.io into your Jekyll site.

## What Was Done

### 1. Template Assets Copied
- **CSS**: `assets/css/template-styles.css` - Modern styles with Inter font, clean layout, animations
- **JavaScript**: `assets/js/template-script.js` - Interactive features, smooth scrolling, search functionality
- **Images**: `images/profile-template.jpg` - Placeholder profile image from template

### 2. New Layout Created
- **Layout File**: `_layouts/modern.html` - Complete single-page layout inspired by the template
- **Features**:
  - Fixed navigation bar with smooth scrolling
  - Hero section with rotating profile images
  - Dynamic sections for experience, education, publications, research interests
  - Responsive design with mobile-friendly navigation
  - Loading screen with scientific icons
  - Social links integration
  - Publication search and sorting functionality

### 3. Modern Index Page
- **File**: `index-modern.md` - New homepage using the modern layout
- **Content**: Structured with Jekyll front matter to populate all sections
- **Sections**:
  - Career highlights
  - Professional experience with timeline
  - Education background
  - Research interests in grid layout
  - Contact information

## How to Use

### Viewing the Modern Layout
1. Start Jekyll server: `bundle exec jekyll serve`
2. Visit: `http://localhost:4000/index-modern.html`
3. Compare with original site at: `http://localhost:4000/`

### Customizing Content

Edit `index-modern.md` to update:

```yaml
---
layout: modern
title: "Your Name - Your Title"
resume_url: "/path/to/resume.pdf"
highlights:
  - "Your career highlight 1"
  - "Your career highlight 2"
experience:
  - company: "Company Name"
    title: "Your Title"
    dates: "2020 - Present"
    description: "Brief description"
    achievements:
      - "Achievement 1"
      - "Achievement 2"
education:
  - institution: "University Name"
    degree: "Your Degree"
    dates: "2015 - 2020"
    details: "Additional details"
research_interests:
  - title: "Research Area"
    description: "Description of your research"
full_bio: |
  Extended biography text that appears when
  users click "read more".
---

Your main bio content here (appears by default).
```

### Updating Profile Images
1. Replace `images/profile.png` with your main profile image
2. Replace `images/profile-template.jpg` with your secondary/hover image
3. Update `_config.yml` to set your avatar: `avatar: "your-image.jpg"`

### Customizing Styles
Edit `assets/css/template-styles.css` to modify:
- Color scheme (CSS variables at the top)
- Fonts and typography
- Layout spacing and dimensions
- Animation effects

### Making It Your Default
To make the modern layout your main homepage:
1. Backup current `index.html`: `mv index.html index-original.html`
2. Rename modern page: `mv index-modern.md index.md`
3. Update any hardcoded links in your site

## Features

### Interactive Elements
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Profile Image Hover**: Image rotates and swaps on hover
- **Publication Search**: Real-time filtering of publications list
- **Publication Sorting**: Sort by year, title, or journal
- **Responsive Design**: Adapts to mobile and tablet screens
- **Loading Animation**: Scientific icons animation on page load

### Jekyll Integration
- **Collections Support**: Automatically pulls from `_publications` collection
- **Configuration Integration**: Uses your `_config.yml` settings
- **Social Links**: Automatically generates links from author info
- **SEO Friendly**: Proper meta tags and structured data

### Modern Design Features
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Variables**: Easy theme customization
- **Font Awesome Icons**: Professional iconography
- **Inter Font**: Clean, modern typography
- **Card-based Layout**: Clean content organization
- **Subtle Animations**: Hover effects and transitions

## File Structure

```
├── _layouts/
│   └── modern.html           # New modern layout
├── assets/
│   ├── css/
│   │   └── template-styles.css  # Modern CSS styles
│   └── js/
│       └── template-script.js   # Interactive JavaScript
├── images/
│   └── profile-template.jpg     # Template profile image
├── index-modern.md             # New modern homepage
└── TEMPLATE_INTEGRATION.md     # This documentation
```

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Responsive design works well

## Performance
- **CSS**: Optimized with CSS variables and minimal specificity
- **JavaScript**: Vanilla JS, no dependencies beyond Font Awesome
- **Images**: Optimized loading with CSS transitions
- **Fonts**: Google Fonts with display=swap for better loading

## Backup
Your original site has been backed up to: `../leipzig.github.io-backup/`

## Next Steps
1. Test the modern layout thoroughly
2. Update content with your personal information
3. Replace placeholder images with your photos
4. Customize colors and styling to match your preferences
5. Consider making it your default layout
6. Add any additional sections or features you need

The modern template provides a solid foundation for a professional, interactive personal website while maintaining Jekyll's flexibility and your existing content structure.