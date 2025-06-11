import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Exercises = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Exercises</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exercise 1: Grid System</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">Create a responsive layout with the following requirements:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Full width on mobile</li>
            <li>Two columns on tablet</li>
            <li>Three columns on desktop</li>
            <li>Equal spacing between columns</li>
          </ul>
          <pre className="bg-white p-3 rounded">
            {`<!-- Your solution here -->
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 bg-light">Column 1</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 bg-light">Column 2</div>
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      <div class="p-3 bg-light">Column 3</div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exercise 2: Navigation</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">Create a responsive navigation bar with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Brand logo/text</li>
            <li>Navigation links</li>
            <li>Dropdown menu</li>
            <li>Search form</li>
            <li>Hamburger menu on mobile</li>
          </ul>
          <pre className="bg-white p-3 rounded">
            {`<!-- Your solution here -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exercise 3: Forms</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">Create a contact form with validation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name field (required)</li>
            <li>Email field (required, valid email)</li>
            <li>Subject dropdown</li>
            <li>Message textarea</li>
            <li>Submit button</li>
            <li>Form validation feedback</li>
          </ul>
          <pre className="bg-white p-3 rounded">
            {`<!-- Your solution here -->
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" required>
    <div class="invalid-feedback">
      Please enter your name
    </div>
  </div>
  
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
    <div class="invalid-feedback">
      Please enter a valid email address
    </div>
  </div>
  
  <div class="mb-3">
    <label for="subject" class="form-label">Subject</label>
    <select class="form-select" id="subject" required>
      <option value="">Choose...</option>
      <option value="general">General Inquiry</option>
      <option value="support">Support</option>
      <option value="feedback">Feedback</option>
    </select>
  </div>
  
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" rows="4" required></textarea>
  </div>
  
  <button class="btn btn-primary" type="submit">Submit</button>
</form>

<script>
// Form validation
(function() {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
</script>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exercise 4: Card Layout</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">Create a responsive card grid with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Image cards</li>
            <li>Card titles and text</li>
            <li>Action buttons</li>
            <li>Hover effects</li>
            <li>Responsive grid layout</li>
          </ul>
          <pre className="bg-white p-3 rounded">
            {`<!-- Your solution here -->
<div class="container">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <!-- Card 1 -->
    <div class="col">
      <div class="card h-100 shadow-sm transition-transform hover-lift">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">Some quick example text for the card.</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
    
    <!-- Add more cards... -->
  </div>
</div>

<style>
.hover-lift {
  transition: transform 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
}
</style>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exercise 5: Modal and Tooltips</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">Create interactive components:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modal dialog</li>
            <li>Tooltips</li>
            <li>Popovers</li>
            <li>Custom styling</li>
          </ul>
          <pre className="bg-white p-3 rounded">
            {`<!-- Your solution here -->
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch Modal
</button>

<!-- Tooltip example -->
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" title="Tooltip text">
  Hover for tooltip
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Modal content goes here...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<script>
// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
</script>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Test responsive behavior at all breakpoints</li>
          <li>Use semantic HTML elements</li>
          <li>Implement proper form validation</li>
          <li>Add appropriate ARIA labels</li>
          <li>Optimize performance</li>
          <li>Follow Bootstrap conventions</li>
          <li>Document your code</li>
          <li>Consider accessibility</li>
          <li>Use consistent spacing</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Exercises; 