import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RWDVideos = () => {
  const responsiveVideoExample = `
/* Basic Responsive Video Container */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Fluid Video Using object-fit */
.fluid-video {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* Video Background */
.video-background {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
}`;

  const htmlExample = `
<!-- Responsive iframe video (YouTube) -->
<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/video-id" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>

<!-- HTML5 Video with multiple sources -->
<video controls width="100%">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Picture element with video poster -->
<video 
  poster="poster.jpg"
  controls
  width="100%">
  <source 
    media="(min-width: 1200px)" 
    src="high-res.mp4" 
    type="video/mp4">
  <source 
    media="(min-width: 768px)" 
    src="medium-res.mp4" 
    type="video/mp4">
  <source 
    src="low-res.mp4" 
    type="video/mp4">
</video>`;

  return (
    <div className="course-content">
      <h1>Responsive Videos</h1>
      
      <section>
        <h2>What are Responsive Videos?</h2>
        <p>
          Responsive videos are videos that adapt to different screen sizes while maintaining their aspect ratio and quality.
          This ensures a consistent viewing experience across all devices without breaking the layout or requiring horizontal scrolling.
        </p>
      </section>

      <section>
        <h2>CSS Techniques</h2>
        <p>
          Here are common CSS techniques for making videos responsive:
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {responsiveVideoExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>HTML Implementation</h2>
        <p>
          Examples of responsive video implementation in HTML:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {htmlExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Key Concepts</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Aspect Ratio</h3>
          <ul>
            <li>Maintain proper aspect ratio using padding-bottom technique</li>
            <li>Common ratios: 16:9 (56.25%), 4:3 (75%), 21:9 (42.85%)</li>
            <li>Use aspect-ratio CSS property for modern browsers</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>2. Video Quality</h3>
          <ul>
            <li>Provide multiple video sources for different screen sizes</li>
            <li>Use appropriate compression for different bandwidths</li>
            <li>Consider autoplay and preload settings</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>3. Embedding</h3>
          <ul>
            <li>Handle iframe embeds from YouTube, Vimeo, etc.</li>
            <li>Use wrapper containers for third-party embeds</li>
            <li>Consider lazy loading for better performance</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Always maintain aspect ratio</li>
          <li>Provide fallback content for unsupported browsers</li>
          <li>Use appropriate video formats (WebM with MP4 fallback)</li>
          <li>Consider bandwidth and mobile data usage</li>
          <li>Implement proper loading strategies</li>
          <li>Add appropriate controls and accessibility features</li>
        </ul>
      </section>

      <section>
        <h2>Performance Optimization</h2>
        <ul>
          <li>Compress videos appropriately</li>
          <li>Use adaptive bitrate streaming when possible</li>
          <li>Implement lazy loading for below-the-fold videos</li>
          <li>Consider using video CDNs</li>
          <li>Optimize video poster images</li>
        </ul>
      </section>

      <section>
        <h2>Common Issues and Solutions</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Layout Shift</h3>
          <ul>
            <li>Use aspect ratio containers</li>
            <li>Set explicit dimensions</li>
            <li>Use CSS aspect-ratio property</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Mobile Considerations</h3>
          <ul>
            <li>Consider autoplay policies</li>
            <li>Handle touch interactions</li>
            <li>Optimize for data usage</li>
          </ul>
        </div>

        <div>
          <h3>3. Browser Compatibility</h3>
          <ul>
            <li>Provide multiple video formats</li>
            <li>Include fallback content</li>
            <li>Test across different browsers</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Tools and Resources</h2>
        <ul>
          <li>Video compression tools (HandBrake, FFmpeg)</li>
          <li>Online video optimization services</li>
          <li>Video CDNs and hosting platforms</li>
          <li>Browser dev tools for testing</li>
          <li>Video player libraries (Video.js, Plyr)</li>
        </ul>
      </section>
    </div>
  );
};

export default RWDVideos; 