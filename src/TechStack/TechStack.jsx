import React from 'react';
import { FiCode } from 'react-icons/fi';

const courses = [
  {
    title: "HTML Course",
    description: "Learn HTML from basics to advanced topics including semantic HTML, accessibility, and best practices.",
    icon: <FiCode />,
    link: "/html-course",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    title: "Python Course",
    description: "Learn Python programming from basics to advanced topics including web development, data science, and machine learning.",
    icon: <FiCode />,
    link: "/python-course",
    color: "bg-yellow-500",
    hoverColor: "hover:bg-yellow-600"
  },
];

export default courses; 