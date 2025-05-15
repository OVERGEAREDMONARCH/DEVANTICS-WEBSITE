import React from 'react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://readdy.ai/api/search-image?query=modern%20tech%20company%20office%20with%20blue%20tones%2C%20professional%20workspace%20with%20glass%20walls%20and%20city%20view%2C%20corporate%20environment%2C%20sleek%20design%2C%20minimalist%20architecture%2C%20high-quality%20professional%20photography%2C%20ultra%20HD&width=1440&height=800&seq=1&orientation=landscape" 
              alt="Devantics company headquarters" 
              className="w-full h-full object-cover object-center mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-300">Devantics</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Pioneering digital transformation through innovative solutions and exceptional talent since 2015.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-16 text-center">
              Founded in 2015, Devantics has grown from a small team of passionate developers to a global technology leader. Our journey is defined by innovation, resilience, and an unwavering commitment to excellence.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=business%20growth%20chart%20with%20upward%20trend%2C%20professional%20visualization%20of%20company%20timeline%20with%20milestones%2C%20blue%20and%20white%20color%20scheme%2C%20clean%20modern%20design%2C%20data%20visualization%2C%20corporate%20growth%20illustration%2C%20high-quality%20professional%20graphics&width=600&height=600&seq=2&orientation=squarish" 
                  alt="Devantics growth timeline" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-blue-600 mt-1.5 mr-3"></i>
                    <div>
                      <span className="font-bold">2015:</span> Founded with a team of 5 developers in San Francisco
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-blue-600 mt-1.5 mr-3"></i>
                    <div>
                      <span className="font-bold">2017:</span> Launched our flagship enterprise solution with 10+ major clients
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-blue-600 mt-1.5 mr-3"></i>
                    <div>
                      <span className="font-bold">2019:</span> Expanded operations to Europe and Asia with 100+ team members
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-blue-600 mt-1.5 mr-3"></i>
                    <div>
                      <span className="font-bold">2021:</span> Secured Series B funding of $50M to accelerate growth
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-blue-600 mt-1.5 mr-3"></i>
                    <div>
                      <span className="font-bold">2023:</span> Recognized as industry leader with 500+ global clients
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-blue-600 mt-1.5 mr-3"></i>
                    <div>
                      <span className="font-bold">2025:</span> Celebrating 10 years of innovation with 1000+ team members worldwide
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-16 text-center">
              At Devantics, our core values guide everything we do. They shape our culture, inform our decisions, and drive our success.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push boundaries and embrace new technologies to create cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in the power of teamwork and foster an environment where diverse perspectives thrive.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We uphold the highest ethical standards and build relationships based on trust and transparency.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to delivering exceptional quality in everything we do, exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Meet the Team</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-16 text-center">
              Our success is driven by our talented team of professionals who bring diverse expertise and perspectives to every challenge.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20CEO%2C%2040s%2C%20confident%20expression%2C%20business%20suit%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20corporate%20leadership%2C%20professional%20lighting%2C%20studio%20quality&width=300&height=300&seq=3&orientation=squarish" 
                    alt="Michael Anderson" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Anderson</h3>
                <p className="text-blue-300 font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-700">
                  With over 20 years in tech leadership, Michael founded Devantics with a vision to transform how businesses leverage technology.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20CTO%2C%2030s%2C%20intelligent%20expression%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20tech%20leadership%2C%20professional%20lighting%2C%20studio%20quality&width=300&height=300&seq=4&orientation=squarish" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-blue-300 font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-700">
                  Sarah leads our technical strategy and innovation initiatives, bringing expertise from her background at leading tech companies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20COO%2C%20mid%2030s%2C%20diverse%20ethnicity%2C%20friendly%20smile%2C%20business%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20operations%20leadership%2C%20professional%20lighting%2C%20studio%20quality&width=300&height=300&seq=5&orientation=squarish" 
                    alt="David Chen" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">David Chen</h3>
                <p className="text-blue-300 font-medium mb-4">Chief Operations Officer</p>
                <p className="text-gray-700">
                  David oversees our global operations, ensuring seamless delivery of services and maintaining our high standards of excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20CMO%2C%20early%2040s%2C%20creative%20expression%2C%20stylish%20business%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20marketing%20leadership%2C%20professional%20lighting%2C%20studio%20quality&width=300&height=300&seq=6&orientation=squarish" 
                    alt="Emily Rodriguez" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emily Rodriguez</h3>
                <p className="text-blue-300 font-medium mb-4">Chief Marketing Officer</p>
                <p className="text-gray-700">
                  Emily drives our brand strategy and market presence, combining creativity with data-driven approaches to marketing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20CFO%2C%20late%2040s%2C%20trustworthy%20expression%2C%20formal%20business%20suit%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20financial%20leadership%2C%20professional%20lighting%2C%20studio%20quality&width=300&height=300&seq=7&orientation=squarish" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">James Wilson</h3>
                <p className="text-blue-300 font-medium mb-4">Chief Financial Officer</p>
                <p className="text-gray-700">
                  James manages our financial strategy and growth initiatives, bringing extensive experience from the technology and finance sectors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20HR%20Director%2C%20mid%2030s%2C%20approachable%20expression%2C%20smart%20casual%20attire%2C%20neutral%20background%2C%20high-quality%20portrait%20photography%2C%20HR%20leadership%2C%20professional%20lighting%2C%20studio%20quality&width=300&height=300&seq=8&orientation=squarish" 
                    alt="Olivia Park" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Olivia Park</h3>
                <p className="text-blue-300 font-medium mb-4">Director of Human Resources</p>
                <p className="text-gray-700">
                  Olivia leads our talent acquisition and development, fostering a culture of growth, diversity, and inclusion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;