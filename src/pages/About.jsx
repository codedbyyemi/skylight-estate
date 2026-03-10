import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Eye, Shield, Heart, Award, Users } from 'lucide-react';
import CTASection from "../components/home/CTASection";
import { Link } from 'react-router-dom';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We conduct business with the highest ethical standards' },
  { icon: Heart, title: 'Client Focus', desc: 'Your satisfaction and success drive everything we do' },
  { icon: Award, title: 'Excellence', desc: 'We strive for excellence in every transaction' },
  { icon: Eye, title: 'Transparency', desc: 'Open and honest communication at all times' },
];

const team = [
  { name: 'John Doe', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
  { name: 'Jane Smith', role: 'Head of Sales', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
  { name: 'Michael Johnson', role: 'Property Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-purple-200/60 dark:bg-purple-900/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-violet-200/60 dark:bg-violet-900/30 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-200 dark:border-purple-800 px-4 py-2 rounded-full mb-6">
                <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm text-purple-700 dark:text-purple-300 font-semibold">About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                Building Dreams,<br />
                <span className="text-purple-600 dark:text-purple-400">Creating Homes</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Skylight Real Estate has been at the forefront of Nigerian real estate for over a decade. We help individuals and families find their perfect properties while providing investors with lucrative opportunities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Properties Sold' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.15, type: 'spring' }}
                  >
                    <p className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">{s.value}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                  alt="About Skylight"
                  className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.04 }}
                  className="absolute bottom-6 left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">₦5B+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Transaction Value</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {[
            {
              icon: Target,
              title: 'Our Mission',
              color: 'from-purple-600 to-violet-600',
              bg: 'bg-purple-50 dark:bg-purple-900/10',
              desc: 'To revolutionize Nigerian real estate by providing exceptional service, transparent transactions, and innovative solutions.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              color: 'from-teal-500 to-cyan-500',
              bg: 'bg-teal-50 dark:bg-teal-900/10',
              desc: 'To become Africa\'s most trusted and innovative real estate company, setting the standard for excellence, integrity, and customer satisfaction.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`${item.bg} rounded-2xl p-8 border border-gray-100 dark:border-gray-700`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-5`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">Our Values</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">What We Stand For</h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(124,58,237,0.15)' }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Meet Our Team</h2>
          <p className="text-gray-500 dark:text-gray-400">Dedicated professionals committed to your real estate success</p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 text-center"
            >
              <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{member.name}</h4>
                <p className="text-purple-600 dark:text-purple-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Properties Sold' },
            { value: '1000+', label: 'Happy Clients' },
            { value: '₦5B+', label: 'Transaction Value' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CTASection />
    </div>
  );
}