import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Achievements from '../components/Achievements';
import ExperienceEducation from '../components/ExperienceEducation';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Navbar from '../components/layout/Navbar';
import AboutMe from '../components/layout/AboutMe';
import Footer from '../components/layout/Footer';

const index = () => {
    return (
  <>
  <Navbar />
  <Hero />
  <AboutMe />
  <Services />
  <Portfolio />
  <Stats />
  <Achievements />
  <ExperienceEducation />
  <Skills />
  <Testimonials />
  <Contact />
  <Blog />
  <Footer />
</>

    );
};

export default index;