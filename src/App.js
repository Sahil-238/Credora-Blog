import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import TryIt from './pages/TryIt';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/learn/html">Learn HTML</Link>
          <Link to="/try/html">Try HTML</Link>
          <Link to="/quiz/html">Quiz</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn/html" element={<Learn />} />
          <Route path="/try/html" element={<TryIt />} />
          <Route path="/quiz/html" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;