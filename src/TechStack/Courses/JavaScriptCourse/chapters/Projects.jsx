import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckSquare, FiCloud, FiHelpCircle, FiAward } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Projects = () => {
  const projects = [
    {
      id: 'todo',
      title: 'Todo Application',
      icon: <FiCheckSquare />,
      description: 'Build a fully functional todo list application with CRUD operations and local storage.',
      features: [
        'Add, edit, and delete todos',
        'Mark todos as complete',
        'Filter by status',
        'Persist data in localStorage',
        'Responsive design'
      ],
      code: `// Todo Item Class
class TodoItem {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}

// Todo List Management
class TodoList {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  addTodo(text) {
    const todo = new TodoItem(Date.now(), text);
    this.todos.push(todo);
    this.save();
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.save();
    }
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

// UI Updates
function renderTodos(todos) {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = todos
    .map(todo => \`
      <li class="\${todo.completed ? 'completed' : ''}">
        <input type="checkbox" \${todo.completed ? 'checked' : ''}>
        <span>\${todo.text}</span>
        <button class="delete">×</button>
      </li>
    \`).join('');
}`
    },
    {
      id: 'weather',
      title: 'Weather Application',
      icon: <FiCloud />,
      description: 'Create a weather app that fetches and displays weather data from an API.',
      features: [
        'Fetch weather data from API',
        'Display current weather',
        'Show 5-day forecast',
        'Geolocation support',
        'Weather icons and animations'
      ],
      code: `// Weather API Integration
const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.weatherapi.com/v1';

async function getWeather(city) {
  try {
    const response = await fetch(
      \`\${BASE_URL}/forecast.json?key=\${API_KEY}&q=\${city}&days=5\`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}

// Display Weather Data
function displayWeather(data) {
  const current = data.current;
  document.querySelector('.temperature').textContent = 
    \`\${current.temp_c}°C\`;
  document.querySelector('.condition').textContent = 
    current.condition.text;
  
  // Display forecast
  const forecast = data.forecast.forecastday
    .map(day => \`
      <div class="forecast-day">
        <h3>\${formatDate(day.date)}</h3>
        <img src="\${day.condition.icon}">
        <p>\${day.day.avgtemp_c}°C</p>
      </div>
    \`).join('');
  
  document.querySelector('.forecast').innerHTML = forecast;
}`
    },
    {
      id: 'quiz',
      title: 'Quiz Application',
      icon: <FiHelpCircle />,
      description: 'Develop an interactive quiz application with multiple categories and scoring.',
      features: [
        'Multiple choice questions',
        'Score tracking',
        'Timer functionality',
        'Different categories',
        'Results summary'
      ],
      code: `// Quiz Management
class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
    this.timer = null;
  }

  startQuiz() {
    this.displayQuestion();
    this.startTimer();
  }

  displayQuestion() {
    const question = this.questions[this.currentIndex];
    document.querySelector('.question').innerHTML = \`
      <h2>Question \${this.currentIndex + 1}</h2>
      <p>\${question.text}</p>
      <div class="options">
        \${question.options.map((option, index) => \`
          <button onclick="quiz.checkAnswer(\${index})">
            \${option}
          </button>
        \`).join('')}
      </div>
    \`;
  }

  checkAnswer(selectedIndex) {
    const question = this.questions[this.currentIndex];
    if (selectedIndex === question.correct) {
      this.score++;
    }
    this.nextQuestion();
  }

  startTimer() {
    let timeLeft = 30;
    this.timer = setInterval(() => {
      document.querySelector('.timer').textContent = 
        \`Time: \${timeLeft}s\`;
      if (timeLeft === 0) this.nextQuestion();
      timeLeft--;
    }, 1000);
  }
}`
    },
    {
      id: 'final',
      title: 'Final Project',
      icon: <FiAward />,
      description: 'Build a full-stack JavaScript application combining all learned concepts.',
      features: [
        'User authentication',
        'Database integration',
        'RESTful API',
        'Real-time updates',
        'Deployment'
      ],
      code: `// Express Server Setup
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// API Routes
app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Client-side Authentication
async function login(email, password) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">JavaScript Projects</h1>
      <p className="text-gray-600 mb-8">
        Apply your JavaScript knowledge by building real-world projects. Each project introduces new concepts and challenges.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <span className="text-blue-600 mr-3">{project.icon}</span>
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Project Overview</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Sample Code</h3>
                <SyntaxHighlighter 
                  language="javascript" 
                  style={atomDark}
                  className="rounded-lg"
                >
                  {project.code}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Start Project
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                View Solution
              </button>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Certificate Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-4">Complete the Course</h3>
        <p className="mb-6 opacity-90">
          Finish all projects to earn your JavaScript Developer Certificate and showcase your skills to potential employers.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Get Certified
        </button>
      </div>
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Projects; 