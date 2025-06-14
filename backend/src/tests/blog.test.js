const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Blog = require('../models/Blog');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

describe('Blog Endpoints', () => {
  let token;
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Create a test user
    user = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      role: 'instructor'
    });
    
    token = generateToken(user._id);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Blog.deleteMany({});
  });

  describe('POST /api/blogs', () => {
    it('should create a new blog', async () => {
      const res = await request(app)
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Test Blog',
          content: 'Test content',
          summary: 'Test summary',
          category: 'Web Development',
          tags: ['javascript', 'react'],
          readTime: 5
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.status).toBe('success');
      expect(res.body.data.blog.title).toBe('Test Blog');
    });

    it('should not create blog without authentication', async () => {
      const res = await request(app)
        .post('/api/blogs')
        .send({
          title: 'Test Blog',
          content: 'Test content',
          summary: 'Test summary',
          category: 'Web Development',
          readTime: 5
        });

      expect(res.statusCode).toBe(401);
    });
  });

  describe('GET /api/blogs', () => {
    beforeEach(async () => {
      await Blog.create({
        title: 'Test Blog 1',
        content: 'Test content 1',
        summary: 'Test summary 1',
        category: 'Web Development',
        author: user._id,
        readTime: 5,
        status: 'published'
      });

      await Blog.create({
        title: 'Test Blog 2',
        content: 'Test content 2',
        summary: 'Test summary 2',
        category: 'Data Science',
        author: user._id,
        readTime: 7,
        status: 'published'
      });
    });

    it('should get all published blogs', async () => {
      const res = await request(app).get('/api/blogs');

      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.data.blogs.length).toBe(2);
    });

    it('should filter blogs by category', async () => {
      const res = await request(app)
        .get('/api/blogs')
        .query({ category: 'Web Development' });

      expect(res.statusCode).toBe(200);
      expect(res.body.data.blogs.length).toBe(1);
      expect(res.body.data.blogs[0].category).toBe('Web Development');
    });
  });

  describe('POST /api/blogs/:id/like', () => {
    let blog;

    beforeEach(async () => {
      blog = await Blog.create({
        title: 'Test Blog',
        content: 'Test content',
        summary: 'Test summary',
        category: 'Web Development',
        author: user._id,
        readTime: 5,
        status: 'published'
      });
    });

    it('should like a blog', async () => {
      const res = await request(app)
        .post(`/api/blogs/${blog._id}/like`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.data.isLiked).toBe(true);
      expect(res.body.data.likes).toBe(1);
    });

    it('should unlike a previously liked blog', async () => {
      // First like
      await request(app)
        .post(`/api/blogs/${blog._id}/like`)
        .set('Authorization', `Bearer ${token}`);

      // Then unlike
      const res = await request(app)
        .post(`/api/blogs/${blog._id}/like`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.data.isLiked).toBe(false);
      expect(res.body.data.likes).toBe(0);
    });
  });
}); 