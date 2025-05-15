import React, { useState } from 'react';
import Layout from '../components/Layout';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20responsive%20design%20elements%2C%20professional%20UI%20UX%20design%2C%20blue%20accent%20colors%2C%20high-quality%20digital%20mockup%20on%20neutral%20background&width=600&height=450&seq=101&orientation=landscape',
    description: 'A comprehensive e-commerce solution with advanced product filtering, secure payment processing, and customer analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    category: 'app',
    image: 'https://readdy.ai/api/search-image?query=financial%20dashboard%20interface%20with%20data%20visualization%2C%20charts%2C%20graphs%2C%20stock%20market%20analytics%2C%20investment%20portfolio%20tracking%2C%20dark%20blue%20theme%20with%20light%20data%20elements%2C%20professional%20fintech%20application%20design%20on%20neutral%20background&width=600&height=450&seq=102&orientation=landscape',
    description: 'Real-time financial analytics dashboard for investment tracking and portfolio management.',
    technologies: ['Vue.js', 'Python', 'D3.js', 'AWS']
  },
  {
    id: 3,
    title: 'Healthcare Management System',
    category: 'web',
    image: 'https://readdy.ai/api/search-image?query=healthcare%20management%20system%20interface%20with%20patient%20records%2C%20appointment%20scheduling%2C%20medical%20data%20visualization%2C%20clean%20clinical%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20medical%20software%20UI%20on%20neutral%20background&width=600&height=450&seq=103&orientation=landscape',
    description: 'Integrated healthcare platform for patient management, appointment scheduling, and medical record keeping.',
    technologies: ['Angular', 'Java Spring', 'PostgreSQL', 'Docker']
  },
  {
    id: 4,
    title: 'Smart Home Mobile App',
    category: 'app',
    image: 'https://readdy.ai/api/search-image?query=smart%20home%20mobile%20application%20interface%20with%20device%20control%20panels%2C%20home%20automation%20features%2C%20IoT%20connectivity%2C%20modern%20minimal%20design%2C%20blue%20accent%20colors%2C%20professional%20mobile%20UI%20design%20on%20smartphone%20mockup%20with%20neutral%20background&width=600&height=450&seq=104&orientation=landscape',
    description: 'IoT-enabled mobile application for controlling smart home devices and monitoring energy usage.',
    technologies: ['React Native', 'Firebase', 'IoT Protocols', 'Redux']
  },
  {
    id: 5,
    title: 'AI Content Generator',
    category: 'ai',
    image: 'https://readdy.ai/api/search-image?query=AI%20content%20generation%20platform%20interface%20with%20text%20editor%2C%20content%20suggestions%2C%20machine%20learning%20features%2C%20natural%20language%20processing%20tools%2C%20modern%20tech%20design%2C%20blue%20gradient%20theme%2C%20professional%20software%20UI%20on%20neutral%20background&width=600&height=450&seq=105&orientation=landscape',
    description: 'Advanced AI-powered platform for generating marketing content, blog posts, and social media updates.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'React']
  },
  {
    id: 6,
    title: 'Supply Chain Tracking System',
    category: 'blockchain',
    image: 'https://readdy.ai/api/search-image?query=supply%20chain%20management%20interface%20with%20blockchain%20tracking%20visualization%2C%20logistics%20monitoring%20dashboard%2C%20shipment%20tracking%2C%20distributed%20ledger%20technology%2C%20professional%20enterprise%20software%20design%2C%20blue%20technical%20theme%20on%20neutral%20background&width=600&height=450&seq=106&orientation=landscape',
    description: 'Blockchain-based solution for transparent supply chain management and product authenticity verification.',
    technologies: ['Ethereum', 'Solidity', 'React', 'Node.js']
  }
];

const testimonials = [
  {
    name: 'Jennifer Martinez',
    title: 'CTO, Global Retail Solutions',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20business%20executive%2C%2040s%2C%20confident%20expression%2C%20corporate%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20business%20leadership&width=100&height=100&seq=301&orientation=squarish',
    quote: 'Devantics transformed our outdated systems into a streamlined digital platform that has significantly improved our operational efficiency. Their team was professional, responsive, and delivered beyond our expectations.'
  },
  {
    name: 'Robert Johnson',
    title: 'Marketing Director, TechInnovate',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20marketing%20director%2C%2030s%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20marketing%20leadership&width=100&height=100&seq=302&orientation=squarish',
    quote: 'The AI solution developed by Devantics has revolutionized how we analyze customer data. We\'ve seen a 40% increase in conversion rates and significant improvements in customer satisfaction scores.'
  },
  {
    name: 'Thomas Williams',
    title: 'Operations Director, LogisticsPro',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20operations%20director%2C%2050s%2C%20thoughtful%20expression%2C%20formal%20business%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20logistics%20leadership&width=100&height=100&seq=303&orientation=squarish',
    quote: 'Working with Devantics on our blockchain supply chain solution was a game-changer. Their expertise in emerging technologies and commitment to understanding our unique challenges resulted in a solution that has set us apart from competitors.'
  }
];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/80 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20portfolio%20showcase%20with%20creative%20design%20elements%2C%20digital%20project%20displays%2C%20modern%20tech%20aesthetic%2C%20blue%20color%20scheme%20with%20subtle%20lighting%2C%20professional%20photography%20of%20creative%20workspace%2C%20high%20resolution%20image%20on%20neutral%20background&width=1440&height=500&seq=201&orientation=landscape"
            alt="Portfolio showcase"
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-blue-300">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Showcasing our innovative solutions and transformative digital experiences.
          </p>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
            Explore our diverse portfolio of projects spanning various industries and technologies. Each project represents our commitment to excellence and innovation.
          </p>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-6 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveFilter('app')}
              className={`px-6 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                activeFilter === 'app'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-6 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                activeFilter === 'ai'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              AI Solutions
            </button>
            <button
              onClick={() => setActiveFilter('blockchain')}
              className={`px-6 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                activeFilter === 'blockchain'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Blockchain
            </button>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-600">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="mt-2 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                    View Case Study
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Client Testimonials</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-16 text-center">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className={`fas ${idx === 2 ? 'fa-star-half-alt' : 'fa-star'}`}></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-16 text-center">
            We follow a structured yet flexible approach to ensure each project is delivered with excellence, on time, and within budget.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-700">
                We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.
              </p>
              <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-[calc(100%-24px)] h-0.5 bg-blue-200"></div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-700">
                Our team creates detailed project plans, wireframes, and technical specifications to guide the development process.
              </p>
              <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-[calc(100%-24px)] h-0.5 bg-blue-200"></div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-700">
                Our skilled developers bring the project to life using the latest technologies and best practices in software development.
              </p>
              <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-[calc(100%-24px)] h-0.5 bg-blue-200"></div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery & Support</h3>
              <p className="text-gray-700">
                After thorough testing, we deploy your solution and provide ongoing support and maintenance to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;