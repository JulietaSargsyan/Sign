'use client'

import React, { useEffect } from 'react'
import Image from "next/image";

import { useSection } from '../../context/SectionContext';

import './style.css'
import Section from '@/src/components/section/Section';
import Button from '@/src/components/button/Button';

import teamPhoto from '../../assets/Lusin&Juli.png'
import Card from '@/src/components/teamMemberCard/Card';
import Lusine from '../../assets/Lusine.png'
import Harutyun from '../../assets/Harutyun.png'
import Julieta from '../../assets/Julieta.png'

const AboutPage = () => {
  const { currentSection, setCurrentSection } = useSection();
  
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section'));
    let isScrolling = false;
  
    const handleWheel = (e) => {
      if (isScrolling) return;
  
      const currentScroll = window.scrollY;
      const direction = e.deltaY > 0 ? 'down' : 'up';
  
      const currentSectionIndex = sections.findIndex(
        (section) =>
          currentScroll + 10 >= section.offsetTop &&
          currentScroll < section.offsetTop + section.offsetHeight
      );
  
      let targetSection;
      if (direction === 'down') {
        targetSection = sections[currentSectionIndex + 1];
      } else {
        targetSection = sections[currentSectionIndex - 1];
      }
  
      if (targetSection) {
        isScrolling = true;
        targetSection.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(targetSection.id);
  
        setTimeout(() => {
          isScrolling = false;
        }, 100);
      }
    };
  
    window.addEventListener('wheel', handleWheel, { passive: true });
  
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <Section sectionName='about-us-section'  id='about-us-section'>
        <div className='teamPhotoContainer'>
          <Image 
            src={teamPhoto} 
            alt='Team photo'
            sizes="100%"
          />
        </div>
        <div className='introductionContainer'>
          <p className="hip">here we are</p>
            <h2 className="title">nice to <br/>meet you</h2>
            <p className="description">that specializes in giving your startup or existing business a bold, stylish, fresh, and competitive look. If you&apos;re<br /> skeptical about our claims, why not take a look at
            </p>
        </div>
      </Section>

      <Section theme='light' sectionName='meetTheTeam-section'>
        <div className='meetTheTeam-section__description'>
          <p className='meetTheTeam-section__description-title'>Meet The Team<br/>Family Members</p>
          <p className='meetTheTeam-section__description-text'>If you want to reach thousands of people in a day then it’s time to bring your business to social media platforms. DMS will help you create, manage and improve your social media presence. Our team of creative experts will design strategies and campaigns that will show your business in the best light and increase your brand awareness. You will notice the progress very quickly and be able to monitor it through our monthly reports.</p>
        </div>
        <div className='teamMemberCards'>
          <Card image={Lusine} name='Lusin Sargsyan'       position='Chief Executive Officer/Art Director'/>
          <Card image={Harutyun} name='Harutyun Yorghanjyan' position='Project Manager'/>
          <Card image={Julieta} name='Julieta Sargsyan' position='Chief Technology Officer'/>
        </div>
      </Section>

      <Section theme='light' sectionName='whatWeCanDo-section'>
        <div className="whatWeCanDo-section__container">
          <p className="upTitle" style={{color: 'black'}}>We&apos;re creative professionals driving<br /> brands to the</p>
          <h2 className="title" style={{color: 'black'}}>what we do</h2>
          <p className="desc">Are You Keeping Up?</p>
        </div>
        <div className="whatWeCanDo-section__listsSection">
          <div className="lists">
            <ul>
              <li>Social Media Marketing</li>
              <li>UI/UX Web Design</li>
              <li>Web Development</li>
            </ul>
            <ul>
              <li>Branding</li>
              <li>Graphic Design</li>
              <li>Logo Design</li>
            </ul>
          </div>
          <Button  theme='light' text='see all services' href='/services'/>
        </div>
      </Section>
    </>
  )
}

export default AboutPage;