import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiUser, FiClock, FiCalendar, FiHeart, FiBookmark } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogDetail = ({ blogs, onLike, onComment, onBookmark }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [editorState, setEditorState] = useState(null);

  useEffect(() => {
    if (blogs) {
      const currentBlog = blogs.find(b => b.id === parseInt(id));
      setBlog(currentBlog);
      
      if (currentBlog) {
        try {
          const contentState = convertFromRaw(JSON.parse(currentBlog.content));
          setEditorState(EditorState.createWithContent(contentState));
        } catch (error) {
          console.error('Error parsing blog content:', error);
          setEditorState(EditorState.createEmpty());
        }

        // Find related posts based on tags
        const related = blogs
          .filter(b => b.id !== currentBlog.id)
          .filter(b => b.tags.some(tag => currentBlog.tags.includes(tag)))
          .slice(0, 3);
        setRelatedPosts(related);
      }
      setIsLoading(false);
    }
  }, [id, blogs]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onComment(blog.id, {
        text: comment,
        author: 'Current User', // Replace with actual user
        date: new Date().toISOString()
      });
      setComment('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Skeleton height={400} className="mb-8" />
          <Skeleton height={40} className="mb-4" />
          <Skeleton count={3} className="mb-4" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 text-blue-600 hover:text-blue-700"
          >
            Return to blog list
          </button>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image */}
      <div className="w-full h-96 relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-600 bg-opacity-80 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <FiUser className="w-4 h-4 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FiClock className="w-4 h-4 mr-2" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-2" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {editorState && (
              <Editor
                editorState={editorState}
                onChange={() => {}}
                readOnly={true}
              />
            )}
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onLike(blog.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <FiHeart className={`w-5 h-5 ${blog.isLiked ? 'fill-current text-red-600' : ''}`} />
                <span>{blog.likes || 0} likes</span>
              </button>
              <button
                onClick={() => onBookmark(blog.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FiBookmark className={`w-5 h-5 ${blog.isBookmarked ? 'fill-current text-blue-600' : ''}`} />
                <span>Save</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <FacebookShareButton url={shareUrl} quote={blog.title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={blog.title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={blog.title}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="3"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Post Comment
              </button>
            </form>

            <div className="space-y-6">
              {blog.comments?.map((comment, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">{comment.author}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <article
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-2">{post.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail; 