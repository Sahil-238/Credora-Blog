import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const webDevCourses = [
  { title: "JavaScript", path: "/javascript-course", level: "Beginner", duration: "8 weeks", projects: "5 projects" },
  { title: "CSS", path: "/css-course", level: "Beginner", duration: "6 weeks", projects: "4 projects" },
  { title: "React", path: "/react-course", level: "Intermediate", duration: "10 weeks", projects: "6 projects" },
  { title: "Node.js", path: "/nodejs-course", level: "Advanced", duration: "14 weeks", projects: "10 projects" },
  { title: "Java", path: "/java-course", level: "Intermediate", duration: "12 weeks", projects: "8 projects" },
  { title: "PHP", path: "/php-course", level: "Intermediate", duration: "10 weeks", projects: "7 projects" },
  { title: "SQL", path: "/sql-course", level: "Intermediate", duration: "8 weeks", projects: "6 projects" },
  { title: "Bootstrap", path: "/bootstrap-course", level: "Beginner", duration: "5 weeks", projects: "3 projects" },
  { title: "Web Development", path: "/web-development", level: "All Levels", duration: "16 weeks", projects: "12 projects" },
];

const aiMlCourses = [
  { title: "Python", path: "/python-course", level: "Beginner", duration: "10 weeks", projects: "7 projects" },
  { title: "Data Science", path: "/data-science", level: "Intermediate", duration: "14 weeks", projects: "10 projects" },
  { title: "AI & Machine Learning", path: "/ai-ml", level: "Intermediate", duration: "16 weeks", projects: "12 projects" },
];

const dataScienceCourses = [
  { title: "Python for Data Science", path: "/data-science", level: "Beginner", duration: "12 weeks", projects: "8 projects" },
  { title: "Machine Learning Fundamentals", path: "/machine-learning", level: "Intermediate", duration: "16 weeks", projects: "10 projects" },
  { title: "Data Analytics with Power BI", path: "/data-analytics", level: "Intermediate", duration: "10 weeks", projects: "6 projects" },
];

const mobileDevCourses = [
  { title: "Mobile Development", path: "/mobile-development", level: "Intermediate", duration: "10 weeks", projects: "7 projects" },
];

const uiuxCourses = [
  { title: "UI/UX Design", path: "/ui-ux-design", level: "Beginner", duration: "10 weeks", projects: "7 projects" },
];

const Courses = () => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Web Development Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12">
            <div>
              <Link to="/web-development">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-blue-600 transition-colors">Web Development</h2>
              </Link>
              <p className="text-lg sm:text-xl text-gray-600">Build modern, responsive web applications</p>
            </div>
            <Link to="/web-development" className="mt-4 sm:mt-0 group flex items-center space-x-2 text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300">
              <span className="font-semibold">Explore All Courses</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {webDevCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="web" />
            ))}
          </div>
        </div>

        {/* AI ML Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12">
            <div>
              <Link to="/ai-ml">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-purple-600 transition-colors">AI & Machine Learning</h2>
              </Link>
              <p className="text-lg sm:text-xl text-gray-600">Master the future of technology</p>
            </div>
            <Link to="/ai-ml" className="mt-4 sm:mt-0 group flex items-center space-x-2 text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300">
              <span className="font-semibold">Explore All Courses</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {aiMlCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="ai" />
            ))}
          </div>
        </div>

        {/* Data Science Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12">
            <div>
              <Link to="/data-science">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-green-600 transition-colors">Data Science</h2>
              </Link>
              <p className="text-lg sm:text-xl text-gray-600">Analyze data and build intelligent systems</p>
            </div>
            <Link to="/data-science" className="mt-4 sm:mt-0 group flex items-center space-x-2 text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300">
              <span className="font-semibold">Explore All Courses</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {dataScienceCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="ai" />
            ))}
          </div>
        </div>

        {/* Mobile Development Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12">
            <div>
              <Link to="/mobile-development">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-pink-600 transition-colors">Mobile Development</h2>
              </Link>
              <p className="text-lg sm:text-xl text-gray-600">Build apps for Android and iOS</p>
            </div>
            <Link to="/mobile-development" className="mt-4 sm:mt-0 group flex items-center space-x-2 text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300">
              <span className="font-semibold">Explore All Courses</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {mobileDevCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="web" />
            ))}
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12">
            <div>
              <Link to="/ui-ux-design">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-indigo-600 transition-colors">UI/UX Design</h2>
              </Link>
              <p className="text-lg sm:text-xl text-gray-600">Design beautiful and user-friendly interfaces</p>
            </div>
            <Link to="/ui-ux-design" className="mt-4 sm:mt-0 group flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300">
              <span className="font-semibold">Explore All Courses</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {uiuxCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="web" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 