import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Progress = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Progress Bars in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Progress Bar</h2>
        <div className="mb-4">
          <div className="progress">
            <div 
              className="progress-bar" 
              role="progressbar" 
              style={{width: '25%'}} 
              aria-valuenow="25" 
              aria-valuemin="0" 
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" 
       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    25%
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress Bar Colors</h2>
        <div className="mb-4">
          <div className="progress mb-2">
            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}}></div>
          </div>
          <div className="progress mb-2">
            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}}></div>
          </div>
          <div className="progress mb-2">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}}></div>
          </div>
          <div className="progress mb-2">
            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}}></div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%"></div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Striped Progress Bars</h2>
        <div className="mb-4">
          <div className="progress mb-2">
            <div 
              className="progress-bar progress-bar-striped" 
              role="progressbar" 
              style={{width: '40%'}}
            >
              40%
            </div>
          </div>
          <div className="progress mb-2">
            <div 
              className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
              role="progressbar" 
              style={{width: '60%'}}
            >
              60%
            </div>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<!-- Striped -->
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%">
    40%
  </div>
</div>

<!-- Animated stripes -->
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" 
       role="progressbar" style="width: 60%">
    60%
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Progress;