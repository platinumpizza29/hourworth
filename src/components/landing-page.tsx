/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
  Clock,
  Star,
  Check,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import NavComp from "./nav";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#001a1a] text-white">
      <NavComp />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
                <div className="mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Product of the day
                <span className="ml-2 font-semibold">1st</span>
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Transform Your
                <br />
                Time Tracking Today
              </h1>
              <p className="mb-8 text-xl text-gray-400">
                Say goodbye to manual time tracking and hello to AI-powered
                efficiency. Streamline your workflow, boost productivity, and
                maximize billable hours effortlessly.
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  View More
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg border border-gray-800 bg-gray-900 p-2 shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="TimeTrack AI Dashboard"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -inset-4 z-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Supercharge Your Efficiency!
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-emerald-400/10 p-3 text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-[#002626] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            What Our Users Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.quote}</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Social Links */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-xl text-gray-400">
                Have questions or need support? We `&apos;`re here to help.
                Reach out to us anytime.
              </p>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-gray-700 bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-gray-700 bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="border-gray-700 bg-gray-800 text-white"
                  />
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="mb-6 text-4xl font-bold">Connect With Us</h2>
              <p className="mb-8 text-xl text-gray-400">
                Follow us on social media for the latest updates, tips, and
                community discussions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  <Twitter className="h-8 w-8" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  <Facebook className="h-8 w-8" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  <Instagram className="h-8 w-8" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 TimeTrack AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "AI-Powered Time Tracking",
    description:
      "Automatically track your work hours with intelligent project detection and categorization.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Smart Reporting",
    description:
      "Generate detailed insights and analytics about your productivity patterns.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Seamless Integration",
    description:
      "Works perfectly with your existing tools and project management software.",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Freelance Designer",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "TimeTrack AI has revolutionized how I manage my projects. The AI-powered tracking is incredibly accurate!",
  },
  {
    name: "Sarah Lee",
    title: "Project Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The insights from TimeTrack AI have helped our team boost productivity by 30%. It's a game-changer!",
  },
  {
    name: "Michael Chen",
    title: "Software Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "I love how seamlessly TimeTrack AI integrates with our existing tools. It's made time tracking effortless.",
  },
];
