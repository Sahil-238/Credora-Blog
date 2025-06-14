import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const ImageStyling = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Image Styling</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Image Styling</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.responsive-image {
  max-width: 100%;
  height: auto;
}

.rounded-image {
  border-radius: 8px;
}

.circular-image {
  border-radius: 50%;
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Image Effects</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Opacity and Hover</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.image-hover {
  opacity: 0.7;
  transition: opacity 0.3s;
}

.image-hover:hover {
  opacity: 1;
}`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Box Shadow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.shadowed-image {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.shadowed-image:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Object Fit Properties</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.image-container {
  width: 300px;
  height: 200px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contain-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fill-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
}`}</pre>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Always specify width and height attributes</li>
          <li>Use responsive images with max-width: 100%</li>
          <li>Consider using srcset for different screen sizes</li>
          <li>Choose appropriate object-fit values</li>
          <li>Optimize images before using them</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default ImageStyling; 