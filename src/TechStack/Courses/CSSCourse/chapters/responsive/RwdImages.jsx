import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDImages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Responsive Images</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Responsive Images</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Responsive images automatically adjust their size to fit different screen sizes and
            resolutions. This ensures optimal viewing experience across all devices while maintaining
            performance.
          </p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Basic responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* With object-fit */
.cover-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.contain-image {
  width: 100%;
  height: 300px;
  object-fit: contain;
}`}</pre>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Example Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                object-fit: cover
              </div>
              <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                object-fit: contain
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">HTML Picture Element</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<picture>
  <!-- Large desktop screens -->
  <source
    media="(min-width: 1200px)"
    srcset="large.jpg"
  />
  <!-- Tablets and small desktops -->
  <source
    media="(min-width: 768px)"
    srcset="medium.jpg"
  />
  <!-- Default image for mobile -->
  <img src="small.jpg" alt="Responsive image" />
</picture>`}</pre>
          </div>

          <p className="text-gray-600 mt-4">
            The picture element provides more control over image loading based on device
            characteristics, allowing you to serve different image files for different scenarios.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Srcset and Sizes</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<img
  src="small.jpg"
  srcset="small.jpg 300w,
          medium.jpg 600w,
          large.jpg 900w"
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 580px,
         800px"
  alt="Responsive image using srcset"
/>`}</pre>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Key Concepts</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>srcset defines the set of images we allow the browser to choose between</li>
              <li>w unit tells the browser the width of each image</li>
              <li>sizes defines a set of media conditions and image sizes</li>
              <li>Browser chooses the most appropriate image based on device characteristics</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Art Direction</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`<picture>
  <!-- Landscape crop for wide screens -->
  <source
    media="(min-width: 768px)"
    srcset="landscape.jpg"
  />
  <!-- Portrait crop for mobile -->
  <source
    srcset="portrait.jpg"
  />
  <img src="fallback.jpg" alt="Art directed responsive image" />
</picture>`}</pre>
          </div>

          <p className="text-gray-600 mt-4">
            Art direction allows you to show different image crops or aspects based on the viewport,
            ensuring the most important part of the image is visible regardless of screen size.
          </p>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Always specify width and height attributes to prevent layout shifts</li>
          <li>Use appropriate image formats (WebP with fallbacks)</li>
          <li>Optimize images for different screen resolutions</li>
          <li>Consider using lazy loading for images below the fold</li>
          <li>Provide meaningful alt text for accessibility</li>
          <li>Use CSS object-fit for better image control</li>
          <li>Consider bandwidth and performance implications</li>
          <li>Test images across different devices and orientations</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDImages; 