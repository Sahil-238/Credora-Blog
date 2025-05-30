import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RWDImages = () => {
  const responsiveImageExample = `
/* Basic Fluid Image */
.fluid-image {
  max-width: 100%;
  height: auto;
}

/* Picture Element Example */
<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>

/* Background Image */
.responsive-bg {
  background-image: url('small.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .responsive-bg {
    background-image: url('medium.jpg');
  }
}

@media (min-width: 1200px) {
  .responsive-bg {
    background-image: url('large.jpg');
  }
}`;

  const srcsetExample = `
<!-- Srcset with x descriptor -->
<img src="image-1x.jpg"
     srcset="image-1x.jpg 1x,
             image-2x.jpg 2x,
             image-3x.jpg 3x"
     alt="Responsive image">

<!-- Srcset with w descriptor and sizes -->
<img src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
     sizes="(max-width: 320px) 280px,
            (max-width: 640px) 580px,
            880px"
     alt="Responsive image">`;

  return (
    <div className="course-content">
      <h1>Responsive Images</h1>
      
      <section>
        <h2>What are Responsive Images?</h2>
        <p>
          Responsive images are images that work well on devices with widely differing screen sizes, resolutions, and other characteristics.
          This is achieved through various techniques that enable the browser to choose the most appropriate image source based on the current viewing context.
        </p>
      </section>

      <section>
        <h2>Basic Responsive Image Techniques</h2>
        <p>
          Here are some common techniques for making images responsive:
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {responsiveImageExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Using srcset and sizes</h2>
        <p>
          The srcset and sizes attributes provide more control over image selection:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {srcsetExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Key Concepts</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Fluid Images</h3>
          <ul>
            <li>Use max-width: 100% to ensure images don't overflow containers</li>
            <li>Set height: auto to maintain aspect ratio</li>
            <li>Works well for simple responsive designs</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>2. Art Direction</h3>
          <ul>
            <li>Use {'<picture>'} element for different image crops</li>
            <li>Adapt image content for different screen sizes</li>
            <li>Control which image version is shown based on media queries</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>3. Resolution Switching</h3>
          <ul>
            <li>Use srcset to provide multiple resolutions</li>
            <li>Let browser choose best image based on device capabilities</li>
            <li>Optimize bandwidth usage for different devices</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Always provide fallback src attribute for older browsers</li>
          <li>Use appropriate image formats (WebP with PNG/JPEG fallbacks)</li>
          <li>Optimize images for different sizes</li>
          <li>Consider lazy loading for better performance</li>
          <li>Test images across different devices and screen sizes</li>
          <li>Use descriptive alt text for accessibility</li>
        </ul>
      </section>

      <section>
        <h2>Performance Considerations</h2>
        <ul>
          <li>Compress images appropriately</li>
          <li>Choose the right format for the content type</li>
          <li>Use modern formats like WebP where supported</li>
          <li>Consider loading priority for critical images</li>
          <li>Implement lazy loading for below-the-fold images</li>
        </ul>
      </section>

      <section>
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Serving oversized images to mobile devices</li>
          <li>Not providing fallback options</li>
          <li>Ignoring image aspect ratios</li>
          <li>Using incorrect image formats</li>
          <li>Forgetting to optimize images</li>
          <li>Not considering Retina/high-DPI displays</li>
        </ul>
      </section>

      <section>
        <h2>Tools and Resources</h2>
        <ul>
          <li>Image optimization tools (ImageOptim, Squoosh)</li>
          <li>Responsive image breakpoint generators</li>
          <li>CDN services with automatic image optimization</li>
          <li>Modern image formats (WebP, AVIF)</li>
          <li>Browser dev tools for testing</li>
        </ul>
      </section>
    </div>
  );
};

export default RWDImages; 