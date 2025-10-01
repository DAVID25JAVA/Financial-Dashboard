"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingNavbar from "./component/landing/LandingNav";

export default function LandingPage() {
  const features = [
    {
      title: "Real-time Analytics",
      description:
        "Monitor your business performance with live data and insights.",
      icon: ArrowRight,
    },
    {
      title: "Customizable Dashboard",
      description:
        "Tailor your workspace to match your workflow and preferences.",
      icon: ArrowRight,
    },
    {
      title: "Team Collaboration",
      description:
        "Work together seamlessly with built-in team tools and chat.",
      icon: ArrowRight,
    },
    {
      title: "Secure & Reliable",
      description:
        "Your data is safe with enterprise-grade security protocols.",
      icon: ArrowRight,
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at Startup",
      text: "DashHub transformed our business. It's sleek, fast, and reliable.",
    },
    {
      name: "Sarah Smith",
      role: "Product Manager",
      text: "The analytics dashboard gave us insights we never had before.",
    },
    {
      name: "Michael Lee",
      role: "Developer",
      text:
        "Integration was smooth, and dark mode is beautiful for late-night work.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="md:max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium dark:bg-gray-800 dark:text-orange-400">
            🎉 New Dashboard v2.0 is here!
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
            Manage Your Business
            <span className="block text-orange-600 mt-2 dark:text-orange-400">
              With Confidence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Powerful dashboard solution designed to streamline your workflow and
            boost productivity. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              Dashboard
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                50K+
              </div>
              <div className="text-gray-600 mt-1 dark:text-gray-300">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                99%
              </div>
              <div className="text-gray-600 mt-1 dark:text-gray-300">
                Satisfaction
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                24/7
              </div>
              <div className="text-gray-600 mt-1 dark:text-gray-300">
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 md:px-18 px-5 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features to help you succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-orange-100 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 dark:bg-orange-500">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">
            About{" "}
            <span className="text-orange-600 dark:text-orange-400">
              DashHub
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">
            DashHub is a modern dashboard solution designed to empower
            businesses of all sizes. Whether you're a startup or an enterprise,
            our platform adapts to your needs.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold dark:bg-orange-500 dark:hover:bg-orange-600"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 md:px-18 px-5 bg-orange-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what our users are saying
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg dark:bg-gray-800"
              >
                <p className="text-gray-600 mb-4 dark:text-gray-300">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 px-4 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join thousands of businesses already using DashHub to scale faster
            and smarter.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">DashHub</div>
          <p className="text-gray-400 mb-4 dark:text-gray-500">
            © 2025 DashHub. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
