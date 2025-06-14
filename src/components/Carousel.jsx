import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation as SwiperNavigation, 
         Pagination as SwiperPagination, 
         Autoplay as SwiperAutoplay,
         EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FiUsers, FiTrendingUp } from 'react-icons/fi';

function Carousel() {
  const courses = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      image: '/images/javascript.jpg',
      description: 'Learn the basics of JavaScript programming',
      duration: '8 weeks',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Python for Beginners',
      image: '/images/python.jpg',
      description: 'Start your journey with Python',
      duration: '10 weeks',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Web Development',
      image: '/images/web-dev.jpg',
      description: 'Master modern web development',
      duration: '12 weeks',
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Data Structures',
      image: '/images/dsa.jpg',
      description: 'Understanding data structures and algorithms',
      duration: '10 weeks',
      level: 'Advanced'
    }
  ];

  const languages = [
    {
      id: 1,
      name: 'JavaScript',
      logo: require('../images/js.png'),
      users: '12M+ developers',
      trend: 'Most popular language for web development',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      id: 2,
      name: 'Python',
      logo: require('../images/python.png'),
      users: '8.2M+ developers',
      trend: 'Top choice for AI and Data Science',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 3,
      name: 'Java',
      logo: require('../images/java.png'),
      users: '9M+ developers',
      trend: 'Leading enterprise development language',
      color: 'from-red-400 to-red-500'
    },
    {
      id: 4,
      name: 'C++',
      logo: require('../images/cpp.png'),
      users: '5.4M+ developers',
      trend: 'Preferred for system programming',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      name: 'Ruby',
      logo: require('../images/ruby.png'),
      users: '3M+ developers',
      trend: 'Popular for web applications',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      name: 'SQL',
      logo: require('../images/sql.png'),
      users: '7M+ developers',
      trend: 'Essential for database management',
      color: 'from-orange-400 to-orange-500'
    },
    {
      id: 7,
      name: 'Dart',
      logo: require('../images/dart.png'),
      users: '2M+ developers',
      trend: 'Growing rapidly with Flutter framework',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 8,
      name: 'R',
      logo: require('../images/r.png'),
      users: '2.5M+ developers',
      trend: 'Popular for data analysis and statistics',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <div className="space-y-20 py-10">
      {/* Featured Courses Carousel */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl -z-10 blur-3xl"></div>
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-blue-600">Courses</span>
        </h2>
        <Swiper
          modules={[SwiperNavigation, SwiperPagination, SwiperAutoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600 font-medium">{course.duration}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popular Languages Grid */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl -z-10 blur-3xl"></div>
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular <span className="text-purple-600">Languages</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <div 
              key={lang.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                <div className="relative flex items-center justify-center h-24">
                  <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  <img
                    src={lang.logo}
                    alt={lang.name}
                    className="h-20 w-20 object-contain filter drop-shadow-md group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{lang.name}</h3>
                  <div className="flex items-center justify-center space-x-2 text-blue-600">
                    <FiUsers className="w-4 h-4" />
                    <p className="font-medium">{lang.users}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mt-2">
                    <FiTrendingUp className="w-4 h-4" />
                    <p className="text-sm">{lang.trend}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;