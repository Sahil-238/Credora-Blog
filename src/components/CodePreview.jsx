import React, { useEffect, useRef } from 'react';

const CodePreview = ({ code, height = '200px', initialHtml = '' }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Basic HTML template with jQuery included
      const htmlTemplate = `
        <!DOCTYPE html>
        <html>
          <head>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                padding: 1rem;
                margin: 0;
                color: #333;
              }
              .result {
                padding: 15px;
                border-radius: 6px;
                background-color: #f8f9fa;
                min-height: 50px;
              }
              .error {
                color: #dc3545;
                padding: 10px;
                margin-top: 10px;
                border-radius: 4px;
                background-color: #fff5f5;
                border: 1px solid #feb2b2;
              }
              /* Common jQuery demo styles */
              .demo-box {
                padding: 10px;
                margin: 5px;
                border: 1px solid #ddd;
                background-color: #fff;
                transition: all 0.3s ease;
              }
              .highlight {
                background-color: #fff3cd;
                border-color: #ffeeba;
              }
              .hidden {
                display: none;
              }
              .button {
                padding: 8px 16px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin: 5px;
              }
              .button:hover {
                background-color: #0056b3;
              }
            </style>
          </head>
          <body>
            ${initialHtml || '<div id="result" class="result"><!-- Content will be added here --></div>'}
            <div id="error-container"></div>
            <script>
              // Error handling
              window.onerror = function(msg, url, line) {
                const errorContainer = document.getElementById('error-container');
                errorContainer.innerHTML = \`<div class="error">Error: \${msg}</div>\`;
                return false;
              };

              // jQuery ready wrapper
              $(document).ready(function() {
                try {
                  ${code || '// No code provided'}
                } catch (error) {
                  const errorContainer = document.getElementById('error-container');
                  errorContainer.innerHTML = \`<div class="error">Error: \${error.message}</div>\`;
                }
              });
            </script>
          </body>
        </html>
      `;

      iframeDoc.open();
      iframeDoc.write(htmlTemplate);
      iframeDoc.close();
    }
  }, [code, initialHtml]);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
      <iframe
        ref={iframeRef}
        title="Code Preview"
        className="w-full"
        style={{ height }}
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default CodePreview; 