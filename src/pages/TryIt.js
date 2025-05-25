import { useState } from 'react';

export default function TryIt() {
  const [html, setHtml] = useState("<h1>Hello, world!</h1>");
  const [css, setCss] = useState("h1 { color: blue; }");
  const [js, setJs] = useState("console.log('Hello from JS')");

  const generateSrcDoc = () => {
    return `
      <html>
        <head><style>${css}</style></head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Write your code:</h2>
        <textarea
          className="w-full h-24 p-2 border mb-2"
          placeholder="HTML"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
        <textarea
          className="w-full h-24 p-2 border mb-2"
          placeholder="CSS"
          value={css}
          onChange={(e) => setCss(e.target.value)}
        />
        <textarea
          className="w-full h-24 p-2 border"
          placeholder="JavaScript"
          value={js}
          onChange={(e) => setJs(e.target.value)}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Output:</h2>
        <iframe
          srcDoc={generateSrcDoc()}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="300px"
          className="border"
        />
      </div>
    </div>
  );
}