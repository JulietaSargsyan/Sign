'use client'

import { useState } from "react";
import IntroPage from "../components/intro/IntroPage";
import Section from "../components/section/Section";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button/Button";

export default function HomePage() {
  // const [showIntro, setShowIntro] = useState(true);

  // const handleAnimationEnd = () => {
  //   setShowIntro(false);
  // };

  return (
    <>
      {/* {showIntro && <IntroPage onAnimationEnd={handleAnimationEnd} />} */}
        <Section sectionName='heroSection'  id='heroSection'>
          <div className="heroSection-container">
            <p className="hip">hello there! we&apos;re a</p>
            <h2 className="title">design studio</h2>
            <p className="description">that specializes in giving your startup or existing business a bold, stylish, fresh, and competitive look. If you&apos;re<br /> skeptical about our claims, why not take a look at
            </p>
            <div className="starShape-container">
              <Image src='/whitestarshape.png' alt="flkfldf" width={61} height={85} className="star-shape" />
              <Image src='/whiterounds.png' alt='ldk'  width={61} height={50} className="star-round" />
            </div>
            <Button theme='dark'/>
          </div>
        </Section>
        <Section theme='light' sectionName='whoWeAreSection' id='whoWeAreSection'>
          <div className="whoWeAreSection__container">
            <p className="upTitle" style={{color: 'black'}}>We&apos;re creative professionals driving<br /> brands to the</p>
            <h2 className="title" style={{color: 'black'}}>young & bold</h2>
            <p className="desc">Are You Keeping Up?</p>
            <div className="whoWeAreSection__button-container">
              <Button theme='light'/>
            </div>
          </div>
          <div className="whoWeAreSection__image-container">
            <Image src='/menWorking.png' width={612} height={690} alt="" ></Image>
          </div>
        </Section>
        <Section theme='light' sectionName='whatWeveDoneSection' id='whatWeveDoneSection'>
          <div>
            <Link href=''>
              <Image src='/portfolio1.png' alt="brandName" width={611} height={374}/>
              <p>Restart Garden</p>
            </Link>
            <Link href=''>
              <Image src='/portfolio2.png' alt="brandName" width={611} height={374}/>
              <p>Restart Garden</p>
            </Link>
          </div>
          <div>
            <Link href=''>
              <Image src='/portfolio3.png' alt="brandName" width={611} height={374}/>
              <p>Restart Garden</p>
            </Link>
            <Link href=''>
              <Image src='/portfolio4.png' alt="brandName" width={611} height={374}/>
              <p>Restart Garden</p>
            </Link>
          </div>
        </Section>
        <Section theme='light' id='whatWeCanDoSection'>what we cn do</Section>
    </>
  );
}
