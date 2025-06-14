const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { protect, restrictTo } = require('../middleware/auth');

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/:slug', blogController.getBlog);

// Protected routes
router.use(protect);
router.post('/', restrictTo('admin', 'instructor'), blogController.createBlog);
router.patch('/:id', restrictTo('admin', 'instructor'), blogController.updateBlog);
router.delete('/:id', restrictTo('admin', 'instructor'), blogController.deleteBlog);
router.post('/:id/like', blogController.toggleLike);
router.post('/:id/comments', blogController.addComment);

module.exports = router; 