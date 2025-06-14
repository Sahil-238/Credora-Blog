import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const FormsBasic = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Basic Forms in Bootstrap</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Form Controls</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleEmail" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleEmail" 
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleSelect" className="form-label">Example select</label>
            <select className="form-select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleTextarea" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
        </form>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<form>
  <div class="mb-3">
    <label for="exampleEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleEmail" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleSelect" class="form-label">Example select</label>
    <select class="form-select" id="exampleSelect">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="exampleTextarea" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>
</form>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizing</h2>
        <div className="mb-3">
          <input 
            className="form-control form-control-lg mb-2" 
            type="text" 
            placeholder=".form-control-lg" 
          />
          <input 
            className="form-control mb-2" 
            type="text" 
            placeholder="Default input" 
          />
          <input 
            className="form-control form-control-sm" 
            type="text" 
            placeholder=".form-control-sm" 
          />
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disabled and Readonly</h2>
        <div className="mb-3">
          <input 
            className="form-control mb-2" 
            type="text" 
            placeholder="Disabled input" 
            disabled 
          />
          <input 
            className="form-control" 
            type="text" 
            placeholder="Readonly input" 
            readOnly 
          />
        </div>
        <div className="mt-4">
          <pre className="bg-gray-100 p-4 rounded">
            {`<input class="form-control" type="text" placeholder="Disabled input" disabled>
<input class="form-control" type="text" placeholder="Readonly input" readonly>`}
          </pre>
        </div>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default FormsBasic; 