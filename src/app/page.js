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
        <Section sectionName='heroSection'>
          <div className="heroSection-container">
            <p className="hip">hello there! we&apos;re a</p>
            <h1 className="title">design studio</h1>
            <p className="description">that specializes in giving your startup or existing business a bold, stylish, fresh, and competitive look. If you&apos;re<br /> skeptical about our claims, why not take a look at
            </p>
            <div className="starShape-container">
              <Image src='/whitestarshape.png' alt="flkfldf" width={61} height={85} className="star-shape" />
              <Image src='/whiterounds.png' alt='ldk'  width={61} height={50} className="star-round" />
            </div>
            <Button />
          </div>
        </Section>
        <Section theme='light'>
          <p className="">We’re creative professionals driving<br /> brands to the</p>
        </Section>
        <Section theme='light'>what weve done</Section>
        <Section theme='light'>what we cn do</Section>
    </>
  );
}
