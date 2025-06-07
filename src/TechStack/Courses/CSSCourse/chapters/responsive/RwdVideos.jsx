import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDVideos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Responsive Videos</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Responsive Video</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Making videos responsive ensures they adapt to different screen sizes while maintaining
            their aspect ratio. This is crucial for a good viewing experience across all devices.
          </p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`}</pre>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">HTML Implementation</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/video-id"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">HTML5 Video Element</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<video
  controls
  width="100%"
  poster="thumbnail.jpg"
  preload="metadata"
>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video.</p>
</video>

/* CSS */
video {
  max-width: 100%;
  height: auto;
}`}</pre>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Key Attributes</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>controls - Adds video controls (play, pause, volume)</li>
              <li>poster - Thumbnail image before video plays</li>
              <li>preload - Hints how much data should be preloaded</li>
              <li>width/height - Sets dimensions while maintaining ratio</li>
              <li>Multiple sources for browser compatibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Background Videos</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.video-background {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
}

/* Overlay for better text visibility */
.video-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}`}</pre>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">HTML Structure</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
              <pre className="whitespace-pre-wrap">
{`<div class="video-background">
  <video autoplay muted loop playsinline>
    <source src="background.webm" type="video/webm">
    <source src="background.mp4" type="video/mp4">
  </video>
  <div class="content">
    <!-- Overlay content here -->
  </div>
</div>`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Video Performance</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Lazy Loading</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`<video
  loading="lazy"
  preload="none"
  poster="thumbnail.jpg"
>
  <!-- video sources -->
</video>`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Media Queries</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono">
                <pre className="whitespace-pre-wrap">
{`/* Hide video on mobile to save bandwidth */
@media (max-width: 768px) {
  .background-video {
    display: none;
  }
  
  /* Show fallback image instead */
  .video-fallback {
    display: block;
    background-image: url('fallback.jpg');
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Always maintain aspect ratio for videos</li>
          <li>Provide multiple video formats for compatibility</li>
          <li>Use appropriate preload settings for performance</li>
          <li>Consider bandwidth usage on mobile devices</li>
          <li>Implement fallbacks for unsupported browsers</li>
          <li>Add captions or subtitles for accessibility</li>
          <li>Optimize video quality vs. file size</li>
          <li>Test video playback across different devices</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDVideos; 