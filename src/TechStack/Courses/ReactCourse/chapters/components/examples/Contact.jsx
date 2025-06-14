import React from 'react';

const Contact = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Contact Us</h3>
      <p className="text-gray-600">
        This is the contact page content that was loaded dynamically. It shows how we can
        defer loading of less frequently accessed routes until they're needed.
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 bg-yellow-50 rounded">
          <h4 className="font-medium text-yellow-800 mb-2">Get in Touch</h4>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-yellow-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-700">Message</label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="p-4 bg-orange-50 rounded">
          <h4 className="font-medium text-orange-800 mb-2">Other Ways to Reach Us</h4>
          <ul className="space-y-2 text-sm text-orange-600">
            <li>Email: contact@example.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact; 