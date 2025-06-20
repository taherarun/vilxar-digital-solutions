import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const handleEmailClick = (subject = "General Inquiry") => {
    if (isMobile()) {
      window.location.href = `mailto:vilxardigital@gmail.com?subject=${subject}&body=Hi, I would like to get in touch with your team.`;
    } else {
      // For desktop, show options to open Gmail or Outlook
      const confirmed = window.confirm("Choose your email service:\nOK for Gmail\nCancel for Outlook");
      const emailBody = "Hi, I would like to get in touch with your team.";
      
      if (confirmed) {
        // Open Gmail
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vilxardigital@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(gmailUrl, '_blank');
      } else {
        // Open Outlook
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=vilxardigital@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(outlookUrl, '_blank');
      }
    }
  };

  const handleQuoteClick = () => {
    const subject = "Request for Quote";
    const body = "Hi, I would like to request a quote for your digital marketing services. Please provide details for:\n\n- Business Type:\n- Current Marketing Challenges:\n- Goals:\n- Budget Range:\n- Timeline:\n\nThank you!";
    
    if (isMobile()) {
      window.location.href = `mailto:vilxardigital@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    } else {
      const confirmed = window.confirm("Choose your email service:\nOK for Gmail\nCancel for Outlook");
      
      if (confirmed) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vilxardigital@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
      } else {
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=vilxardigital@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(outlookUrl, '_blank');
      }
    }
  };

  const handleConsultationClick = () => {
    const subject = "Free Consultation Request";
    const body = "Hi, I would like to schedule a free consultation to discuss my digital marketing needs.\n\nPreferred contact method:\nPreferred time:\nBrief description of my business:\n\nThank you!";
    
    if (isMobile()) {
      window.location.href = `mailto:vilxardigital@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    } else {
      const confirmed = window.confirm("Choose your email service:\nOK for Gmail\nCancel for Outlook");
      
      if (confirmed) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vilxardigital@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
      } else {
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=vilxardigital@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(outlookUrl, '_blank');
      }
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "918870504613"; // Added country code 91 for India
    const message = "Hi, I would like to know more about your digital marketing services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+1-555-VILXAR';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your digital presence? Contact our team of experts 
              and let's discuss how we can help achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transit ion-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => handleEmailClick()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                Send Email<br/>
                vilxardigital@gmail.com
              </button>
            </div>

            {/* <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our team for immediate assistance.
              </p>
              <button
                onClick={handlePhoneCall}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </button>
            </div> */}

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Send us a message on WhatsApp for quick communication.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
              >
                Message on WhatsApp
              </button>
            </div>

            {/* <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-6">
                Meet our team at our modern office in the heart of the city.
              </p>
              <p className="text-gray-800 font-semibold">
                123 Digital Avenue<br />
                Suite 456<br />
                Tech City, TC 12345
              </p>
            </div> */}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Request a Quote</h3>
              <p className="text-gray-600 mb-6">
                Get a personalized quote for your digital marketing needs. We'll analyze 
                your requirements and provide a detailed proposal.
              </p>
              <button
                onClick={handleQuoteClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Request Quote</span>
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Schedule a complimentary 30-minute consultation to discuss your goals 
                and explore how we can help grow your business.
              </p>
              <button
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Hours
            </h2>
            <p className="text-xl text-gray-600">
              We're here when you need us most.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Email Support: 24/7</p>
                  <p>Phone & WhatsApp: Business Hours</p>
                  <p>Emergency: On-call available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Start Your Success Story
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses that have transformed their digital presence with Vilxar.
          </p>
          <button
            onClick={() => handleEmailClick("Ready to Get Started")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
          >
            <Mail className="h-5 w-5" />
            <span>Get Started Today</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
