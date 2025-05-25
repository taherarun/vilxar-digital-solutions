
import React from 'react';
import { Target, Users, BarChart3, TrendingUp, Search, Zap, Mail } from 'lucide-react';

const Services = () => {
  const handleEmailClick = (service: string) => {
    window.location.href = `mailto:vilxardigital@gmail.com?subject=Inquiry about ${service}&body=Hi, I am interested in your ${service} service. Please provide more details.`;
  };

  const services = [
    {
      icon: Target,
      title: "Google Ads Management",
      description: "Maximize your ROI with expertly managed Google Ads campaigns that drive qualified traffic and conversions.",
      features: [
        "Keyword research & strategy",
        "Campaign setup & optimization",
        "Ad copy creation & testing",
        "Bid management & budget optimization",
        "Performance tracking & reporting"
      ],
      color: "blue"
    },
    {
      icon: Users,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Engage your target audience with compelling social media advertising campaigns across Facebook and Instagram.",
      features: [
        "Audience research & targeting",
        "Creative design & development",
        "Campaign strategy & execution",
        "A/B testing & optimization",
        "Social media analytics"
      ],
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and detailed performance reporting.",
      features: [
        "Google Analytics setup",
        "Custom dashboard creation",
        "Performance tracking",
        "ROI analysis",
        "Monthly strategy reports"
      ],
      color: "green"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your organic search visibility and drive sustainable long-term traffic growth.",
      features: [
        "Technical SEO audit",
        "On-page optimization",
        "Content strategy",
        "Link building",
        "Local SEO"
      ],
      color: "orange"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Develop comprehensive digital marketing strategies that align with your business goals.",
      features: [
        "Market analysis",
        "Competitor research",
        "Growth planning",
        "Channel optimization",
        "Performance forecasting"
      ],
      color: "indigo"
    },
    {
      icon: Zap,
      title: "Conversion Optimization",
      description: "Maximize your website's potential with proven conversion rate optimization techniques.",
      features: [
        "Landing page optimization",
        "User experience analysis",
        "A/B testing",
        "Funnel optimization",
        "Performance monitoring"
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:from-blue-600 hover:to-blue-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:from-purple-600 hover:to-purple-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:from-green-600 hover:to-green-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:from-orange-600 hover:to-orange-700' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:from-indigo-600 hover:to-indigo-700' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:from-red-600 hover:to-red-700' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital marketing services designed to accelerate your business growth 
              and maximize your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              const Icon = service.icon;
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className={`${colorClasses.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className={`h-8 w-8 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleEmailClick(service.title)}
                      className={`w-full bg-gradient-to-r from-gray-600 to-gray-700 ${colorClasses.hover} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <Mail className="h-4 w-4" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business, goals, and target audience to create a tailored strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive digital marketing strategy aligned with your objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">We implement campaigns with precision, monitoring performance at every step.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">We continuously optimize campaigns for maximum ROI and sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your digital marketing needs and discover how we can help you achieve your goals.
          </p>
          <button
            onClick={() => handleEmailClick("Digital Marketing Services")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
          >
            <Mail className="h-5 w-5" />
            <span>Get Your Free Consultation</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
