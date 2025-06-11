import React from 'react';
import TopicNavigation from '../../../../../components/TopicNavigation';

const GridExamples = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bootstrap Grid Examples</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Blog Layout</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Blog layout with sidebar -->
<div class="container">
  <div class="row g-5">
    <!-- Main content -->
    <div class="col-12 col-lg-8">
      <!-- Blog post -->
      <article class="mb-4">
        <h2>Blog Post Title</h2>
        <p class="text-muted">Posted on January 1, 2024</p>
        <p>Blog post content...</p>
      </article>
      
      <!-- Blog post grid -->
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5>Post Title</h5>
              <p>Post excerpt...</p>
            </div>
          </div>
        </div>
        <!-- More posts... -->
      </div>
    </div>
    
    <!-- Sidebar -->
    <div class="col-12 col-lg-4">
      <div class="position-sticky" style="top: 2rem;">
        <!-- Search -->
        <div class="mb-4">
          <h4>Search</h4>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search...">
            <button class="btn btn-primary" type="button">Go</button>
          </div>
        </div>
        
        <!-- Categories -->
        <div class="mb-4">
          <h4>Categories</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-decoration-none">Category 1</a></li>
            <li><a href="#" class="text-decoration-none">Category 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Layout</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Admin dashboard layout -->
<div class="container-fluid">
  <div class="row">
    <!-- Sidebar -->
    <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main content -->
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <!-- Stats cards -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 my-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Sales</h5>
              <h2 class="card-text">$24,500</h2>
            </div>
          </div>
        </div>
        <!-- More stat cards... -->
      </div>

      <!-- Charts grid -->
      <div class="row g-4 mb-4">
        <div class="col-12 col-xl-8">
          <div class="card">
            <div class="card-body">
              <!-- Line chart -->
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="card">
            <div class="card-body">
              <!-- Pie chart -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">E-commerce Product Grid</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Product listing page -->
<div class="container">
  <!-- Filters row -->
  <div class="row mb-4">
    <div class="col-12 col-md-4">
      <select class="form-select">
        <option>Sort by...</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
    <div class="col-12 col-md-8">
      <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary">Filter 1</button>
        <button class="btn btn-outline-secondary">Filter 2</button>
      </div>
    </div>
  </div>

  <!-- Products grid -->
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <!-- Product card -->
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="Product">
        <div class="card-body">
          <h5 class="card-title">Product Name</h5>
          <p class="card-text">$99.99</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <!-- More product cards... -->
  </div>

  <!-- Pagination -->
  <div class="row mt-4">
    <div class="col-12">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Layout</h2>
        <div className="bg-gray-100 p-4 rounded">
          <pre className="bg-white p-3 rounded">
            {`<!-- Portfolio page -->
<div class="container">
  <!-- Hero section -->
  <div class="row align-items-center min-vh-75 py-5">
    <div class="col-12 col-lg-6">
      <h1 class="display-4">Portfolio Title</h1>
      <p class="lead">Portfolio description...</p>
    </div>
    <div class="col-12 col-lg-6">
      <img src="..." class="img-fluid" alt="Hero image">
    </div>
  </div>

  <!-- Portfolio grid -->
  <div class="row g-4">
    <!-- Featured project -->
    <div class="col-12">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-8">
            <img src="..." class="img-fluid" alt="Project">
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h3>Featured Project</h3>
              <p>Project description...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Regular projects -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="..." class="card-img-top" alt="Project">
        <div class="card-body">
          <h5>Project Title</h5>
          <p>Project description...</p>
        </div>
      </div>
    </div>
    <!-- More project cards... -->
  </div>
</div>`}
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use semantic HTML structure</li>
          <li>Consider mobile-first approach</li>
          <li>Implement proper spacing with gutters</li>
          <li>Use appropriate breakpoints</li>
          <li>Optimize for different screen sizes</li>
          <li>Maintain consistent grid patterns</li>
          <li>Use nested grids when needed</li>
          <li>Consider accessibility</li>
          <li>Test responsive behavior</li>
        </ul>
      </div>

      <TopicNavigation />
    </div>
  );
};

export default GridExamples; 