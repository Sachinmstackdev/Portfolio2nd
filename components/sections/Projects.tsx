'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide(currentSlide + 1);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: (currentSlide + 1) * sliderRef.current.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: (currentSlide - 1) * sliderRef.current.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth);
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, [currentSlide]);

  const projects = [
    {
      title: 'Two Sapiens',
      subtitle: 'E-commerce Store',
      description: 'Full-scale e-commerce platform with marketing automation',
      link: 'https://twosapiens.in/',
      category: 'E-commerce',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1740983000/Black_Liquid_Minimalist_Daily_Quotes_LinkedIn_Banner_jc5c4a.png'
    },
    {
      title: 'Mithi Craving',
      subtitle: 'Order Management',
      description: 'Streamlined order processing system',
      link: 'https://mithicraving.com/',
      category: 'Food Tech',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1754964450/469590153_943912297673989_222213_zfzalg.png'
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
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png'
    },
    {
      title: 'Lonar Group',
      subtitle: 'Property Platform',
      description: 'Property listing with lead generation',
      link: 'https://lonargroups.com/',
      category: 'Real Estate',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1757613678/lonar-white_d51qvm.png'
    },
    {
      title: 'Kamla Health',
      subtitle: 'Digital Presence',
      description: 'Local SEO and digital marketing',
      link: '#',
      category: 'Healthcare',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1757752935/AC9h4nrr8DcJDjEXlUFvBnRA9I8agtaw_w3wlnr.png'
    },
    {
      title: 'Intelligence Dock',
      subtitle: 'Digital Agency Platform',
      description: 'Full-service digital agency specializing in custom development and marketing solutions',
      link: 'https://www.intelligencedock.com/',
      category: 'Agency',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1757752746/Screenshot_2025-09-13_140824_bemcti.png'
    },
    {
      title: 'Microscope',
      subtitle: 'Web Platform',
      description: 'Modern frontend development',
      link: 'https://macroscope-five.vercel.app/',
      category: 'Technology',
      image: 'https://res.cloudinary.com/twosapiens/image/upload/v1757613677/image_6_f2ruya.png'
    }
  ];

  type Project = {
    title: string;
    subtitle?: string;
    description?: string;
    link: string;
    category: string;
    image?: string;
  };

  const ProjectCard: React.FC<{ project: Project; index: number; wrapperClass?: string }> = ({ project, index, wrapperClass = '' }) => (
    <motion.a
      href={project.link}
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative ${wrapperClass}`}
    >
      <div className="rounded-3xl p-[1px] bg-gradient-to-br from-gray-200 to-gray-100 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors duration-500 h-full min-h-[420px] md:min-h-[460px]">
        <div className="rounded-3xl bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-purple-500/10 rounded-full blur-2xl" />
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project`}
                fill
                className="object-contain p-6"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-5xl font-bold text-gray-300">{project.title[0]}</span>
              </div>
            )}
            <div className="absolute top-3 right-3">
              <div className="h-9 w-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] tracking-wider font-semibold uppercase">
                {project.category}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 text-sm font-medium text-gray-500">{project.subtitle}</p>
            )}
            {project.description && (
              <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            )}
            <div className="mt-auto pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold group-hover:bg-blue-600 transition-colors">
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );

  // Calculate total pages for 4x4 grid
  const totalPages = Math.ceil(projects.length / 16);
  const currentPageProjects = projects.slice(currentSlide * 16, (currentSlide + 1) * 16);

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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            <span>Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Transforming businesses through digital excellence
          </p>
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative">
          <div
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                wrapperClass="min-w-[300px] w-[calc(100vw-2rem)] flex-shrink-0 snap-center"
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
              currentSlide === 0 ? 'opacity-0' : 'opacity-100'
            }`}
            disabled={currentSlide === 0}
            title="Previous project"
            aria-label="View previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-10 transition-opacity duration-300 ${
              currentSlide === projects.length - 1 ? 'opacity-0' : 'opacity-100'
            }`}
            disabled={currentSlide === projects.length - 1}
            title="Next project"
            aria-label="View next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* Navigation Dots removed as requested */}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}