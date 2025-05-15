import React from 'react';
import Layout from '../components/Layout';
import { useNavigate, Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-0 md:pt-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20tech%20workspace%20with%20blue%20gradient%20background%2C%20abstract%20digital%20elements%2C%20futuristic%20technology%20visualization%2C%20clean%20minimalist%20design%2C%20soft%20lighting%2C%20professional%20atmosphere%2C%20high-resolution%20digital%20art&width=1440&height=800&seq=hero-bg-1&orientation=landscape"
            alt="Digital Innovation"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Innovate. Collaborate. <span className="text-blue-300">Elevate.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              We transform your digital vision into reality with cutting-edge development solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors"
                onClick={() => navigate('/services')}
              >
                Start a Project
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive digital solutions to help businesses thrive in the modern tech landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=web%20development%20concept%20with%20code%20on%20screen%2C%20modern%20workspace%20with%20blue%20accent%20lighting%2C%20digital%20design%20elements%2C%20clean%20minimalist%20setup%2C%20professional%20development%20environment%2C%20high-resolution%20digital%20art&width=600&height=400&seq=service-1&orientation=landscape"
                  alt="Web Development"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-code text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Web Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.
                </p>
                <Link to="/services" className="text-blue-500 font-medium inline-flex items-center cursor-pointer whitespace-nowrap">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=mobile%20app%20development%20concept%20with%20smartphone%20mockups%2C%20modern%20workspace%20with%20blue%20accent%20lighting%2C%20digital%20design%20elements%2C%20clean%20minimalist%20setup%2C%20professional%20development%20environment%2C%20high-resolution%20digital%20art&width=600&height=400&seq=service-2&orientation=landscape"
                  alt="Mobile App Development"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-mobile-alt text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Mobile App Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile applications designed to engage users and drive business growth.
                </p>
                <Link to="/services" className="text-blue-500 font-medium inline-flex items-center cursor-pointer whitespace-nowrap">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=cloud%20computing%20concept%20with%20server%20racks%20and%20digital%20connections%2C%20modern%20workspace%20with%20blue%20accent%20lighting%2C%20digital%20design%20elements%2C%20clean%20minimalist%20setup%2C%20professional%20IT%20environment%2C%20high-resolution%20digital%20art&width=600&height=400&seq=service-3&orientation=landscape"
                  alt="Cloud Solutions"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-cloud text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Cloud Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Scalable cloud infrastructure and services to optimize performance, security, and cost-efficiency.
                </p>
                <Link to="/services" className="text-blue-500 font-medium inline-flex items-center cursor-pointer whitespace-nowrap">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Devantics is a team of passionate developers, designers, and digital strategists dedicated to creating innovative solutions that drive business success.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2018, we've helped over 200 businesses across various industries transform their digital presence and achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <i className="fas fa-lightbulb text-blue-500 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Innovation</h3>
                    <p className="text-gray-600">We embrace new technologies and creative approaches.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-users text-blue-500 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Collaboration</h3>
                    <p className="text-gray-600">We work closely with clients as true partners.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-chart-line text-blue-500 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Results</h3>
                    <p className="text-gray-600">We focus on delivering measurable outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-blue-500 text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quality</h3>
                    <p className="text-gray-600">We maintain the highest standards in all we do.</p>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
                Meet Our Team
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20professionals%20collaborating%20in%20modern%20tech%20office%20with%20blue%20accent%20lighting%2C%20digital%20design%20elements%2C%20clean%20minimalist%20workspace%2C%20professional%20development%20environment%2C%20high-resolution%20photography%20style&width=700&height=500&seq=about-team&orientation=landscape"
                  alt="Our Team"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold mb-2">7+</div>
                  <div className="text-sm uppercase tracking-wider">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
          {/* Portfolio Tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            <button
              className="px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors bg-blue-600 text-white"
            >
              All Projects
            </button>
            <button
              className="px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors bg-white text-gray-700 hover:bg-gray-100"
            >
              Web Development
            </button>
            <button
              className="px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors bg-white text-gray-700 hover:bg-gray-100"
            >
              Mobile Apps
            </button>
            <button
              className="px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors bg-white text-gray-700 hover:bg-gray-100"
            >
              Cloud Solutions
            </button>
          </div>
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20on%20laptop%20and%20mobile%20devices%2C%20professional%20product%20photography%2C%20clean%20design%20with%20blue%20accents%2C%20minimalist%20product%20display%2C%20high-quality%20digital%20mockup&width=600&height=400&seq=portfolio-1&orientation=landscape"
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">LuxeMarket E-commerce</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Web Development</span>
                </div>
                <p className="text-gray-600">
                  A premium e-commerce platform with advanced product filtering, secure payment processing, and personalized recommendations.
                </p>
              </div>
            </div>
            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=fitness%20mobile%20app%20on%20smartphone%2C%20workout%20tracking%20interface%2C%20modern%20UI%20with%20blue%20accents%2C%20health%20metrics%20visualization%2C%20clean%20minimalist%20design%2C%20high-quality%20digital%20mockup&width=600&height=400&seq=portfolio-2&orientation=landscape"
                  alt="Fitness App"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">FitTrack Mobile App</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Mobile App</span>
                </div>
                <p className="text-gray-600">
                  A comprehensive fitness tracking application with workout plans, progress analytics, and social community features.
                </p>
              </div>
            </div>
            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=cloud-based%20CRM%20dashboard%20on%20multiple%20devices%2C%20data%20visualization%2C%20analytics%20interface%20with%20blue%20accent%20colors%2C%20modern%20business%20application%2C%20clean%20minimalist%20design%2C%20high-quality%20digital%20mockup&width=600&height=400&seq=portfolio-3&orientation=landscape"
                  alt="CRM System"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">NexaCRM Cloud Solution</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Cloud Solution</span>
                </div>
                <p className="text-gray-600">
                  A scalable customer relationship management system with advanced analytics, automation, and integration capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Devantics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-300 mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-lg mb-6 italic">
                "Devantics transformed our outdated website into a modern, high-performing platform that has significantly increased our conversion rates and customer engagement."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold text-lg">SL</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Lewis</h4>
                  <p className="text-blue-200 text-sm">Marketing Director, TechVision Inc.</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-300 mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-lg mb-6 italic">
                "The mobile app developed by Devantics has been a game-changer for our business. Their attention to detail and user experience expertise is unmatched in the industry."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold text-lg">JM</span>
                </div>
                <div>
                  <h4 className="font-bold">James Miller</h4>
                  <p className="text-blue-200 text-sm">CEO, FitLife Solutions</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-300 mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-lg mb-6 italic">
                "Working with Devantics on our cloud infrastructure migration was seamless. Their expertise saved us time, money, and positioned us for future growth."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold text-lg">AR</span>
                </div>
                <div>
                  <h4 className="font-bold">Amanda Rodriguez</h4>
                  <p className="text-blue-200 text-sm">CTO, Global Commerce Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
                <p className="text-lg text-blue-100 mb-8">
                  Let's discuss how Devantics can help you achieve your business goals with innovative digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
                    Contact Us
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
                    Schedule a Call
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=business%20professionals%20in%20meeting%20discussing%20digital%20strategy%2C%20modern%20conference%20room%20with%20blue%20accent%20lighting%2C%20collaborative%20workspace%2C%20professional%20atmosphere%2C%20high-resolution%20photography%20style&width=700&height=500&seq=cta-image&orientation=landscape"
                  alt="Let's Collaborate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
