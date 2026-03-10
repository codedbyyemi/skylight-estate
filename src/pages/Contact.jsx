import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, title: 'Phone', detail: '+234 800 000 0000', href: 'tel:+2348000000000', color: 'from-green-500 to-teal-500' },
  { icon: Mail, title: 'Email', detail: 'info@skylightrealestate.com', href: 'mailto:info@skylightrealestate.com', color: 'from-purple-600 to-violet-600' },
  { icon: MapPin, title: 'Address', detail: '123 Victoria Island, Lagos, Nigeria', href: '#', color: 'from-orange-500 to-yellow-500' },
  { icon: Clock, title: 'Working Hours', detail: 'Mon - Sat: 9AM - 6PM', href: null, color: 'from-teal-500 to-cyan-500' },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSend = () => {
    const text = `Hello Skylight Real Estate, I'd like to make an enquiry.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/2348000000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-teal-200/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-green-200/60 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-teal-200 px-4 py-2 rounded-full mb-5"
          >
            <MessageCircle className="h-4 w-4 text-teal-600" />
            <span className="text-sm text-teal-700 font-semibold">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3"
          >
            Contact<br />
            <span className="text-teal-500 dark:text-teal-400">Skylight Real Estate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Cards + WhatsApp */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-6"
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ x: 4 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">{info.title}</p>
                    {info.href && info.href !== '#' ? (
                      <a href={info.href} className="text-gray-500 dark:text-gray-400 text-sm hover:text-purple-600 transition-colors">{info.detail}</a>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{info.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27d%20like%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-5 text-white shadow-lg"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <MessageCircle className="h-8 w-8" />
                </motion.div>
                <div>
                  <p className="font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-green-100 text-sm">Get instant responses</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Your Name</label>
                  <input
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Email Address</label>
                  <input
                    placeholder="john@example.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Phone Number</label>
                <input
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Your Message</label>
                <textarea
                  placeholder="Tell us about your property needs..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg resize-none"
                />
              </div>
              <motion.button
                onClick={handleSend}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" /> SEND VIA WHATSAPP
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}