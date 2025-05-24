
import React from 'react';
import { Users, Award, TrendingUp, Mail } from 'lucide-react';

const About = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@vilxar.com?subject=Learn More About Vilxar&body=Hi, I would like to learn more about your company and services.';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Vilxar
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are a team of digital marketing experts dedicated to helping businesses 
              thrive in the digital landscape through innovative solutions and proven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to democratize digital marketing, Vilxar has been at the 
                forefront of helping businesses of all sizes achieve their online goals. Our 
                journey began with a simple belief: every business deserves access to 
                world-class digital marketing solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we serve hundreds of clients across various industries, delivering 
                measurable results through our comprehensive suite of digital marketing 
                services including Google Ads, Meta advertising, and strategic consulting.
              </p>
              <button
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Get in Touch</span>
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Vilxar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client-Centric</h3>
              <p className="text-gray-600">
                Your success is our success. We prioritize understanding your unique needs 
                and delivering solutions that drive real results for your business.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from strategy 
                development to campaign execution and client communication.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of digital marketing trends and continuously innovate 
                our approaches to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Vilxar can help accelerate your business growth.
          </p>
          <button
            onClick={handleEmailClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
          >
            <Mail className="h-5 w-5" />
            <span>Start the Conversation</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
