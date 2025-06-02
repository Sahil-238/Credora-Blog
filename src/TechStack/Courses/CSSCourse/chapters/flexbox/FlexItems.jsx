import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const FlexItems = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Flex Item Properties</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Flex Item Growth and Shrinking</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">flex-grow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.item {
  flex-grow: 0;    /* Default - don't grow */
  flex-grow: 1;    /* Grow to fill space */
  flex-grow: 2;    /* Grow twice as much as flex-grow: 1 */
}

/* Example distribution */
.item-1 { flex-grow: 1; }  /* 25% of extra space */
.item-2 { flex-grow: 2; }  /* 50% of extra space */
.item-3 { flex-grow: 1; }  /* 25% of extra space */`}</pre>
            </div>
            <div className="flex gap-2 bg-gray-50 p-4 rounded">
              <div className="bg-blue-100 p-2 rounded flex-grow">flex-grow: 1</div>
              <div className="bg-pink-100 p-2 rounded flex-grow-[2]">flex-grow: 2</div>
              <div className="bg-purple-100 p-2 rounded flex-grow">flex-grow: 1</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">flex-shrink</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.item {
  flex-shrink: 1;    /* Default - can shrink */
  flex-shrink: 0;    /* Don't shrink */
  flex-shrink: 2;    /* Shrink twice as fast */
}

/* Example with fixed widths */
.item {
  width: 200px;
  flex-shrink: 1;    /* Will shrink if container is too small */
}`}</pre>
            </div>
            <div className="flex gap-2 bg-gray-50 p-4 rounded overflow-hidden">
              <div className="bg-blue-100 p-2 rounded w-48 flex-shrink">flex-shrink: 1</div>
              <div className="bg-pink-100 p-2 rounded w-48 flex-shrink-0">flex-shrink: 0</div>
              <div className="bg-purple-100 p-2 rounded w-48 flex-shrink-[2]">flex-shrink: 2</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Flex Item Basis and Order</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">flex-basis</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.item {
  flex-basis: auto;    /* Default - use item's width/height */
  flex-basis: 0;       /* Item can grow/shrink from zero size */
  flex-basis: 200px;   /* Start from 200px before growing/shrinking */
  flex-basis: 50%;     /* Start from 50% of container */
}

/* Shorthand */
.item {
  flex: 1;            /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 2 1 auto;     /* flex-grow: 2, flex-shrink: 1, flex-basis: auto */
}`}</pre>
            </div>
            <div className="flex gap-2 bg-gray-50 p-4 rounded">
              <div className="bg-blue-100 p-2 rounded basis-1/4">basis: 25%</div>
              <div className="bg-pink-100 p-2 rounded basis-1/2">basis: 50%</div>
              <div className="bg-purple-100 p-2 rounded basis-1/4">basis: 25%</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">order</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.item {
  order: 0;     /* Default */
  order: 1;     /* Move forward */
  order: -1;    /* Move backward */
}

/* Example reordering */
.first { order: -1; }   /* Appears first */
.middle { order: 0; }   /* Default position */
.last { order: 1; }     /* Appears last */`}</pre>
            </div>
            <div className="flex gap-2 bg-gray-50 p-4 rounded">
              <div className="bg-blue-100 p-2 rounded order-last">order: 1</div>
              <div className="bg-pink-100 p-2 rounded order-none">order: 0</div>
              <div className="bg-purple-100 p-2 rounded order-first">order: -1</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Individual Alignment</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">align-self</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.item {
  align-self: auto;       /* Default - follow container's align-items */
  align-self: flex-start; /* Align to start of cross axis */
  align-self: flex-end;   /* Align to end of cross axis */
  align-self: center;     /* Center on cross axis */
  align-self: stretch;    /* Stretch to fill cross axis */
  align-self: baseline;   /* Align by text baseline */
}`}</pre>
          </div>
          <div className="flex gap-2 h-32 bg-gray-50 p-4 rounded">
            <div className="bg-blue-100 p-2 rounded self-start">self-start</div>
            <div className="bg-pink-100 p-2 rounded self-center">self-center</div>
            <div className="bg-purple-100 p-2 rounded self-end">self-end</div>
            <div className="bg-green-100 p-2 rounded self-stretch">self-stretch</div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Flex Item Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use flex-grow for proportional sizing</li>
          <li>Consider flex-shrink for responsive behavior</li>
          <li>Set appropriate flex-basis values</li>
          <li>Use the flex shorthand when possible</li>
          <li>Be cautious with order property (affects accessibility)</li>
          <li>Use align-self sparingly for exceptions</li>
          <li>Test with different content sizes</li>
          <li>Consider browser support for newer features</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default FlexItems; 