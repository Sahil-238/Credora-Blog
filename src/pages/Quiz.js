import { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Tool Multi Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to define a paragraph in HTML?",
      options: ["<div>", "<span>", "<p>", "<paragraph>"],
      answer: "<p>"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {showScore ? (
        <div className="text-2xl font-semibold">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Q{current + 1}: {questions[current].question}
          </h2>
          <div className="space-y-2">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="block w-full text-left bg-white p-2 border rounded hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}