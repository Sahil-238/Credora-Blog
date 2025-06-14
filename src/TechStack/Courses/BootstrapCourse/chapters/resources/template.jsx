import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const Template = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Template</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic HTML Template</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Template</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="css/styles.css" rel="stylesheet">
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container my-5">
      <div class="row">
        <div class="col-md-8">
          <h1>Welcome to Bootstrap</h1>
          <p class="lead">This is a starter template with a simple navigation bar and responsive grid system.</p>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Sidebar</h5>
              <p class="card-text">Some quick example text for the sidebar.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-light py-4 mt-5">
      <div class="container">
        <p class="text-center mb-0">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JavaScript -->
    <script src="js/scripts.js"></script>
  </body>
</html>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CSS File Structure</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`/* styles.css */

/* Custom variables */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --font-family-base: 'Arial', sans-serif;
}

/* Global styles */
body {
  font-family: var(--font-family-base);
  line-height: 1.6;
  color: #333;
}

/* Custom utility classes */
.text-primary-custom {
  color: var(--primary-color);
}

/* Component overrides */
.navbar-custom {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Custom components */
.feature-card {
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .feature-card {
    margin-bottom: 1rem;
  }
}`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">JavaScript Structure</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`// scripts.js

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  // Custom form validation
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

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
})`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`project-root/
├── index.html
├── css/
│   ├── styles.css
│   └── custom/
│       └── components/
├── js/
│   ├── scripts.js
│   └── modules/
├── img/
│   ├── logo.svg
│   └── assets/
├── fonts/
├── vendor/
│   └── bootstrap/
└── README.md`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always include meta viewport tag</li>
          <li>Use semantic HTML elements</li>
          <li>Organize CSS with a methodology (BEM, SMACSS)</li>
          <li>Keep JavaScript modular</li>
          <li>Optimize assets for production</li>
          <li>Include proper documentation</li>
          <li>Follow accessibility guidelines</li>
          <li>Implement responsive design patterns</li>
          <li>Use version control</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default Template; 