import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Future of Online Learning in 2024",
      excerpt: "Discover how AI and VR are transforming digital education platforms.",
      category: "Trends",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Interactive Learning: Engaging Students Virtually",
      excerpt: "Techniques to keep students engaged during online sessions.",
      category: "Teaching",
      date: "Mar 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Best Tools for Online Education Platforms",
      excerpt: "A comprehensive review of essential tools for educators.",
      category: "Tools",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Accessibility in Digital Education",
      excerpt: "Making online learning inclusive for all students.",
      category: "Accessibility",
      date: "Feb 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Gamification Strategies for E-Learning",
      excerpt: "How game elements can boost learning outcomes.",
      category: "Engagement",
      date: "Feb 20, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Data Analytics in Education Technology",
      excerpt: "Using data to improve student performance and engagement.",
      category: "Analytics",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ]);

  const [categories] = useState([
    "All", "Trends", "Teaching", "Tools", "Accessibility", "Engagement", "Analytics"
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Filter posts by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => post.category === selectedCategory);
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, blogPosts]);

  // Initialize smooth scroll for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      // Check if it's an internal link
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.substring(1);
        scrollToSection(id);
      }
    };

    // Add click event to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-b from-blue-50 to-white">
     

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights on <span className="text-blue-600">Online Education</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Stay updated with the latest trends, tools, and strategies in digital learning
          </p>
          <button 
            onClick={() => scrollToSection('articles')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Explore Articles
          </button>
        </div>
      </header>

      {/* Featured Post */}
      <section id="featured" className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Featured
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Evolution of Virtual Classrooms
              </h3>
              <p className="text-gray-600 mb-6">
                How technology is reshaping traditional learning environments and creating 
                immersive educational experiences that bridge geographical gaps.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">JL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jessica Lee</p>
                    <p className="text-sm text-gray-500">Education Specialist</p>
                  </div>
                </div>
                <Link to="/404" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read Full Article →
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop"
                alt="Virtual Classroom"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                  <Link to="/404" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest articles and insights on online education delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Link 
                to="/404"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Subscribe
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;