import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GithubIcon, Globe2Icon, Calendar, MapPin, Trophy, Users, BookOpen,
  MessageSquare, Clock, Award, Lightbulb, Heart, Shield, Laptop,
  MessageCircle, Share2, HelpCircle, Star, ChevronDown
} from 'lucide-react';

// Countdown timer component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-blue-900/30 rounded-lg p-4">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm text-blue-200 capitalize">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// FAQ Accordion component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-blue-800">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="pb-4 text-blue-200">{answer}</p>}
    </div>
  );
};

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            The World's Largest Hackathon
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-200">$1M+ in Total Prizes</p>
          <CountdownTimer />
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => navigate('/register')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
            >
              Register Now
            </button>
            <button 
              onClick={() => navigate('/learn-more')}
              className="px-8 py-4 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg text-lg font-semibold transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Event Details */}
      <section className="py-20 px-4" id="details">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Event Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Calendar className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Schedule (EST)</h3>
              <ul className="text-blue-200 space-y-2">
                <li>Day 1: Opening Ceremony (9 AM)</li>
                <li>Day 1-2: Hacking Period (48 hours)</li>
                <li>Day 3: Judging & Awards (2 PM)</li>
              </ul>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Globe2Icon className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Virtual Platform</h3>
              <p className="text-blue-200">Join via Discord & Zoom</p>
              <p className="text-blue-200 mt-2">Tech Requirements:</p>
              <ul className="text-blue-200 list-disc list-inside mt-2">
                <li>Stable Internet</li>
                <li>Webcam & Microphone</li>
                <li>Modern Web Browser</li>
              </ul>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Trophy className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Prize Categories</h3>
              <ul className="text-blue-200 space-y-2">
                <li>Best Overall: $100,000</li>
                <li>Innovation Award: $50,000</li>
                <li>Social Impact: $25,000</li>
                <li>+ More Categories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Tracks */}
      <section className="py-20 px-4 bg-black/30" id="tracks">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Challenge Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
                title: 'AI & Machine Learning',
                desc: 'Build the next generation of intelligent applications'
              },
              {
                icon: Heart,
                title: 'Healthcare Tech',
                desc: 'Innovate solutions for modern healthcare challenges'
              },
              {
                icon: Globe2Icon,
                title: 'Sustainability',
                desc: 'Create technology that helps protect our planet'
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                desc: 'Develop tools for a safer digital world'
              },
              {
                icon: Users,
                title: 'Social Impact',
                desc: 'Build solutions that make a difference in communities'
              },
              {
                icon: Lightbulb,
                title: 'Open Innovation',
                desc: 'Your creative solution to any problem'
              }
            ].map((track, i) => (
              <div key={i} className="bg-blue-900/20 p-6 rounded-lg">
                <track.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-blue-200">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Speakers */}
      <section className="py-20 px-4" id="workshops">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Workshops & Speakers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((workshop) => (
              <div key={workshop} className="bg-blue-900/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {workshop === 1 && "AI Workshop: Building Intelligent Apps"}
                    {workshop === 2 && "Cloud Computing Masterclass"}
                    {workshop === 3 && "Design Thinking in Tech"}
                    {workshop === 4 && "Scaling Your Hackathon Project"}
                  </h3>
                  <p className="text-blue-200 mb-4">
                    {workshop === 1 && "Learn to integrate AI models into your applications"}
                    {workshop === 2 && "Master cloud deployment and scaling"}
                    {workshop === 3 && "Apply design thinking to solve problems"}
                    {workshop === 4 && "Tips for scaling your project post-hackathon"}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://images.unsplash.com/photo-${workshop === 1 ? '1556761175-5973dc0f32e7' : 
                           workshop === 2 ? '1573497019940-1c28c88b4f3e' :
                           workshop === 3 ? '1560250097-0b93528c311a' :
                           '1572021335469-b8e7b41b5a26'}?w=100&h=100&fit=crop`}
                      alt="Speaker"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">
                        {workshop === 1 && "Dr. Sarah Chen"}
                        {workshop === 2 && "Michael Rodriguez"}
                        {workshop === 3 && "Emma Thompson"}
                        {workshop === 4 && "David Kim"}
                      </p>
                      <p className="text-sm text-blue-200">
                        {workshop === 1 && "AI Research Lead @ Tech Corp"}
                        {workshop === 2 && "Cloud Architect @ CloudCo"}
                        {workshop === 3 && "UX Director @ DesignHub"}
                        {workshop === 4 && "CTO @ ScaleUp"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges */}
      <section className="py-20 px-4 bg-black/30" id="judges">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Judges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((judge) => (
              <div key={judge} className="bg-blue-900/20 rounded-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${judge === 1 ? '1507003211169-0a1dd7228f2d' :
                       judge === 2 ? '1494790108377-be9c29b29330' :
                       '1573497019940-1c28c88b4f3e'}?w=500&h=500&fit=crop`}
                  alt="Judge"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {judge === 1 && "John Smith"}
                    {judge === 2 && "Emily Davis"}
                    {judge === 3 && "Alex Wong"}
                  </h3>
                  <p className="text-blue-200">
                    {judge === 1 && "VP of Engineering at TechGiant"}
                    {judge === 2 && "Founder & CEO of StartupX"}
                    {judge === 3 && "Principal Architect at CloudScale"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-20 px-4" id="conduct">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Code of Conduct</h2>
          <div className="bg-blue-900/20 p-8 rounded-lg">
            <p className="text-blue-200 mb-4">
              We are committed to providing a harassment-free experience for everyone, regardless of gender,
              gender identity and expression, age, sexual orientation, disability, physical appearance,
              body size, race, ethnicity, nationality, religion, or technical experience.
            </p>
            <p className="text-blue-200 mb-4">
              We do not tolerate harassment of conference participants in any form.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition">
              Report an Issue
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black/30" id="faq">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="What is the registration deadline?"
              answer="Registration closes 48 hours before the event starts. Early registration is recommended as spots are limited."
            />
            <FAQItem
              question="Can I participate solo?"
              answer="Yes! While team participation is encouraged, solo participants are welcome. We also provide team matching opportunities."
            />
            <FAQItem
              question="What should I prepare before the event?"
              answer="Ensure you have a stable internet connection, required software installed, and have joined our Discord community."
            />
            <FAQItem
              question="How are projects judged?"
              answer="Projects are evaluated based on innovation, technical complexity, practical applicability, and presentation quality."
            />
          </div>
        </div>
      </section>

      {/* Social Sharing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Share the Event</h2>
          <div className="flex justify-center gap-6">
            <button className="p-3 bg-blue-900/30 rounded-full hover:bg-blue-800/30 transition">
              <Share2 className="w-6 h-6" />
            </button>
            <button className="p-3 bg-blue-900/30 rounded-full hover:bg-blue-800/30 transition">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="p-3 bg-blue-900/30 rounded-full hover:bg-blue-800/30 transition">
              <Star className="w-6 h-6" />
            </button>
          </div>
          <p className="mt-4 text-blue-200">Use #WorldsLargestHackathon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">bolt.new</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Globe2Icon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;