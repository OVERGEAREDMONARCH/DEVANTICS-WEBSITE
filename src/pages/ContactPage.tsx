import React, { useState } from 'react';
import Layout from '../components/Layout';

const officeLocations = [
  {
    city: 'San Francisco',
    address: '123 Tech Plaza, Suite 400',
    postalCode: 'CA 94105',
    phone: '+1 (415) 555-1234',
    email: 'sf@devantics.com',
    image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20in%20San%20Francisco%20with%20glass%20facade%2C%20contemporary%20architecture%2C%20professional%20corporate%20headquarters%2C%20blue%20sky%2C%20daytime%2C%20high%20quality%20architectural%20photography%20on%20neutral%20background&width=600&height=400&seq=501&orientation=landscape'
  },
  {
    city: 'New York',
    address: '456 Innovation Tower, 21st Floor',
    postalCode: 'NY 10001',
    phone: '+1 (212) 555-5678',
    email: 'nyc@devantics.com',
    image: 'https://readdy.ai/api/search-image?query=sleek%20New%20York%20City%20office%20building%20with%20modern%20design%2C%20Manhattan%20skyline%2C%20professional%20corporate%20headquarters%2C%20contemporary%20architecture%2C%20daytime%2C%20high%20quality%20architectural%20photography%20on%20neutral%20background&width=600&height=400&seq=502&orientation=landscape'
  },
  {
    city: 'London',
    address: '78 Tech Hub, Canary Wharf',
    postalCode: 'E14 5AB',
    phone: '+44 20 7946 0892',
    email: 'london@devantics.com',
    image: 'https://readdy.ai/api/search-image?query=modern%20London%20office%20building%20near%20Thames%20river%2C%20contemporary%20glass%20architecture%2C%20professional%20corporate%20headquarters%2C%20cloudy%20sky%2C%20daytime%2C%20high%20quality%20architectural%20photography%20on%20neutral%20background&width=600&height=400&seq=503&orientation=landscape'
  }
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitting(true);
      setTimeout(() => {
        setFormSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          subject: 'General Inquiry'
        });
        setTimeout(() => setFormSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/80 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20contact%20center%20with%20professional%20staff%2C%20customer%20service%20representatives%2C%20clean%20office%20environment%2C%20blue%20accent%20lighting%2C%20high-end%20corporate%20interior%2C%20communication%20technology%2C%20neutral%20background&width=1440&height=400&seq=504&orientation=landscape"
            alt="Contact us"
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-blue-300">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            We're here to answer your questions and discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700">
                Our offices are located in major tech hubs around the world
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700">
                Mon-Fri from 8am to 6pm <br />
                <a href="tel:+18005551234" className="text-blue-600 hover:text-blue-800 transition-colors">+1 (800) 555-1234</a>
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-700">
                For general inquiries: <br />
                <a href="mailto:info@devantics.com" className="text-blue-600 hover:text-blue-800 transition-colors">info@devantics.com</a>
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Global Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                  <div className="text-gray-700 mb-4">
                    <p>{office.address}</p>
                    <p>{office.postalCode}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-phone-alt text-blue-600 mr-3"></i>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-blue-600 mr-3"></i>
                    <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-blue-700 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
                <p className="mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mt-1 mr-3 text-blue-300"></i>
                      <span>Custom software development</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mt-1 mr-3 text-blue-300"></i>
                      <span>Mobile application development</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mt-1 mr-3 text-blue-300"></i>
                      <span>AI and machine learning solutions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mt-1 mr-3 text-blue-300"></i>
                      <span>Blockchain implementation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle mt-1 mr-3 text-blue-300"></i>
                      <span>UX/UI design services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                {formSubmitted ? (
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-600 mr-3 text-xl"></i>
                      <div>
                        <h3 className="font-bold">Thank you for your message!</h3>
                        <p>We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                          placeholder="John Doe"
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                          placeholder="john@example.com"
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Request">Project Request</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Career">Career Opportunity</option>
                        <option value="Support">Technical Support</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 !rounded-button whitespace-nowrap cursor-pointer disabled:opacity-70"
                    >
                      {formSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-circle-notch fa-spin mr-2"></i>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What types of projects do you specialize in?</h3>
              <p className="text-gray-700">
                We specialize in custom software development, mobile applications, AI solutions, blockchain implementation, and UX/UI design. Our team has expertise across various industries including healthcare, finance, retail, and logistics.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is your typical project timeline?</h3>
              <p className="text-gray-700">
                Project timelines vary depending on scope and complexity. Small to medium projects typically take 2-4 months, while larger enterprise solutions may take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer ongoing maintenance and support?</h3>
              <p className="text-gray-700">
                Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally. Our support includes bug fixes, security updates, performance optimization, and feature enhancements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you handle project pricing?</h3>
              <p className="text-gray-700">
                We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements. After understanding your project requirements, we'll recommend the most suitable pricing structure and provide a detailed proposal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you work with our existing development team?</h3>
              <p className="text-gray-700">
                Absolutely! We're experienced in collaborative development and can seamlessly integrate with your existing team. We can provide specialized expertise, augment your team's capabilities, or lead specific aspects of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Find Us</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-[500px] relative">
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src="https://readdy.ai/api/search-image?query=detailed%20world%20map%20with%20location%20pins%20marking%20global%20office%20locations%2C%20professional%20business%20cartography%2C%20blue%20color%20scheme%2C%20high%20quality%20digital%20illustration%20on%20neutral%20background&width=1200&height=500&seq=505&orientation=landscape" 
                alt="Global office locations map"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-map-marker-alt text-blue-600 text-xl mt-1 mr-3"></i>
                    <div>
                      <h3 className="font-bold text-gray-900">{office.city}</h3>
                      <p className="text-gray-700">{office.address}, {office.postalCode}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Contact us today to schedule a free consultation and discover how our solutions can drive your success.
            </p>
            <button className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;