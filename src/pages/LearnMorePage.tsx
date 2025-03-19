import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Trophy, Users, Laptop, Heart, Globe2Icon, Shield, Lightbulb } from 'lucide-react';

function LearnMorePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          About The World's Largest Hackathon
        </h1>

        {/* Overview */}
        <section className="bg-blue-900/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
          <p className="text-blue-200 mb-4">
            Join thousands of developers, designers, and innovators from around the world in this
            groundbreaking virtual hackathon. With over $1 million in prizes, world-class mentorship,
            and the chance to build something extraordinary, this is an opportunity you don't want to miss.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <Calendar className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">48 Hours</h3>
              <p className="text-blue-200">Non-stop innovation and coding</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <Trophy className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">$1M+ in Prizes</h3>
              <p className="text-blue-200">Across multiple categories</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Global Community</h3>
              <p className="text-blue-200">Connect with peers worldwide</p>
            </div>
          </div>
        </section>

        {/* Challenge Tracks */}
        <section className="bg-blue-900/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Challenge Tracks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Laptop,
                title: 'AI & Machine Learning',
                desc: 'Build intelligent applications that leverage cutting-edge AI technologies. Focus areas include natural language processing, computer vision, and predictive analytics.'
              },
              {
                icon: Heart,
                title: 'Healthcare Tech',
                desc: 'Create solutions that address healthcare challenges. From telemedicine platforms to patient care innovations, help shape the future of healthcare.'
              },
              {
                icon: Globe2Icon,
                title: 'Sustainability',
                desc: 'Develop technology that promotes environmental sustainability. Focus on renewable energy, waste reduction, or climate change mitigation.'
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                desc: 'Build tools and solutions for a safer digital world. Address challenges in data privacy, network security, or threat detection.'
              },
              {
                icon: Users,
                title: 'Social Impact',
                desc: 'Create projects that make a positive difference in communities. Focus on education, accessibility, or social justice.'
              },
              {
                icon: Lightbulb,
                title: 'Open Innovation',
                desc: 'Have a unique idea? This track welcomes all innovative solutions that don\'t fit into other categories.'
              }
            ].map((track, i) => (
              <div key={i} className="bg-blue-900/30 p-6 rounded-lg">
                <track.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-blue-200">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Participate */}
        <section className="bg-blue-900/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Why Participate?</h2>
          <div className="space-y-4">
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Learn from the Best</h3>
              <p className="text-blue-200">
                Get mentorship from industry experts, attend workshops led by tech leaders,
                and learn new skills through hands-on experience.
              </p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Build Your Network</h3>
              <p className="text-blue-200">
                Connect with fellow participants, mentors, and judges from around the world.
                Form lasting relationships in the tech community.
              </p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Win Big</h3>
              <p className="text-blue-200">
                Compete for over $1 million in prizes, including cash awards, mentorship
                opportunities, and potential investment in your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearnMorePage;