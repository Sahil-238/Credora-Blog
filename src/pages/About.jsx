import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Active Students' },
    { number: '200+', label: 'Expert Instructors' },
    { number: '500+', label: 'Courses' },
    { number: '95%', label: 'Success Rate' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: assets.profile_img_1,
      bio: 'Former Google engineer with 15+ years of experience in education technology.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Education',
      image: assets.profile_img_2,
      bio: 'PhD in Computer Science, dedicated to making programming accessible to everyone.'
    },
    {
      name: 'Emma Williams',
      role: 'Lead Instructor',
      image: assets.profile_img_3,
      bio: 'Full-stack developer and educator with expertise in modern web technologies.'
    }
  ];

  const partners = [
    { name: 'Microsoft', logo: assets.microsoft_logo },
    { name: 'Adobe', logo: assets.adobe_logo },
    { name: 'Accenture', logo: assets.accenture_logo },
    { name: 'Walmart', logo: assets.walmart_logo }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering the Next Generation of Developers
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to provide high-quality, accessible programming education
            to learners worldwide. Our platform combines expert instruction with
            hands-on practice to ensure your success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-blue-600 mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted By Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We believe that quality education should be accessible to everyone. Our platform
            is designed to break down barriers to entry in the tech industry by providing:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert-Led Instruction
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hands-On Learning
              </h3>
              <p className="text-gray-600">
                Practice with real projects and build your portfolio as you learn.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Support
              </h3>
              <p className="text-gray-600">
                Join a thriving community of learners and mentors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
