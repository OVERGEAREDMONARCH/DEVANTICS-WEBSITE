import React, { useState } from 'react';
import Layout from '../components/Layout';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software Development',
    category: 'artificial-intelligence',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20tech%20executive%20Asian%20woman%2040s%20wearing%20modern%20business%20attire%20intelligent%20expression%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=100&height=100&seq=401&orientation=squarish'
    },
    date: '2025-05-12',
    readTime: '8 min read',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise software development, from automated testing to intelligent code generation.',
    image: 'https://readdy.ai/api/search-image?query=futuristic%20artificial%20intelligence%20visualization%20with%20neural%20networks%2C%20modern%20tech%20elements%2C%20blue%20gradient%20background%2C%20professional%20enterprise%20software%20development%20concept%2C%20high%20quality%20digital%20art&width=800&height=400&seq=402&orientation=landscape',
    featured: true
  },
  {
    id: 2,
    title: 'Building Scalable Microservices Architecture',
    category: 'development',
    author: {
      name: 'James Wilson',
      role: 'Lead Architect',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20software%20architect%20African%20American%2030s%20wearing%20smart%20casual%20attire%20confident%20expression%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=100&height=100&seq=403&orientation=squarish'
    },
    date: '2025-05-10',
    readTime: '6 min read',
    excerpt: 'Learn best practices for designing and implementing scalable microservices architecture in modern cloud environments.',
    image: 'https://readdy.ai/api/search-image?query=complex%20system%20architecture%20diagram%20visualization%2C%20modern%20tech%20infrastructure%20design%2C%20blue%20and%20white%20professional%20scheme%2C%20enterprise%20software%20concept%2C%20high%20quality%20digital%20illustration&width=800&height=400&seq=404&orientation=landscape'
  },
  {
    id: 3,
    title: 'Blockchain Technology in Supply Chain Management',
    category: 'blockchain',
    author: {
      name: 'Maria Rodriguez',
      role: 'Blockchain Specialist',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20blockchain%20expert%20Latin%20American%2035s%20wearing%20business%20casual%20attire%20warm%20smile%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=100&height=100&seq=405&orientation=squarish'
    },
    date: '2025-05-08',
    readTime: '7 min read',
    excerpt: 'Discover how blockchain technology is transforming supply chain management with enhanced transparency and security.',
    image: 'https://readdy.ai/api/search-image?query=blockchain%20technology%20visualization%20in%20supply%20chain%2C%20connected%20blocks%20with%20logistics%20elements%2C%20modern%20blue%20tech%20aesthetic%2C%20professional%20enterprise%20concept%2C%20high%20quality%20digital%20art&width=800&height=400&seq=406&orientation=landscape'
  },
  {
    id: 4,
    title: 'UX Design Trends for Enterprise Applications',
    category: 'design',
    author: {
      name: 'Alex Thompson',
      role: 'UX Design Lead',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20gender%20neutral%20UX%20designer%2020s%20wearing%20creative%20professional%20attire%20artistic%20expression%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=100&height=100&seq=407&orientation=squarish'
    },
    date: '2025-05-06',
    readTime: '5 min read',
    excerpt: 'Stay ahead of the curve with the latest UX design trends shaping the future of enterprise applications.',
    image: 'https://readdy.ai/api/search-image?query=modern%20UX%20design%20interface%20elements%2C%20creative%20workspace%20with%20wireframes%2C%20blue%20accent%20colors%2C%20professional%20design%20workflow%2C%20high%20quality%20digital%20workspace%20visualization&width=800&height=400&seq=408&orientation=landscape'
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for Cloud Applications',
    category: 'security',
    author: {
      name: 'Michael Chang',
      role: 'Security Engineer',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20cybersecurity%20expert%20Asian%2030s%20wearing%20professional%20attire%20serious%20expression%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=100&height=100&seq=409&orientation=squarish'
    },
    date: '2025-05-04',
    readTime: '9 min read',
    excerpt: 'Essential cybersecurity practices to protect your cloud applications from emerging threats and vulnerabilities.',
    image: 'https://readdy.ai/api/search-image?query=cybersecurity%20concept%20visualization%2C%20shield%20protection%20over%20cloud%20infrastructure%2C%20blue%20technology%20theme%2C%20professional%20security%20illustration%2C%20high%20quality%20digital%20art&width=800&height=400&seq=410&orientation=landscape'
  },
  {
    id: 6,
    title: 'The Rise of Edge Computing in IoT',
    category: 'technology',
    author: {
      name: 'Emma Davis',
      role: 'IoT Solutions Architect',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20IoT%20expert%20Caucasian%2040s%20wearing%20smart%20professional%20attire%20friendly%20expression%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=100&height=100&seq=411&orientation=squarish'
    },
    date: '2025-05-02',
    readTime: '7 min read',
    excerpt: 'Understanding the impact of edge computing on IoT applications and real-time data processing.',
    image: 'https://readdy.ai/api/search-image?query=edge%20computing%20and%20IoT%20network%20visualization%2C%20connected%20devices%20architecture%2C%20modern%20blue%20tech%20aesthetic%2C%20professional%20enterprise%20concept%2C%20high%20quality%20digital%20illustration&width=800&height=400&seq=412&orientation=landscape'
  }
];

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'artificial-intelligence', name: 'AI & ML' },
  { id: 'development', name: 'Development' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'design', name: 'Design' },
  { id: 'security', name: 'Security' },
  { id: 'technology', name: 'Technology' }
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post =>
    activeCategory === 'all' || post.category === activeCategory
  );

  const featuredPost = blogPosts.find(post => post.featured);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/80 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20tech%20blog%20header%20with%20abstract%20digital%20elements%2C%20professional%20content%20creation%20workspace%2C%20blue%20accent%20lighting%2C%20high%20end%20editorial%20photography%2C%20neutral%20background&width=1440&height=400&seq=413&orientation=landscape"
            alt="Blog header"
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & <span className="text-blue-300">Perspectives</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Expert analysis and thought leadership on enterprise technology and innovation
          </p>
        </div>
      </section>

      {/* Categories only, search removed */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'all' && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-[400px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8">
                  <span className="text-blue-600 font-medium mb-2 block">Featured Post</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center mb-6">
                    <img
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{featuredPost.author.name}</h4>
                      <p className="text-sm text-gray-600">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{formatDate(featuredPost.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{post.author.name}</h4>
                      <p className="text-sm text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center whitespace-nowrap">
                    Read More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
