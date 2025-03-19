import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Users, Code, Globe2Icon } from 'lucide-react';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamSize: '1',
    experience: 'beginner',
    track: '',
    skills: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Register for the Hackathon
        </h1>

        <div className="bg-blue-900/20 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg py-3 px-10 text-white placeholder-blue-300"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg py-3 px-10 text-white placeholder-blue-300"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Team Size
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <select
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg py-3 px-10 text-white"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                >
                  <option value="1">Solo Participant</option>
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Experience Level
              </label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <select
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg py-3 px-10 text-white"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Preferred Track
              </label>
              <div className="relative">
                <Globe2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <select
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg py-3 px-10 text-white"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                >
                  <option value="">Select a track</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="health">Healthcare Tech</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="security">Cybersecurity</option>
                  <option value="social">Social Impact</option>
                  <option value="open">Open Innovation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Skills & Technologies
              </label>
              <textarea
                className="w-full bg-blue-900/30 border border-blue-700 rounded-lg py-3 px-4 text-white placeholder-blue-300"
                rows={4}
                placeholder="List your skills and technologies you're comfortable with"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;