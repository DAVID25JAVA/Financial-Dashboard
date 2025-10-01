'use client';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import LandingNavbar from './component/landing/LandingNav';


export default function LandingPage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Bank-level security to protect your data',
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Real-time insights to grow your business',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team efficiently',
    },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', text: 'This platform transformed how we manage our business!' },
    { name: 'Mike Chen', role: 'Founder, StartupX', text: 'Incredible features and super easy to use.' },
    { name: 'Emily Davis', role: 'Manager, BizHub', text: 'Best investment we made this year!' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <LandingNavbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
            🎉 New Dashboard v2.0 is here!
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Manage Your Business
            <span className="block text-orange-600 mt-2">With Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powerful dashboard solution designed to streamline your workflow and boost productivity. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div>
              <div className="text-4xl font-bold text-orange-600">50K+</div>
              <div className="text-gray-600 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">99%</div>
              <div className="text-gray-600 mt-1">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 mt-1">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-18 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features to help you succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Benefits Section */}
      <section id="about" className="py-20 px-18">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We provide cutting-edge tools and features that help businesses scale efficiently and effectively.
              </p>
              <div className="space-y-4">
                {['Easy to use interface', 'Advanced analytics', 'Reliable support', 'Flexible pricing'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-2xl font-bold">Your Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-18 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied users today and transform your workflow
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-xl"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">DashHub</div>
          <p className="text-gray-400 mb-4">© 2025 DashHub. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}