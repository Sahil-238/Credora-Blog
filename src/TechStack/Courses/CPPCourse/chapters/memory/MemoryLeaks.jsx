import React from 'react';

const MemoryLeaks = () => {
  return (
    <div className="chapter-content">
      <h1>Memory Leaks in C++</h1>
      <section>
        <h2>Understanding Memory Leaks</h2>
        <p>
          A memory leak occurs when a program fails to release memory that is no longer needed.
          This can lead to decreased performance and potentially crash the program if the system runs out of memory.
        </p>
        {/* Add more content here */}
      </section>
    </div>
  );
};

export default MemoryLeaks; 