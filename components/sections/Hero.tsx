'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Code, Zap, Target, Rocket, FolderOpen } from 'lucide-react';

export function Hero() {
  const stats = [
    { icon: FolderOpen, value: '30+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '3', label: 'Years Experience' },
    { icon: Rocket, value: '3x', label: 'Avg Client ROI' },
  ];

  const floatingIcons = [
    { icon: Target, position: 'top-4 right-4 md:top-8 md:right-8', delay: 0.8 },
    { icon: Code, position: 'left-4 top-1/2 transform -translate-y-1/2 md:left-8', delay: 1.0 },
    { icon: Zap, position: 'bottom-4 right-4 md:bottom-8 md:right-8', delay: 1.2 },
    { icon: TrendingUp, position: 'top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2', delay: 1.4 },
  ];

  return (
    <section className="min-h-screen bg-white flex items-start pt-28 md:pt-0 relative overflow-hidden font-outfit safe-area-top">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-2">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 pt-16 md:pt-32 order-2 lg:order-1"
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 md:space-y-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                Growth-Driven{' '}
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 whitespace-nowrap inline">
                  Full-Stack Marketer
                </div>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-tight">
                Who Builds & Scales{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Digital Systems
                </span>
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                I help brands turn traffic into trust and tech into traction — with performance marketing, 
                automation, and high-converting digital products.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.a
                href="/Sachin%20Kumar%20Resume.pdf"
                download="Sachin-Kumar-Resume.pdf"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg touch-manipulation"
              >
                <span>Resume</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group border-2 border-gray-300 text-gray-700 font-semibold px-6 md:px-7 py-3 md:py-3.5 rounded-xl hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg touch-manipulation"
              >
                <span>Projects</span>
                <FolderOpen className="h-4 w-4 text-indigo-600 group-hover:text-indigo-600" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 md:gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center group touch-manipulation"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center order-1 lg:order-2 pt-16 sm:pt-20 md:pt-0"
          >
            <div className="relative">
              {/* Circular Graphic */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Animated Circle */}
                <svg
                  className="absolute inset-0 w-full h-full transform -rotate-90"
                  viewBox="0 0 400 400"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeDasharray="565.48"
                    strokeDashoffset="141.37"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src="https://res.cloudinary.com/twosapiens/image/upload/v1750163800/WhatsApp_Image_2025-05-30_at_4.08.48_PM_uxhojj.jpg"
                      alt="Sachin Kumar - Growth-Driven Full-Stack Marketer"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </motion.div>

                {/* Floating Icons - Hidden on mobile for better performance */}
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: item.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`absolute ${item.position} block z-10`}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg border-2 border-indigo-200 flex items-center justify-center hover:scale-110 transition-transform duration-300 touch-manipulation"
                    >
                      <item.icon className="h-6 w-6 md:h-7 md:w-7 text-indigo-600" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Success Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-3 md:p-3 rounded-full shadow-lg"
                >
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-semibold text-xs md:text-sm">Success</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 