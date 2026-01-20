'use client'

import React, { useEffect } from 'react'
import Image from "next/image";

import { useSection } from '../../context/SectionContext';

import './style.css'
import Section from '@/src/components/section/Section';
import Button from '@/src/components/button/Button';

// import teamPhoto from '../../assets/Lusin&Juli.png'
import teamPhoto from '../../assets/teamPhoto.png'
import Card from '@/src/components/teamMemberCard/Card';
import dummyUser1 from '../../assets/dummyUser1.png';
import dummyUser2 from '../../assets/dummyUser2.png';
import dummyUser3 from '../../assets/dummyUser3.png';

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
  }, [setCurrentSection]);

  return (
    <>
      <Section sectionName='about-us-section'  id='about-us-section'>
        <div className='teamPhotoContainer'>
          <Image 
            src={teamPhoto} 
            alt='Team photo'
            className='teamPhoto'
            fill
          />
        </div>
        <div className='introductionContainer'>
          <p className="hip">here we are</p>
            <h2 className="title">nice to <br/>meet you</h2>
            <p className="description">We&apos;re a team of creative thinkers, strategists, and makers dedicated to helping brands stand out in a crowded world. From concept to execution, we craft digital experiences and visual identities that connect, inspire, and make an impact.</p>
        </div>
      </Section>

      <Section theme='light' sectionName='meetTheTeam-section'>
        <div className='meetTheTeam-section__description'>
          <p className='meetTheTeam-section__description-title'>Meet The Team<br/></p>
          <p className='meetTheTeam-section__description-text'>We&apos;re more than a creative team — we&apos;re your collaborators. We partner with brands, big and small, to bring ideas to life with clarity, creativity, and purpose.</p>
        </div>
        <div className='teamMemberCards'>
          <Card image={dummyUser1} name='John Doe'     position='Chief Executive Officer/Art Director'/>
          <Card image={dummyUser2} name='Jane Doe'     position='Project Manager'/>
          <Card image={dummyUser3} name='Emily Sparks' position='Chief Technology Officer'/>
        </div>
      </Section>

      <Section theme='light' id='whatWeCanDo-section' sectionName='whatWeCanDo-section'>
          <div className="whatWeCanDo-section__container">
            <p className="upTitle" style={{color: 'black'}}>WE&apos;RE TRANSFORMING BRANDS INTO<br />IMPACTFUL EXPERIENCES &</p>
            <h2 className="title" style={{color: 'black'}}>BRINGING IDEAS TO LIFE</h2>
            <p className="desc">Let&apos;s build what&apos;s next — together.</p>
          </div>
          <div className="whatWeCanDo-section__listsSection">
            <div className="lists-container">
              <div className="lists">
                <ul>
                  <li>Digital Marketing</li>
                  <li>Social Media Campaigns</li>
                  <li>Performance Advertising</li>
                </ul>
                <ul>
                  <li>Design & Experience</li>
                  <li>UI/UX Design</li>
                  <li>Creative Web Development</li>
                </ul>
                <ul>
                  <li>Brand Identity</li>
                  <li>Visual Branding</li>
                  <li>Graphic & Logo Design</li>
                </ul>
              </div>
              <Button  theme='light' text='Explore Our Services' href='/services'/>
            </div>
          </div>
        </Section>
    </>
  )
}

export default AboutPage;