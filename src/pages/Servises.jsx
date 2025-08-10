import React, { useEffect, useRef, useState } from 'react';
import TrueFocus from '../animation/True';
import a1 from '../assets/application-programming-interface.png';
import a2 from '../assets/cross-platform.png';
import a3 from '../assets/front-end-programming.png';
import a4 from '../assets/skill-development.png';
import a5 from '../assets/supply-chain.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  // Check scroll position to toggle arrows enabled/disabled state
  const checkForScrollPosition = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  // Scroll by 70% of container width
  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    if (direction === 'left') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkForScrollPosition);
    checkForScrollPosition();
    return () => el.removeEventListener('scroll', checkForScrollPosition);
  }, []);

  const services = [
    {
      img: a1,
      title: "Mobile-Responsive Design",
      text: "Site looks great on all screen sizes. Mobile-first design for best user experience.",
    },
    {
      img: a2,
      title: "UI/UX Design",
      text: "Clean, intuitive designs focused on user needs with wireframes & prototypes.",
    },
    {
      img: a3,
      title: "Front-End Development",
      text: "Modern, responsive websites using HTML, CSS, JavaScript, React & Tailwind CSS.",
    },
    {
      img: a4,
      title: "UI Testing & Optimization",
      text: "Testing usability & performance to make your site faster and user-friendly.",
    },
    {
      img: a5,
      title: "Tailwind CSS Integration",
      text: "Scalable UI systems with Tailwind for pixel-perfect responsiveness.",
    },
  ];

  return (
    <div className="relative px-4 py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl text-orange-600 font-bold mb-12 text-center">
        <TrueFocus
          sentence="My Services"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </h1>

      {/* Left Arrow for Desktop */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll Left"
        className={`hidden sm:flex absolute top-1/2 left-2 transform -translate-y-1/2 bg-orange-600 rounded-full p-2 shadow-lg transition-opacity z-20
          ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'opacity-100 '}`}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Arrow for Desktop */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Scroll Right"
        className={`hidden sm:flex absolute top-1/2 right-2 transform -translate-y-1/2 bg-orange-600 rounded-full p-2 shadow-lg transition-opacity z-20
          ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-6 scroll-smooth"
        style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white border-2 border-orange-600 rounded-2xl shadow-lg p-6 flex-shrink-0 w-72 snap-center"
          >
            <img src={service.img} alt={service.title} className="w-20 h-20 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold underline text-center mb-3">{service.title}</h2>
            <p className="text-center text-sm text-gray-700">{service.text}</p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Services;
