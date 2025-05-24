
import React from 'react';
import { Check, Star, Mail } from 'lucide-react';

const Pricing = () => {
  const handleEmailClick = (plan: string) => {
    window.location.href = `mailto:info@vilxar.com?subject=Interested in ${plan} Plan&body=Hi, I am interested in the ${plan} plan. Please provide more details and next steps.`;
  };

  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Google Ads management",
        "Basic analytics & reporting",
        "Monthly strategy review",
        "Email support",
        "Up to 2 campaigns",
        "Landing page optimization"
      ],
      cta: "Start Growing",
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Growth",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing businesses ready to scale their marketing",
      features: [
        "Google Ads + Meta Ads management",
        "Advanced analytics & reporting",
        "Bi-weekly strategy sessions",
        "Priority support",
        "Up to 5 campaigns",
        "Conversion rate optimization",
        "SEO optimization",
        "Custom audience targeting"
      ],
      cta: "Accelerate Growth",
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For established businesses seeking maximum growth potential",
      features: [
        "Full-service digital marketing",
        "Custom analytics dashboard",
        "Weekly strategy sessions",
        "Dedicated account manager",
        "Unlimited campaigns",
        "Advanced automation",
        "A/B testing & optimization",
        "Custom integrations",
        "Growth forecasting",
        "24/7 priority support"
      ],
      cta: "Maximize Results",
      popular: false,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Growth Plan
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transparent pricing for every stage of your business. No hidden fees, 
              no long-term contracts. Just results-driven digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-purple-200 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="bg-green-100 rounded-full p-1 mr-3">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleEmailClick(plan.name)}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <Mail className="h-5 w-5" />
                    <span>{plan.cta}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All plans include our core commitment to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Tracking</h3>
              <p className="text-gray-600">Detailed analytics and reporting on all campaigns.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Optimization</h3>
              <p className="text-gray-600">Continuous campaign optimization for maximum ROI.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Direct access to our digital marketing experts.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focus</h3>
              <p className="text-gray-600">Strategies designed for sustainable business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Growing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your plan and let's discuss how we can accelerate your business growth together.
          </p>
          <button
            onClick={() => handleEmailClick("Custom")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
          >
            <Mail className="h-5 w-5" />
            <span>Get Custom Quote</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
