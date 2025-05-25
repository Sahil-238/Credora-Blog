import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MobileDevelopment = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'android', name: 'Android Development' },
    { id: 'ios', name: 'iOS Development' },
    { id: 'react-native', name: 'React Native' },
    { id: 'flutter', name: 'Flutter' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Android App Development with Kotlin',
      description: 'Build modern Android applications using Kotlin and Android Studio with Material Design',
      image: assets.course_1,
      instructor: 'Michael Chen',
      instructorImage: assets.profile_img_2,
      duration: '40 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 12840,
      category: 'android',
      price: '$89.99'
    },
    {
      id: 2,
      title: 'iOS Development with Swift',
      description: 'Create stunning iOS apps using Swift and Xcode. Learn UIKit and SwiftUI',
      image: assets.course_2,
      instructor: 'Emma Williams',
      instructorImage: assets.profile_img_3,
      duration: '38 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 10560,
      category: 'ios',
      price: '$94.99'
    },
    {
      id: 3,
      title: 'Cross-Platform Apps with React Native',
      description: 'Build native mobile apps for both iOS and Android using React Native and Expo',
      image: assets.course_3,
      instructor: 'Sarah Johnson',
      instructorImage: assets.profile_img_1,
      duration: '35 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: 9870,
      category: 'react-native',
      price: '$84.99'
    },
    {
      id: 4,
      title: 'Flutter & Dart: Complete Development Guide',
      description: 'Create beautiful cross-platform applications with Flutter and Dart',
      image: assets.course_4,
      instructor: 'Michael Chen',
      instructorImage: assets.profile_img_2,
      duration: '42 hours',
      level: 'Intermediate',
      rating: 4.8,
      students: 7650,
      category: 'flutter',
      price: '$89.99'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20">
        <div className="absolute inset-0 bg-opacity-70 bg-blue-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mobile Development Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Launch your career in mobile app development. Learn to build native and 
              cross-platform mobile applications for iOS and Android platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                } shadow-sm`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-medium text-blue-600">
                  {course.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{course.instructor}</div>
                    <div className="text-sm text-gray-500">{course.level}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center">
                    <img src={assets.star} alt="rating" className="w-5 h-5" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <img src={assets.time_clock_icon} alt="duration" className="w-4 h-4 inline mr-1" />
                    {course.duration}
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Learn Mobile Development With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <img src={assets.lesson_icon} alt="Complete Projects" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Complete App Projects
              </h3>
              <p className="text-gray-600">
                Build and publish real mobile applications to the App Store and Google Play.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <img src={assets.person_tick_icon} alt="Expert Mobile Developers" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Mobile Developers
              </h3>
              <p className="text-gray-600">
                Learn from developers with experience at top mobile app companies.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <img src={assets.play_icon} alt="Latest Technologies" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Latest Technologies
              </h3>
              <p className="text-gray-600">
                Stay updated with the newest mobile development frameworks and tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopment;
