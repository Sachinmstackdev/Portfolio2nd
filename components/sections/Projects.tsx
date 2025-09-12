'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  const projects = [
    {
      title: 'Two Sapiens',
      subtitle: 'E-commerce Store',
      description: 'Full-scale e-commerce platform with marketing automation',
      link: 'https://twosapiens.in/',
      category: 'E-commerce',
      image: '' // Add your image URL here
    },
    {
      title: 'Mithi Craving',
      subtitle: 'Order Management',
      description: 'Streamlined order processing system',
      link: 'https://mithicraving.com/',
      category: 'Food Tech',
      image: '' // Add your image URL here
    },
    {
      title: 'Express India',
      subtitle: 'B2B Platform',
      description: 'Bulk order management system with SEO',
      link: 'https://expresindia.com/',
      category: 'B2B',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1752717392/a-vector-logo-design-for-express-india-f_0Cbj16ZZSQymUwZfbI5nIQ_ykQlxmLCRqu-1EL1brPCxQ_jn2kuu.jpg'
    },
    {
      title: 'VK Hostels',
      subtitle: 'Booking Platform',
      description: 'Integrated booking system with marketing',
      link: '#',
      category: 'Hospitality',
      image: '' // Add your image URL here
    },
    {
      title: 'Lonar Group',
      subtitle: 'Property Platform',
      description: 'Property listing with lead generation',
      link: 'https://lonargroups.com/',
      category: 'Real Estate',
      image: '' // Add your image URL here
    },
    {
      title: 'Kamla Health',
      subtitle: 'Digital Presence',
      description: 'Local SEO and digital marketing',
      link: '#',
      category: 'Healthcare',
      image: '' // Add your image URL here
    },
    {
      title: 'Intelligence Dock',
      subtitle: 'Digital Agency Platform',
      description: 'Full-service digital agency specializing in custom development and marketing solutions',
      link: 'https://www.intelligencedock.com/',
      category: 'Agency',
      image: '' // Add your image URL here
    },
    {
      title: 'Microscope',
      subtitle: 'Web Platform',
      description: 'Modern frontend development',
      link: 'https://macroscope-five.vercel.app/',
      category: 'Technology',
      image: '' // Add your image URL here
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Selected Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Transforming businesses through digital excellence
          </p>
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-6 pb-8 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, index) => (
              <motion.a
                href={project.link}
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl min-w-[300px] flex-shrink-0 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-300">{project.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <span className="text-xs font-medium text-blue-600 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <ArrowUpRight className="absolute bottom-8 right-8 w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <motion.a
              href={project.link}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300">{project.title[0]}</span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <span className="text-xs font-medium text-blue-600 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {project.subtitle}
                </p>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <ArrowUpRight className="absolute bottom-8 right-8 w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 