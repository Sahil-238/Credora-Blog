import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation as SwiperNavigation, 
         Pagination as SwiperPagination, 
         Autoplay as SwiperAutoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel() {
  const courses = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      image: '/images/javascript.jpg',
      description: 'Learn the basics of JavaScript programming'
    },
    {
      id: 2,
      title: 'Python for Beginners',
      image: '/images/python.jpg',
      description: 'Start your journey with Python'
    },
    {
      id: 3,
      title: 'Web Development',
      image: '/images/web-dev.jpg',
      description: 'Master modern web development'
    },
    {
      id: 4,
      title: 'Data Structures',
      image: '/images/dsa.jpg',
      description: 'Understanding data structures and algorithms'
    }
  ];

  const languages = [
    {
      id: 1,
      name: 'JavaScript',
      logo: require('../images/js.png'),
      users: '12M+ developers',
      trend: 'Most popular language for web development'
    },
    {
      id: 2,
      name: 'Python',
      logo: require('../images/python.png'),
      users: '8.2M+ developers',
      trend: 'Top choice for AI and Data Science'
    },
    {
      id: 3,
      name: 'Java',
      logo: require('../images/java.png'),
      users: '9M+ developers',
      trend: 'Leading enterprise development language'
    },
    {
      id: 4,
      name: 'C++',
      logo: require('../images/cpp.png'),
      users: '5.4M+ developers',
      trend: 'Preferred for system programming'
    },
    {
      id: 5,
      name: 'Ruby',
      logo: require('../images/ruby.png'),
      users: '3M+ developers',
      trend: 'Popular for web applications'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Carousel Section */}
      <div>
        <Swiper
          modules={[SwiperNavigation, SwiperPagination, SwiperAutoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popular Languages Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Popular Programming Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <div 
              key={lang.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-center h-24">
                  <img
                    src={lang.logo}
                    alt={lang.name}
                    className="h-20 w-20 object-contain filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{lang.name}</h3>
                  <p className="text-blue-600 font-medium mt-1">{lang.users}</p>
                  <p className="text-gray-600 text-sm mt-2">{lang.trend}</p>
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