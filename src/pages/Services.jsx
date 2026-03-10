import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Briefcase, Settings, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from "../components/home/CTASection";

const services = [
  {
    icon: Home,
    title: 'Property Sales',
    description: 'Buy or sell properties with confidence. Our team ensures seamless transactions and the best market value.',
    features: ['Market Analysis', 'Property Valuation', 'Negotiation Support', 'Legal Documentation'],
    color: 'from-purple-600 to-violet-600',
  },
  {
    icon: Building2,
    title: 'Property Development',
    description: 'From concept to completion, we develop premium properties that exceed expectations and stand the test of time.',
    features: ['Site Selection', 'Design & Planning', 'Construction Management', 'Quality Assurance'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Briefcase,
    title: 'Real Estate Consultancy',
    description: 'Expert advice on property investments, market trends, and portfolio management strategies.',
    features: ['Investment Advisory', 'Market Research', 'Portfolio Review', 'Risk Assessment'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Settings,
    title: 'Property Management',
    description: 'Comprehensive management services to maximize your property investment returns effortlessly.',
    features: ['Tenant Screening', 'Rent Collection', 'Maintenance', 'Financial Reporting'],
    color: 'from-pink-500 to-rose-500',
  },
];

const stats = [
  { icon: Building2, value: '500+', label: 'Properties Sold' },
  { icon: TrendingUp, value: '₦5B+', label: 'Transaction Value' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Briefcase, value: '10+', label: 'Years Experience' },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-teal-200/60 dark:bg-teal-900/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/60 dark:bg-cyan-900/30 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-teal-200 dark:border-teal-800 px-4 py-2 rounded-full mb-5"
          >
            <Building2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            <span className="text-sm text-teal-700 dark:text-teal-300 font-semibold">Our Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3"
          >
            Comprehensive<br />
            <span className="text-teal-500 dark:text-teal-400">Real Estate Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From property acquisition to management, we provide end-to-end services tailored to meet your unique real estate needs.
          </motion.p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 -mt-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(124,58,237,0.12)' }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4 mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-semibold hover:underline"
              >
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Skylight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">Why Choose Skylight?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Trusted & Secure', desc: 'All transactions are secure and verified' },
              { title: 'Expert Team', desc: 'Decade of experience in Nigerian real estate' },
              { title: 'Client-Focused', desc: 'Your satisfaction is our top priority' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800"
              >
                <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <CTASection />
    </div>
  );
}