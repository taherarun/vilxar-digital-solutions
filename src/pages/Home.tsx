
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, BarChart3, Users, Mail, CheckCircle, Star, Zap } from 'lucide-react';

const Home = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@vilxar.com?subject=Digital Solutions Inquiry&body=Hi, I would like to know more about your digital solutions services.';
  };

  const handleGetStartedClick = () => {
    window.location.href = 'mailto:info@vilxar.com?subject=Get Started with Vilxar&body=Hi, I am interested in getting started with your digital solutions. Please contact me to discuss my requirements.';
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Vilxar transformed our online presence. Our leads increased by 300% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      text: "Professional, results-driven, and always exceeding expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Ventures",
      text: "The ROI from their campaigns has been exceptional. Best investment we've made.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "2M+", label: "Leads Generated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5x", label: "Average ROI" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <Zap className="h-4 w-4 mr-2 text-yellow-400" />
              Trusted by 500+ Growing Businesses
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Accelerate your growth with our data-driven digital marketing solutions. 
              From Google Ads to Meta campaigns, we deliver measurable results that scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleGetStartedClick}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/services"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Our Digital Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Marketing That
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drives Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we deliver end-to-end digital marketing solutions 
              that boost your online presence and accelerate growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads</h3>
              <p className="text-gray-600 mb-4">Targeted campaigns that drive qualified traffic and maximize ROI with advanced audience targeting.</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meta Ads</h3>
              <p className="text-gray-600 mb-4">Facebook and Instagram campaigns that engage your target audience and build brand loyalty.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics</h3>
              <p className="text-gray-600 mb-4">Data-driven insights and comprehensive reporting to optimize your marketing performance.</p>
              <div className="flex items-center text-green-600 font-medium">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Strategy</h3>
              <p className="text-gray-600 mb-4">Custom strategies and consultation to scale your business effectively and sustainably.</p>
              <div className="flex items-center text-orange-600 font-medium">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vilxar Solutions?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine creativity with data science to deliver campaigns that don't just look good—they perform exceptionally.
              </p>
              
              <div className="space-y-6">
                {[
                  "Proven track record with 500+ successful campaigns",
                  "Advanced AI-powered optimization techniques",
                  "24/7 monitoring and real-time adjustments",
                  "Transparent reporting with detailed analytics",
                  "Dedicated account manager for personalized service"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Join hundreds of businesses that have transformed their digital presence with Vilxar.
                </p>
                <button
                  onClick={handleEmailClick}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Start Your Journey</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Don't just take our word for it—hear from our satisfied clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of successful businesses that trust Vilxar for their digital marketing needs. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us Today</span>
            </button>
            <Link
              to="/pricing"
              className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
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
