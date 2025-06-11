const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect, restrictTo } = require('../middleware/auth');

// Public routes
router.get('/', courseController.getAllCourses);
router.get('/:slug', courseController.getCourse);

// Protected routes
router.use(protect);
router.post('/', restrictTo('admin', 'instructor'), courseController.createCourse);
router.patch('/:id', restrictTo('admin', 'instructor'), courseController.updateCourse);
router.delete('/:id', restrictTo('admin', 'instructor'), courseController.deleteCourse);
router.post('/:id/reviews', courseController.addReview);
router.post('/:id/enroll', courseController.enrollCourse);

module.exports = router; 