import React, { useState } from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <section className="relative py-20 bg-gradient-to-r from-blue-900/80 to-blue-600/60">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Have a question or want to start a project? Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-button cursor-pointer whitespace-nowrap transition-colors w-full">Send Message</button>
              {submitted && <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">Thank you for reaching out! We'll be in touch soon.</div>}
            </form>
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h2>
                <p className="text-gray-700 mb-2">123 Innovation Drive, Tech City, CA 94043</p>
                <p className="text-gray-700 mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-700 mb-2">devantics01@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                <p className="text-gray-700">Mon - Fri: 9:00am - 6:00pm</p>
                <p className="text-gray-700">Sat - Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;