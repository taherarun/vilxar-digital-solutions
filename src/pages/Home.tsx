
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, BarChart3, Users, Mail } from 'lucide-react';

const Home = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@vilxar.com?subject=Digital Solutions Inquiry&body=Hi, I would like to know more about your digital solutions services.';
  };

  const handleGetStartedClick = () => {
    window.location.href = 'mailto:info@vilxar.com?subject=Get Started with Vilxar&body=Hi, I am interested in getting started with your digital solutions. Please contact me to discuss my requirements.';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Accelerate your growth with our comprehensive digital marketing services. 
              From Google Ads to Meta campaigns, we deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStartedClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing services designed to boost your online presence and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Ads</h3>
              <p className="text-gray-600">Targeted campaigns that drive qualified traffic and maximize ROI.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meta Ads</h3>
              <p className="text-gray-600">Facebook and Instagram campaigns that engage your target audience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">Data-driven insights to optimize your marketing performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Strategy</h3>
              <p className="text-gray-600">Custom strategies to scale your business effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful businesses that trust Vilxar for their digital marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEmailClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us Today</span>
            </button>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
