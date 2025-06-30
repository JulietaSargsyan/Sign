'use client'

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { useSection } from '../context/SectionContext';

import Section from "../components/section/Section";
import Button from "../components/button/Button";
import StarShape from "../components/starShape/StarShape";

import menWorking from '../assets/mensWorking.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';

export default function HomePage() {
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
        }, 50);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
        <Section sectionName='heroSection'  id='heroSection'>
          <div className="heroSection-container">
            <p className="hip">hello there! we&apos;re a</p>
            <h2 className="title">design studio</h2>
            <p className="description">that specializes in giving your startup or existing business a bold, stylish, fresh, and competitive look. If you&apos;re<br /> skeptical about our claims, why not take a look at
            </p>
            <div className="btnStarShape">
              <div className="heroSection__btns-container">
                <Button theme='dark' text='see what we do' href='#whatWeveDoneSection' transparent='true'/>
                <Button theme='dark' text='fill client brief' href='https://lusinesargsyan845904.typeform.com/to/nVt3yoYM' openNewTab='true'/>
              </div>
              <StarShape />
            </div>
            
          </div>
        </Section>
        <Section theme='light' sectionName='whoWeAreSection' id='whoWeAreSection'>
          <div className="whoWeAreSection__container">
            <p className="upTitle" style={{color: 'black'}}>WE HELP BRANDS STAND OUT WITH</p>
            <h2 className="title" style={{color: 'black'}}>strategy and style</h2>
            <p className="desc">Ready to Lead the Change?</p>
            <div className="whoWeAreSection__button-container">
              <Button theme='light' text='see what we do' href='#whatWeveDoneSection'/>
            </div>
          </div>
          <div className="whoWeAreSection__image-container">
            <Image src={menWorking} fill alt="" ></Image>
          </div>
        </Section>
        <Section theme='light' sectionName='whatWeveDoneSection' id='whatWeveDoneSection'>
          <div>
            <Link href='' className="portfolioItem">
              <Image src={portfolio1} alt="brandName" width={600} height={350}/>
              <p>Restart Garden</p>
            </Link>
            <Link href=''>
              <Image src={portfolio2} alt="brandName" width={600} height={350}/>
              <p>Restart Garden</p>
            </Link>
          </div>
          <div>
            <Link href=''>
              <Image src={portfolio3} alt="brandName" width={600} height={350}/>
              <p>Restart Garden</p>
            </Link>
            <Link href=''>
              <Image src={portfolio4} alt="brandName" width={600} height={350}/>
              <p>Restart Garden</p>
            </Link>
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
  );
}
