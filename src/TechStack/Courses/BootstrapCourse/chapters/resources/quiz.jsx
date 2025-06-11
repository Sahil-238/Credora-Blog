import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Quiz = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Quiz</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Grid System</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">1. What is the maximum number of columns in Bootstrap's grid system?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q1" id="q1a" className="form-check-input" />
              <label htmlFor="q1a" className="form-check-label">6 columns</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q1" id="q1b" className="form-check-input" />
              <label htmlFor="q1b" className="form-check-label">8 columns</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q1" id="q1c" className="form-check-input" />
              <label htmlFor="q1c" className="form-check-label">12 columns</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q1" id="q1d" className="form-check-input" />
              <label htmlFor="q1d" className="form-check-label">16 columns</label>
            </div>
          </div>
          <div className="mt-2 text-success d-none">Correct! Bootstrap uses a 12-column grid system.</div>
        </div>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">2. Which class would you use to make a column take up half the width on medium-sized screens?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q2" id="q2a" className="form-check-input" />
              <label htmlFor="q2a" className="form-check-label">col-6</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q2" id="q2b" className="form-check-input" />
              <label htmlFor="q2b" className="form-check-label">col-md-6</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q2" id="q2c" className="form-check-input" />
              <label htmlFor="q2c" className="form-check-label">col-sm-6</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q2" id="q2d" className="form-check-input" />
              <label htmlFor="q2d" className="form-check-label">md-col-6</label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">3. Which component class is used to create a basic navigation bar?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q3" id="q3a" className="form-check-input" />
              <label htmlFor="q3a" className="form-check-label">.nav-bar</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q3" id="q3b" className="form-check-input" />
              <label htmlFor="q3b" className="form-check-label">.navigation</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q3" id="q3c" className="form-check-input" />
              <label htmlFor="q3c" className="form-check-label">.navbar</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q3" id="q3d" className="form-check-input" />
              <label htmlFor="q3d" className="form-check-label">.nav</label>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">4. What class is used to create a primary button in Bootstrap?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q4" id="q4a" className="form-check-input" />
              <label htmlFor="q4a" className="form-check-label">.button-primary</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q4" id="q4b" className="form-check-input" />
              <label htmlFor="q4b" className="form-check-label">.btn-primary</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q4" id="q4c" className="form-check-input" />
              <label htmlFor="q4c" className="form-check-label">.primary-btn</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q4" id="q4d" className="form-check-input" />
              <label htmlFor="q4d" className="form-check-label">.btn-main</label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Utilities</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">5. Which utility class adds margin to the bottom of an element?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q5" id="q5a" className="form-check-input" />
              <label htmlFor="q5a" className="form-check-label">.margin-bottom</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q5" id="q5b" className="form-check-input" />
              <label htmlFor="q5b" className="form-check-label">.m-bottom</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q5" id="q5c" className="form-check-input" />
              <label htmlFor="q5c" className="form-check-label">.mb-3</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q5" id="q5d" className="form-check-input" />
              <label htmlFor="q5d" className="form-check-label">.bottom-margin</label>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">6. Which display utility class hides an element only on medium screens?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q6" id="q6a" className="form-check-input" />
              <label htmlFor="q6a" className="form-check-label">.hide-md</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q6" id="q6b" className="form-check-input" />
              <label htmlFor="q6b" className="form-check-label">.d-md-none</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q6" id="q6c" className="form-check-input" />
              <label htmlFor="q6c" className="form-check-label">.hidden-md</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q6" id="q6d" className="form-check-input" />
              <label htmlFor="q6d" className="form-check-label">.d-none-md</label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Forms</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">7. Which class is used to create a floating label form control?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q7" id="q7a" className="form-check-input" />
              <label htmlFor="q7a" className="form-check-label">.form-floating</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q7" id="q7b" className="form-check-input" />
              <label htmlFor="q7b" className="form-check-label">.floating-form</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q7" id="q7c" className="form-check-input" />
              <label htmlFor="q7c" className="form-check-label">.form-float</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q7" id="q7d" className="form-check-input" />
              <label htmlFor="q7d" className="form-check-label">.float-label</label>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold mb-2">8. What attribute is required for form validation to work with Bootstrap's validation classes?</p>
          <div className="space-y-2">
            <div className="form-check">
              <input type="radio" name="q8" id="q8a" className="form-check-input" />
              <label htmlFor="q8a" className="form-check-label">validate</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q8" id="q8b" className="form-check-input" />
              <label htmlFor="q8b" className="form-check-label">novalidate</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q8" id="q8c" className="form-check-input" />
              <label htmlFor="q8c" className="form-check-label">validation</label>
            </div>
            <div className="form-check">
              <input type="radio" name="q8" id="q8d" className="form-check-input" />
              <label htmlFor="q8d" className="form-check-label">form-validate</label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <button className="btn btn-primary">Check Answers</button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Answer Key</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ol className="list-decimal pl-6 space-y-2">
            <li>12 columns - The Bootstrap grid system is based on a 12-column layout</li>
            <li>col-md-6 - The md breakpoint is for medium screens, and 6 columns is half of 12</li>
            <li>.navbar - This is the base class for Bootstrap navigation bars</li>
            <li>.btn-primary - This creates a primary-colored button</li>
            <li>.mb-3 - mb stands for margin-bottom, and 3 is the spacing size</li>
            <li>.d-md-none - This hides an element only on medium screens</li>
            <li>.form-floating - This creates a floating label form control</li>
            <li>novalidate - This prevents browser default validation to use Bootstrap's validation</li>
          </ol>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Quiz; 