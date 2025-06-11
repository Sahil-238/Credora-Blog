const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Course = require('../models/Course');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

describe('Course Endpoints', () => {
  let token;
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Create a test instructor
    user = await User.create({
      username: 'instructor',
      email: 'instructor@example.com',
      password: 'password123',
      role: 'instructor'
    });
    
    token = generateToken(user._id);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Course.deleteMany({});
  });

  describe('POST /api/courses', () => {
    it('should create a new course', async () => {
      const res = await request(app)
        .post('/api/courses')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Test Course',
          description: 'Test description',
          category: 'JavaScript',
          level: 'beginner',
          topics: [
            { title: 'Introduction', content: 'Welcome to the course', order: 1 }
          ],
          duration: 120,
          price: 99.99
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.status).toBe('success');
      expect(res.body.data.course.title).toBe('Test Course');
    });

    it('should not create course without authentication', async () => {
      const res = await request(app)
        .post('/api/courses')
        .send({
          title: 'Test Course',
          description: 'Test description',
          category: 'JavaScript',
          level: 'beginner',
          duration: 120
        });

      expect(res.statusCode).toBe(401);
    });
  });

  describe('GET /api/courses', () => {
    beforeEach(async () => {
      await Course.create({
        title: 'JavaScript Basics',
        description: 'Learn JavaScript fundamentals',
        category: 'JavaScript',
        level: 'beginner',
        instructor: user._id,
        duration: 120,
        isPublished: true,
        topics: [
          { title: 'Introduction', content: 'Welcome', order: 1 }
        ]
      });

      await Course.create({
        title: 'Advanced React',
        description: 'Master React concepts',
        category: 'React',
        level: 'advanced',
        instructor: user._id,
        duration: 180,
        isPublished: true,
        topics: [
          { title: 'Introduction', content: 'Welcome', order: 1 }
        ]
      });
    });

    it('should get all published courses', async () => {
      const res = await request(app).get('/api/courses');

      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data.courses.length).toBe(2);
    });

    it('should filter courses by category', async () => {
      const res = await request(app)
        .get('/api/courses')
        .query({ category: 'JavaScript' });

      expect(res.statusCode).toBe(200);
      expect(res.body.data.courses.length).toBe(1);
      expect(res.body.data.courses[0].category).toBe('JavaScript');
    });
  });

  describe('POST /api/courses/:id/enroll', () => {
    let course;
    let studentToken;

    beforeEach(async () => {
      // Create a course
      course = await Course.create({
        title: 'Test Course',
        description: 'Test description',
        category: 'JavaScript',
        level: 'beginner',
        instructor: user._id,
        duration: 120,
        isPublished: true,
        topics: [
          { title: 'Introduction', content: 'Welcome', order: 1 }
        ]
      });

      // Create a student
      const student = await User.create({
        username: 'student',
        email: 'student@example.com',
        password: 'password123',
        role: 'user'
      });
      
      studentToken = generateToken(student._id);
    });

    it('should enroll in a course', async () => {
      const res = await request(app)
        .post(`/api/courses/${course._id}/enroll`)
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.message).toBe('Successfully enrolled in the course');
    });

    it('should not allow duplicate enrollment', async () => {
      // First enrollment
      await request(app)
        .post(`/api/courses/${course._id}/enroll`)
        .set('Authorization', `Bearer ${studentToken}`);

      // Second enrollment attempt
      const res = await request(app)
        .post(`/api/courses/${course._id}/enroll`)
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.statusCode).toBe(400);
      expect(res.body.status).toBe('fail');
    });
  });
}); 