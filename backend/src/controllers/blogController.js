const Blog = require('../models/Blog');

// Create blog
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      ...req.body,
      author: req.user.id
    });

    res.status(201).json({
      status: 'success',
      data: {
        blog
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const query = { status: 'published' };
    
    // Add filters
    if (req.query.category) query.category = req.query.category;
    if (req.query.tags) query.tags = { $in: req.query.tags.split(',') };
    
    // Add search
    if (req.query.search) {
      query.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { content: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const blogs = await Blog.find(query)
      .populate('author', 'username profilePicture')
      .sort('-createdAt');

    res.status(200).json({
      status: 'success',
      results: blogs.length,
      data: {
        blogs
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get single blog
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      status: 'published'
    }).populate('author', 'username profilePicture bio');

    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        blog
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      {
        _id: req.params.id,
        author: req.user.id
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog not found or you are not authorized to update it'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        blog
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      author: req.user.id
    });

    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog not found or you are not authorized to delete it'
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

// Like/Unlike blog
exports.toggleLike = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog not found'
      });
    }

    const likeIndex = blog.likes.indexOf(req.user.id);
    if (likeIndex > -1) {
      // Unlike
      blog.likes.splice(likeIndex, 1);
    } else {
      // Like
      blog.likes.push(req.user.id);
    }

    await blog.save();

    res.status(200).json({
      status: 'success',
      data: {
        likes: blog.likes.length,
        isLiked: likeIndex === -1
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Add comment
exports.addComment = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog not found'
      });
    }

    const comment = {
      user: req.user.id,
      content: req.body.content
    };

    blog.comments.push(comment);
    await blog.save();

    res.status(201).json({
      status: 'success',
      data: {
        comment
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
}; 