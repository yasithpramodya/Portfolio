import React, { useEffect } from 'react';
import TrueFocus from '../animation/True';
import img3 from '../assets/pro2_img.jpg';
import cvFile from '../assets/Cv.pdf'; // CV file
import Magnet from '../animation/Magnet';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: false,    // Allow animation to run every time you scroll
      mirror: true,   // Animate out when scrolling past
    });

    // Refresh AOS on scroll or resize
    const handleEvents = () => AOS.refresh();
    window.addEventListener('scroll', handleEvents);
    window.addEventListener('resize', handleEvents);

    return () => {
      window.removeEventListener('scroll', handleEvents);
      window.removeEventListener('resize', handleEvents);
    };
  }, []);

  return (
    <div className="w-full lg:flex lg:justify-center">
      {/* Title */}
      <div className='absolute top-[50px] left-1/2 transform -translate-x-1/2 lg:top-[980px] lg:left-[48%] lg:transform-none z-20'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-orange-600 font-bold text-center lg:text-left'>
          <TrueFocus
            sentence="About Me"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </h1>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-[1700px] lg:w-[1700px] min-h-[600px] lg:h-180 backdrop-blur-sm mt-[120px] lg:mt-49 mx-4 lg:mx-0 rounded-2xl border border-orange-600 relative lg:top-[-70px]'>
        
        {/* Mobile Layout */}
        <div className="lg:hidden p-6 pt-16">
          {/* Image - Mobile */}
          <div 
            className='w-full flex justify-center mb-8'
            data-aos="zoom-in"
          >
            <img 
              src={img3} 
              alt="Profile" 
              className='w-48 sm:w-64 h-auto rounded-2xl rotate-3 shadow-lg' 
            />
          </div>

          {/* Text - Mobile */}
          <div 
            data-aos="flip-left"
          >
            <p className='text-white font-serif font-normal text-sm sm:text-base leading-relaxed text-left'>
              Hi, I'm Yasith — a UI/UX Designer and Front-End Developer with a passion for crafting intuitive, pixel-perfect digital experiences.<br/><br/>
              I blend design thinking with code (HTML, CSS, JavaScript, React) to build responsive, user-centric solutions. From wireframes to live prototypes, I focus on solving problems—not just making things look good, but work brilliantly.<br/><br/>
              🔹 Skills: UI/UX Design | Front-End Dev | Prototyping | Responsive Design<br/><br/>
              🔹 Tools: Figma, Adobe XD, React, VS Code, Git<br/><br/>
              Let's collaborate and create something meaningful!
            </p>

            {/* Download CV Button - Mobile */}
            <div className='mt-6'>
              <Magnet padding={50} disabled={false} magnetStrength={3}>
                <a
                  href={cvFile}
                  download="Yasith_Pramodya_CV.pdf"
                  className='bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-lg transition duration-300 text-sm sm:text-base inline-block'
                >
                  Download My CV
                </a>
              </Magnet>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden lg:block">
          {/* Image */}
          <div
            className='w-[400px] absolute top-[26%] left-[70%] rotate-12'
            data-aos="zoom-in"
          >
            <img src={img3} alt="Profile" className='rounded-2xl' />
          </div>

          {/* Text */}
          <div
            className='w-[900px] absolute left-[130px] top-[90px]'
            data-aos="flip-left"
          >
            <p className='text-white font-serif font-normal text-[30px]'>
              Hi, I'm Yasith — a UI/UX Designer and Front-End Developer with a passion for crafting intuitive, pixel-perfect digital experiences.<br/><br/>
              I blend design thinking with code (HTML, CSS, JavaScript, React) to build responsive, user-centric solutions. From wireframes to live prototypes, I focus on solving problems—not just making things look good, but work brilliantly.<br/><br/>
              🔹 Skills: UI/UX Design | Front-End Dev | Prototyping | Responsive Design<br/><br/>
              🔹 Tools: Figma, Adobe XD, React, VS Code, Git<br/><br/>
              Let's collaborate and create something meaningful!
            </p>

            {/* Download CV Button */}
            <div className='mt-6'>
              <Magnet padding={50} disabled={false} magnetStrength={3}>
                <a
                  href={cvFile}
                  download="Yasith_Pramodya_CV.pdf"
                  className='bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 text-[20px]'
                >
                  Download My CV
                </a>
              </Magnet>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;