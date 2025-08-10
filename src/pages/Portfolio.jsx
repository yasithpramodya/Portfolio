import React from 'react';
import TrueFocus from '../animation/True';
import w1 from '../assets/work1.png';
import w2 from '../assets/work2.jpeg';
import w3 from '../assets/work3.jpeg';
import w4 from '../assets/work4.jpeg';
import CircularGallery from '../animation/scrolling';

function Portfolio() {
  // List of works with their links
  const works = [
    { img: w1, link: 'https://github.com/yasithpramodya/starter' },
    { img: w2, link: 'https://github.com/yasithpramodya/login_interface' },
    { img: w3, link: 'https://github.com/yasithpramodya/fitness-gym' },
    { img: w4, link: 'https://example.com/work4' }
  ];

  return (
    <div className="relative py-20 backdrop-blur-sm">
      <h1 className="text-4xl text-orange-500 font-bold text-center mb-10">
        <TrueFocus 
          sentence="My Works"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </h1>

      {/* Slider */}
      <div className="flex space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-10">
        {works.map((work, index) => (
          <div key={index} className="flex-shrink-0 snap-center">
            <a 
              href={work.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={work.img}
                alt={`Work ${index + 1}`}
                className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
          
        ))}
      </div>
      <div style={{ height: '300px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
    </div>
    
    
  );
}

export default Portfolio;
