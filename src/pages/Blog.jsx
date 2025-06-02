import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiCalendar, FiUser, FiClock, FiSearch, FiX } from 'react-icons/fi';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Select from 'react-select';
import '../styles/Editor.css';

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'React is a powerful JavaScript library for building user interfaces...',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min',
      category: 'Frontend Development',
      tags: ['React', 'JavaScript', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      likes: 24,
      comments: []
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const editor = useRef(null);

  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    image: ''
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const categories = [
    { value: 'Frontend Development', label: 'Frontend Development' },
    { value: 'Backend Development', label: 'Backend Development' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Data Science', label: 'Data Science' }
  ];

  const popularTags = [
    { value: 'React', label: 'React' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'AI', label: 'AI' },
    { value: 'Web Development', label: 'Web Development' }
  ];

  const focusEditor = () => {
    if (editor.current) {
      editor.current.focus();
    }
  };

  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }, [editorState]);

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(contentState));
    
    const newBlogPost = {
      id: blogs.length + 1,
      ...newBlog,
      content,
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(contentState.getPlainText().split(' ').length / 200)} min`,
      category: selectedCategory.value,
      tags: selectedTags.map(tag => tag.value),
      likes: 0,
      comments: []
    };
    setBlogs(prev => [...prev, newBlogPost]);
    setNewBlog({
      title: '',
      content: '',
      author: '',
      category: '',
      tags: '',
      image: ''
    });
    setEditorState(EditorState.createEmpty());
    setSelectedCategory(null);
    setSelectedTags([]);
    setShowAddForm(false);
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || blog.category === selectedCategory.value;
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => blog.tags.includes(tag.value));
    return matchesSearch && matchesCategory && matchesTags;
  });

  const handleLike = (blogId) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === blogId ? { ...blog, likes: (blog.likes || 0) + 1 } : blog
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Credora Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the latest insights, tutorials, and updates from our community of developers.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>
          <div className="w-full md:w-48">
            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categories}
              placeholder="Category"
              isClearable
              className="text-sm"
            />
          </div>
          <div className="w-full md:w-72">
            <Select
              value={selectedTags}
              onChange={setSelectedTags}
              options={popularTags}
              placeholder="Filter by tags"
              isMulti
              className="text-sm"
            />
          </div>
        </div>

        {/* Add Blog Button */}
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-300"
        >
          <FiPlus className="w-5 h-5" />
          <span>Add New Blog</span>
        </button>
      </div>

      {/* Add Blog Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add New Blog Post</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newBlog.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={newBlog.author}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    options={categories}
                    placeholder="Select category"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <Select
                    value={selectedTags}
                    onChange={setSelectedTags}
                    options={popularTags}
                    isMulti
                    placeholder="Select tags"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={newBlog.image}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <div className="editor-toolbar">
                  <button
                    onClick={onBoldClick}
                    className={`toolbar-button ${editorState.getCurrentInlineStyle().has('BOLD') ? 'active' : ''}`}
                    type="button"
                  >
                    Bold
                  </button>
                  <button
                    onClick={onItalicClick}
                    className={`toolbar-button ${editorState.getCurrentInlineStyle().has('ITALIC') ? 'active' : ''}`}
                    type="button"
                  >
                    Italic
                  </button>
                  <button
                    onClick={onUnderlineClick}
                    className={`toolbar-button ${editorState.getCurrentInlineStyle().has('UNDERLINE') ? 'active' : ''}`}
                    type="button"
                  >
                    Underline
                  </button>
                </div>
                <div 
                  className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                  onClick={focusEditor}
                >
                  <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={setEditorState}
                    handleKeyCommand={handleKeyCommand}
                    placeholder="Write your blog post here..."
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">No blogs found matching your criteria</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content.replace(/<[^>]*>/g, '')}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <FiUser className="w-4 h-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="w-4 h-4 mr-1" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog; 