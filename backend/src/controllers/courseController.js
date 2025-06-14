const Course = require('../models/Course');

// Create course
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      instructor: req.user.id
    });

    res.status(201).json({
      status: 'success',
      data: {
        course
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const query = { isPublished: true };
    
    // Add filters
    if (req.query.category) query.category = req.query.category;
    if (req.query.level) query.level = req.query.level;
    if (req.query.price) query.price = { $lte: parseFloat(req.query.price) };
    
    // Add search
    if (req.query.search) {
      query.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const courses = await Course.find(query)
      .populate('instructor', 'username profilePicture')
      .sort('-createdAt');

    res.status(200).json({
      status: 'success',
      results: courses.length,
      data: {
        courses
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get single course
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({
      slug: req.params.slug,
      isPublished: true
    }).populate('instructor', 'username profilePicture bio');

    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        course
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      {
        _id: req.params.id,
        instructor: req.user.id
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found or you are not authorized to update it'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        course
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({
      _id: req.params.id,
      instructor: req.user.id
    });

    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found or you are not authorized to delete it'
      });
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Add review
exports.addReview = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }

    // Check if user is enrolled
    if (!course.enrolledStudents.includes(req.user.id)) {
      return res.status(403).json({
        status: 'fail',
        message: 'You must be enrolled in the course to leave a review'
      });
    }

    // Check if user has already reviewed
    const hasReviewed = course.reviews.some(review => 
      review.user.toString() === req.user.id
    );

    if (hasReviewed) {
      return res.status(400).json({
        status: 'fail',
        message: 'You have already reviewed this course'
      });
    }

    const review = {
      user: req.user.id,
      rating: req.body.rating,
      review: req.body.review
    };

    course.reviews.push(review);
    course.rating = course.calculateAverageRating();
    await course.save();

    res.status(201).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Enroll in course
exports.enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }

    if (course.enrolledStudents.includes(req.user.id)) {
      return res.status(400).json({
        status: 'fail',
        message: 'You are already enrolled in this course'
      });
    }

    course.enrolledStudents.push(req.user.id);
    await course.save();

    res.status(200).json({
      status: 'success',
      message: 'Successfully enrolled in the course'
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
}; 