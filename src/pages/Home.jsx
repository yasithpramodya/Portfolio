import React, { useEffect } from 'react';
import img1 from '../assets/profile_img.svg';
import img2 from '../assets/pro1_img.png';
import { TypeAnimation } from 'react-type-animation';
import ShinyText from '../animation/Shainy';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: true, // Animation happens only once
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 50,
    });
  }, []);

  return (
    <div className="w-full overflow-x-auto lg:overflow-x-hidden lg:flex lg:justify-center">
      <div 
        className='flex backdrop-blur-sm mt-20 rounded-2xl border border-orange-600 relative overflow-visible'
        style={{ 
          width: '1700px', 
          minWidth: '1700px', 
          height: '800px'
        }}
      >
        
        {/* Image with Enhanced AOS */}
        <div
          className="flex absolute top-[-22%] right-[33%] z-10"
          data-aos='zoom-in-right'
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-out-back"
        >
          <img 
            src={img2}
            alt="Profile"
            className="w-240 h-240 object-contain"
            data-aos="bounce"
            data-aos-delay="2000"
            data-aos-duration="1000"
            onError={(e) => {
              console.log('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully')}
          />
        </div>

        {/* Text Section with Enhanced AOS */}
        <div
          className='absolute top-[4.4%] left-[52%] font-bold font-serif'
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Hi */}
          <h1 
            className='text-white text-8xl'
            data-aos="slide-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-out-quart"
          >
            Hi
          </h1>
          
          {/* I'm */}
          <h1 
            className='text-white text-8xl pt-6'
            data-aos="slide-right"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease-out-quart"
          >
            I'm,
          </h1>
          
          {/* Yasith */}
          <h1 
            className='text-[160px] pt-9'
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1500"
            data-aos-easing="ease-out-bounce"
          >
            <ShinyText text="Yasith" disabled={false} speed={5} className='custom-class' />
          </h1>
          
          {/* pramodya */}
          <h1 
            className='text-orange-600 text-shadow-white text-9xl pt-5'
            data-aos="slide-up"
            data-aos-delay="1000"
            data-aos-duration="1200"
            data-aos-easing="ease-out-back"
          >
            pramodya
          </h1>
          
          {/* Type Animation */}
          <h1 
            className='text-shadow-white text-white text-4xl pt-15'
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <TypeAnimation
              sequence={[
                'Front-end Developer',
                1000,
                'UI/UX Designer ',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
        </div>

        {/* Decorative Animated Elements */}
        <div
          className="absolute top-8 left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-orange-600/40 rounded-full"
          data-aos="rotate-in"
          data-aos-delay="1400"
          data-aos-duration="2000"
        ></div>
        
        <div
          className="absolute bottom-8 right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-orange-600/30 rounded-full"
          data-aos="rotate-in"
          data-aos-delay="1600"
          data-aos-duration="2000"
        ></div>
        
        <div
          className="absolute top-1/2 left-2 w-1 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-orange-600/60 to-transparent rounded-full"
          data-aos="slide-right"
          data-aos-delay="1800"
          data-aos-duration="1000"
        ></div>
        
        <div
          className="absolute bottom-10 left-1/4 w-8 h-8 sm:w-10 sm:h-10 bg-orange-600/20 rounded-full blur-sm"
          data-aos="fade-in"
          data-aos-delay="2000"
          data-aos-duration="1500"
        ></div>
              </div>
    </div>
  );
}

export default Home;