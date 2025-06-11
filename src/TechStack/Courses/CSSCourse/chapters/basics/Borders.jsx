import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const Borders = () => {
  const [borderWidth, setBorderWidth] = useState('2px');
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderColor, setBorderColor] = useState('#3498db');
  const [borderRadius, setBorderRadius] = useState('4px');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Borders</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to CSS Borders</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="text-gray-600 mb-4">
            CSS borders are fundamental for defining element boundaries and creating visual separation in web design.
            They can be customized in terms of style, width, color, and can be applied to specific sides of an element.
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Interactive Border Demo</h3>
            <div 
              className="bg-white p-6 rounded-lg border-2 text-center"
              style={{
                borderWidth: borderWidth,
                borderStyle: borderStyle,
                borderColor: borderColor,
                borderRadius: borderRadius
              }}
            >
              Interactive Border Box
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700 font-medium w-32">Border Width:</label>
                <select 
                  value={borderWidth} 
                  onChange={(e) => setBorderWidth(e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option value="1px">1px</option>
                  <option value="2px">2px</option>
                  <option value="4px">4px</option>
                  <option value="8px">8px</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 font-medium w-32">Border Style:</label>
                <select 
                  value={borderStyle} 
                  onChange={(e) => setBorderStyle(e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option value="solid">solid</option>
                  <option value="dashed">dashed</option>
                  <option value="dotted">dotted</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                  <option value="ridge">ridge</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 font-medium w-32">Border Color:</label>
                <input 
                  type="color" 
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                  className="border rounded p-1"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="text-gray-700 font-medium w-32">Border Radius:</label>
                <select 
                  value={borderRadius} 
                  onChange={(e) => setBorderRadius(e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option value="0">0px</option>
                  <option value="4px">4px</option>
                  <option value="8px">8px</option>
                  <option value="16px">16px</option>
                  <option value="50%">50% (Circle)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Border Properties</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.element {
  /* Individual borders */
  border-top: 2px solid #333;
  border-right: 3px dashed #666;
  border-bottom: 4px dotted #999;
  border-left: 5px double #ccc;

  /* Shorthand */
  border: 2px solid #333;
  
  /* Border radius */
  border-radius: 8px;
  
  /* Individual corners */
  border-top-left-radius: 4px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 16px;
}`}
            </pre>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Border Styles</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>solid - A solid line</li>
                <li>dashed - A series of square-ended dashes</li>
                <li>dotted - A series of round dots</li>
                <li>double - Two parallel solid lines</li>
                <li>groove - Appears carved into the page</li>
                <li>ridge - Appears to stick out from the page</li>
                <li>inset - Makes the element appear embedded</li>
                <li>outset - Makes the element appear in relief</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use consistent border styles throughout your design</li>
          <li>Consider border colors that complement your color scheme</li>
          <li>Use border-radius appropriately for your design style</li>
          <li>Combine borders with other properties like box-shadow for depth</li>
          <li>Test border styles across different browsers</li>
          <li>Use shorthand properties when setting all sides equally</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default Borders; 