import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const FloatingLabels = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Floating Labels in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
        <div className="mb-3">
          <div className="form-floating mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input 
              type="password" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Textareas</h2>
        <div className="mb-3">
          <div className="form-floating">
            <textarea 
              className="form-control" 
              placeholder="Leave a comment here" 
              id="floatingTextarea"
              style={{ height: '100px' }}
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Selects</h2>
        <div className="mb-3">
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Works with selects</label>
          </div>
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default FloatingLabels; 