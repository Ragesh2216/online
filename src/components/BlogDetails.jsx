import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-gray-900">Details</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Blog Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Discovery incommode earnestly no he commanded
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📅</span>
                  <span>July 31, 2021</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">💬</span>
                  <span>2 Comments</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 flex items-center justify-center text-white text-4xl">
                🖼️
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                </p>

                <p className="mb-6">
                  New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                </p>

                <p className="mb-8">
                  Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity amiable pleased.
                </p>

                {/* Key Points */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-8 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Conduct replied off whether arrived adapted</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Pretty merits waited six</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>General few civilly amiable pleased account carried</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Continue indulged speaking</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Narrow formal length my highly</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Occasional pianoforte alteration unaffected impossible</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-6">
                  Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.
                </p>

                <p className="mb-6">
                  Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.
                </p>

                <p className="mb-8">
                  Excellent to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited better.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Analysis</span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Process</span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Software</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="text-left">
                <span className="text-gray-500 text-sm block mb-2">Previous Post</span>
                <Link to="#" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                  ← Analysis Process Software
                </Link>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm block mb-2">Next Post</span>
                <Link to="#" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                  Unsatiable entreaties may collecting Power →
                </Link>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">2 Comments</h2>
              <p className="text-gray-500 mb-8">Join the discussion</p>

              {/* Comment 1 */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">Jonathom Doe</h4>
                      <span className="text-gray-500 text-sm">July 31, 2021</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-3 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    SL
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">Spart Lee</h4>
                      <span className="text-gray-500 text-sm">July 31, 2021</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-3 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Leave a Comment</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Comment
                    </label>
                    <textarea
                      id="comment"
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Write your comment here..."
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-blue-600 transition-colors">
                  🔍
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm">
                      📝
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Recent Blog Post Title {item}
                      </h4>
                      <p className="text-gray-500 text-sm">July 31, 2021</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {['Technology', 'Business', 'Design', 'Development', 'Marketing'].map((category, index) => (
                  <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      {category}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;