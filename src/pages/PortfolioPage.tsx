import React from 'react';
import Layout from '../components/Layout';

const projects = [
  {
    title: 'LuxeMarket E-commerce',
    type: 'Web Development',
    image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20on%20laptop%20and%20mobile%20devices%2C%20professional%20product%20photography%2C%20clean%20design%20with%20blue%20accents%2C%20minimalist%20product%20display%2C%20high-quality%20digital%20mockup&width=600&height=400&seq=portfolio-1&orientation=landscape',
    description: 'A premium e-commerce platform with advanced product filtering, secure payment processing, and personalized recommendations.'
  },
  {
    title: 'FitTrack Mobile App',
    type: 'Mobile App',
    image: 'https://readdy.ai/api/search-image?query=fitness%20mobile%20app%20on%20smartphone%2C%20workout%20tracking%20interface%2C%20modern%20UI%20with%20blue%20accents%2C%20health%20metrics%20visualization%2C%20clean%20minimalist%20design%2C%20high-quality%20digital%20mockup&width=600&height=400&seq=portfolio-2&orientation=landscape',
    description: 'A comprehensive fitness tracking application with workout plans, progress analytics, and social community features.'
  },
  {
    title: 'NexaCRM Cloud Solution',
    type: 'Cloud Solution',
    image: 'https://readdy.ai/api/search-image?query=cloud-based%20CRM%20dashboard%20on%20multiple%20devices%2C%20data%20visualization%2C%20analytics%20interface%20with%20blue%20accent%20colors%2C%20modern%20business%20application%2C%20clean%20minimalist%20design%2C%20high-quality%20digital%20mockup&width=600&height=400&seq=portfolio-3&orientation=landscape',
    description: 'A scalable CRM system with advanced analytics, automation, and integration capabilities.'
  }
];

const PortfolioPage: React.FC = () => (
  <Layout>
    <section className="relative py-20 bg-gradient-to-r from-blue-900/80 to-blue-600/60">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Explore our recent projects and see how we help businesses achieve their digital goals.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform hover:scale-105">
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default PortfolioPage;