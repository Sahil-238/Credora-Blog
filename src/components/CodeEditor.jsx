import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ defaultValue, language = 'javascript', height = '200px', onChange }) => {
  const handleEditorChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={defaultValue}
        theme="vs-light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on'
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor; 