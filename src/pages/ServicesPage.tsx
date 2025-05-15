import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your development process?",
      answer:
        "Our development process follows an agile methodology with 5 key phases: Discovery, Planning, Development, Testing, and Deployment. We maintain transparent communication throughout the project lifecycle with regular updates and milestone reviews.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
    },
    {
      question: "What pricing models do you offer?",
      answer:
        "We offer several pricing models including fixed-price quotes for well-defined projects, time and materials billing for evolving projects, and retainer agreements for ongoing support and maintenance. We'll recommend the best approach based on your project needs.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions remain secure, up-to-date, and optimized for performance. Our support plans include regular updates, security monitoring, and technical assistance.",
    },
    {
      question: "Which technologies do you specialize in?",
      answer:
        "We specialize in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, .NET, iOS/Android native development, React Native, Flutter, AWS, Azure, Google Cloud, and more. We select the best technology stack based on your specific project requirements.",
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors cursor-pointer whitespace-nowrap"
          >
            Home
          </Link>
          <i className="fas fa-chevron-right text-xs mx-2"></i>
          <span className="text-blue-500">Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%2520tech%2520workspace%2520with%2520blue%2520gradient%2520lighting%252C%2520digital%2520connections%2520visualization%252C%2520abstract%2520technology%2520elements%252C%2520professional%2520atmosphere%252C%2520clean%2520minimalist%2520design%252C%2520soft%2520lighting%2520on%2520left%2520side%2520for%2520text%2520readability%252C%2520high-resolution%2520digital%2520art&width=1440&height=600&seq=services-hero-bg&orientation=landscape"
            alt="Digital Services"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-32 md:py-40 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Comprehensive Digital{" "}
              <span className="text-blue-300">Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              From concept to deployment, we deliver end-to-end digital
              solutions tailored to your unique business challenges and
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of digital services designed to
              help businesses innovate, grow, and succeed in today's competitive
              landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=web%2520development%2520concept%2520with%2520code%2520on%2520screen%252C%2520modern%2520workspace%2520with%2520blue%2520accent%2520lighting%252C%2520digital%2520design%2520elements%252C%2520clean%2520minimalist%2520setup%252C%2520professional%2520development%2520environment%252C%2520high-resolution%2520digital%2520art&width=600&height=400&seq=service-web&orientation=landscape"
                  alt="Web Development"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-code text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Web Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Custom websites and web applications built with the latest
                  technologies to deliver exceptional user experiences.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Angular
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Vue.js
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=mobile%2520app%2520development%2520concept%2520with%2520smartphone%2520mockups%252C%2520modern%2520workspace%2520with%2520blue%2520accent%2520lighting%252C%2520digital%2520design%2520elements%252C%2520clean%2520minimalist%2520setup%252C%2520professional%2520development%2520environment%252C%2520high-resolution%2520digital%2520art&width=600&height=400&seq=service-mobile&orientation=landscape"
                  alt="Mobile App Development"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-mobile-alt text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Mobile App Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile applications designed to
                  engage users and drive business growth.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      iOS/Swift
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Android/Kotlin
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      React Native
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Flutter
                    </span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=cloud%2520computing%2520concept%2520with%2520server%2520visualization%2520and%2520digital%2520connections%252C%2520modern%2520workspace%2520with%2520blue%2520accent%2520lighting%252C%2520digital%2520design%2520elements%252C%2520clean%2520minimalist%2520setup%252C%2520professional%2520IT%2520environment%252C%2520high-resolution%2520digital%2520art&width=600&height=400&seq=service-cloud&orientation=landscape"
                  alt="Cloud Solutions"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-cloud text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Cloud Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Scalable cloud infrastructure and services to optimize
                  performance, security, and cost-efficiency.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      AWS
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Azure
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Google Cloud
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Kubernetes
                    </span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=UI%2520UX%2520design%2520concept%2520with%2520wireframes%2520and%2520color%2520palettes%252C%2520modern%2520workspace%2520with%2520blue%2520accent%2520lighting%252C%2520digital%2520design%2520elements%252C%2520clean%2520minimalist%2520setup%252C%2520professional%2520design%2520environment%252C%2520high-resolution%2520digital%2520art&width=600&height=400&seq=service-uiux&orientation=landscape"
                  alt="UI/UX Design"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-paint-brush text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">UI/UX Design</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  User-centered design solutions that enhance usability,
                  accessibility, and overall user satisfaction.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Figma
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Adobe XD
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Sketch
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      InVision
                    </span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=digital%2520strategy%2520concept%2520with%2520analytics%2520dashboards%2520and%2520growth%2520charts%252C%2520modern%2520workspace%2520with%2520blue%2520accent%2520lighting%252C%2520digital%2520design%2520elements%252C%2520clean%2520minimalist%2520setup%252C%2520professional%2520business%2520environment%252C%2520high-resolution%2520digital%2520art&width=600&height=400&seq=service-strategy&orientation=landscape"
                  alt="Digital Strategy"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-chart-line text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Digital Strategy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Data-driven strategic planning to maximize your digital
                  presence and achieve measurable business outcomes.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Market Analysis
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      SEO
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Analytics
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Growth Hacking
                    </span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=IT%2520consulting%2520concept%2520with%2520business%2520professionals%2520in%2520meeting%252C%2520modern%2520workspace%2520with%2520blue%2520accent%2520lighting%252C%2520digital%2520design%2520elements%252C%2520clean%2520minimalist%2520setup%252C%2520professional%2520consulting%2520environment%252C%2520high-resolution%2520digital%2520art&width=600&height=400&seq=service-consulting&orientation=landscape"
                  alt="IT Consulting"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-lightbulb text-blue-500 text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">IT Consulting</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Expert guidance on technology selection, implementation, and
                  optimization to solve complex business challenges.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Specializations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Digital Transformation
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Tech Stack Optimization
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      Security
                    </span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, collaborative approach to ensure your
              project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>

            <div className="relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    Discovery
                  </h3>
                  <p className="text-gray-600">
  We begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research.
</p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    Planning
                  </h3>
                  <p className="text-gray-600">
                    We create a detailed project plan including timelines,
                    milestones, resource allocation, and technology selection
                    tailored to your needs.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    Development
                  </h3>
                  <p className="text-gray-600">
                    Our expert team builds your solution using agile
                    methodologies with regular sprints, reviews, and transparent
                    progress updates.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    Testing & QA
                  </h3>
                  <p className="text-gray-600">
                    We conduct rigorous testing including functionality,
                    performance, security, and user acceptance to ensure a
                    flawless final product.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">
                    Deployment & Support
                  </h3>
                  <p className="text-gray-600">
                    We handle the launch process and provide ongoing
                    maintenance, support, and optimization to ensure long-term
                    success.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and tools to build robust,
              scalable, and future-proof digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {/* Technology Icons */}
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-react text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">React</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-angular text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Angular</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-vuejs text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Vue.js</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-node-js text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-python text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Python</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-php text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">PHP</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-swift text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Swift</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-android text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Android</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-aws text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-microsoft text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Azure</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-google text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all text-center">
              <i className="fab fa-docker text-4xl text-blue-500 mb-3"></i>
              <span className="font-medium">Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped businesses across various industries
              achieve their digital goals.
            </p>
          </div>

          {/* Case Study Tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors ${
                activeTab === "web"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors ${
                activeTab === "mobile"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-6 py-2 mx-2 mb-3 rounded-button cursor-pointer whitespace-nowrap transition-colors ${
                activeTab === "cloud"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Cloud Solutions
            </button>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=e-commerce%2520website%2520on%2520multiple%2520devices%252C%2520professional%2520product%2520display%252C%2520modern%2520design%2520with%2520blue%2520accent%2520colors%252C%2520clean%2520minimalist%2520layout%252C%2520high-quality%2520digital%2520mockup&width=600&height=400&seq=case-study-1&orientation=landscape"
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Web Development
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  LuxeMarket E-commerce Platform
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Retail & E-commerce
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Challenge:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Create a high-performance e-commerce platform capable of
                    handling 10,000+ products with advanced filtering and
                    personalization.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                  <p className="text-gray-600 text-sm">
                    Custom React frontend with Node.js backend, ElasticSearch
                    for product search, and AWS infrastructure for scalability.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-1">Results:</h4>
                  <p className="text-gray-600 text-sm">
                    42% increase in conversion rate, 65% faster page load times,
                    and 28% growth in average order value.
                  </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  View Case Study
                </button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=fitness%2520mobile%2520app%2520on%2520smartphone%252C%2520workout%2520tracking%2520interface%252C%2520modern%2520UI%2520with%2520blue%2520accents%252C%2520health%2520metrics%2520visualization%252C%2520clean%2520minimalist%2520design%252C%2520high-quality%2520digital%2520mockup&width=600&height=400&seq=case-study-2&orientation=landscape"
                  alt="Fitness App"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Mobile App
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  FitTrack Mobile Application
                </h3>
                <p className="text-gray-600 text-sm mb-4">Health & Fitness</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Challenge:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Develop a comprehensive fitness tracking app with social
                    features, workout plans, and real-time progress analytics.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                  <p className="text-gray-600 text-sm">
                    React Native cross-platform app with Firebase backend,
                    real-time data synchronization, and machine learning for
                    personalized recommendations.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-1">Results:</h4>
                  <p className="text-gray-600 text-sm">
                    500,000+ downloads in first year, 4.8/5 average app store
                    rating, and 72% user retention rate after 3 months.
                  </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  View Case Study
                </button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=cloud-based%2520CRM%2520dashboard%2520on%2520multiple%2520devices%252C%2520data%2520visualization%252C%2520analytics%2520interface%2520with%2520blue%2520accent%2520colors%252C%2520modern%2520business%2520application%252C%2520clean%2520minimalist%2520design%252C%2520high-quality%2520digital%2520mockup&width=600&height=400&seq=case-study-3&orientation=landscape"
                  alt="CRM System"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Cloud Solution
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  NexaCRM Cloud Platform
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Financial Services
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Challenge:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Migrate legacy CRM system to a scalable cloud platform with
                    enhanced security, analytics, and integration capabilities.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                  <p className="text-gray-600 text-sm">
                    Microservices architecture on AWS, containerized with
                    Kubernetes, Angular frontend, and comprehensive API layer
                    for third-party integrations.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-1">Results:</h4>
                  <p className="text-gray-600 text-sm">
                    60% reduction in operational costs, 99.99% uptime, 35%
                    increase in team productivity, and SOC 2 compliance
                    achievement.
                  </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                  View Case Study
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and
              delivery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer whitespace-nowrap"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <i
                    className={`fas ${
                      activeFaq === index
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    } text-blue-500`}
                  ></i>
                </button>
                <div
                  className={`px-5 pb-5 ${
                    activeFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Let's discuss how we can help you achieve your business goals
                  with our comprehensive digital services.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg focus:outline-none border-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-lg focus:outline-none border-none"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none border-none"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg focus:outline-none border-none appearance-none bg-white text-gray-500">
                      <option value="">Select Service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="strategy">Digital Strategy</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Project Details"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none border-none"
                    ></textarea>
                  </div>
                  <div>
                    <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">
                      Schedule Consultation
                    </button>
                  </div>
                </form>
              </div>
              <div className="lg:w-1/2 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=business%2520professionals%2520in%2520meeting%2520discussing%2520digital%2520strategy%252C%2520modern%2520conference%2520room%2520with%2520blue%2520accent%2520lighting%252C%2520collaborative%2520workspace%252C%2520professional%2520atmosphere%252C%2520high-resolution%2520photography%2520style&width=700&height=700&seq=cta-services-image&orientation=squarish"
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

export default ServicesPage;

