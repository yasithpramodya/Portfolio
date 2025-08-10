import React, { useEffect, useRef } from "react";
import FuzzyText from "../animation/Fuzzytext";
import Fb from '../assets/facebook.png';
import Inster from '../assets/instagram.png';
import Git from '../assets/github.png';
import Lindin from '../assets/linkedin.png';
import Whatsapp from '../assets/whatsapp.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i40wawl", // Replace with your EmailJS service ID
        "template_5tcvzyt", // Replace with your EmailJS template ID
        form.current,
        "XERffU2nL_yMP6tU_"  // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center px-4 py-16 max-w-3xl mx-auto">
      {/* Heading */}
      <div
        className="mb-12 max-w-full"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-orange-600 font-bold  leading-tight ms-[-100px]">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.6} enableHover={true}>
            Contact Me
          </FuzzyText>
        </h1>
      </div>

      {/* Social Media Icons */}
      <div
        className="flex justify-center flex-wrap gap-6 mb-12"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        {[
          { href: "https://www.facebook.com/share/19B9B49nCG/?mibextid=wwXIfr", img: Fb, alt: "Facebook", delay: 400 },
          { href: "https://www.instagram.com/yazith_pramodya?igsh=dzVibnVhc3p3aHds&utm_source=qr", img: Inster, alt: "Instagram", delay: 500 },
          { href: "https://github.com/yasithpramodya/Yasith_Pramodya", img: Git, alt: "GitHub", delay: 600 },
          { href: "https://www.linkedin.com/in/yasith-pramodya-madhuranga-084a6a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: Lindin, alt: "LinkedIn", delay: 700 },
          { href: "https://whatsapp.com/dl/", img: Whatsapp, alt: "WhatsApp", delay: 800 }
        ].map(({ href, img, alt, delay }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay={delay}
            data-aos-duration="800"
            className="transition hover:bg-gray-500 rounded-full bg-orange-600 p-3 md:p-4"
          >
            <img
              src={img}
              alt={alt}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg backdrop-blur-md shadow-lg rounded-lg p-6 sm:p-8 border border-orange-600"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1200"
      >
        {/* Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-300 font-semibold mb-1 text-sm sm:text-base">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="user_name"
            required
            className="w-full px-3 py-2 sm:py-3 border rounded-lg border-orange-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-300 font-semibold mb-1 text-sm sm:text-base">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            required
            className="w-full px-3 py-2 sm:py-3 border rounded-lg border-orange-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label htmlFor="message" className="block text-gray-300 font-semibold mb-1 text-sm sm:text-base">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-3 py-2 sm:py-3 border rounded-lg border-orange-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition text-base sm:text-lg"
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-duration="800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
