'use client'

import { useState, useEffect } from "react";
import Head from "next/head";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { SectionProvider } from '../context/SectionContext';
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import SideBar from "../components/sideBar/SideBar";
import CustomCursor from "../components/customCursor/CustomCursor";
import NavBar from "../components/navigation/NavBar";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

const metadata = {
  title: "Sign Digital Studio - Web Development, UI/UX & Branding Experts",
  description: "Sign Digital Studio is a full-service digital agency offering custom website development, UI/UX design, branding, logo creation, SMM, and creative solutions to help businesses thrive online.",
  keywords: "web design, ui/ux design, website development, frontend development, responsive design, logo design, branding, digital marketing, social media marketing, SMM, graphic design, creative agency, user experience, user interface, Figma, React, portfolio websites, SEO services, web templates",
  author: "Sign Digital Studio",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  og: {
    title: "Sign Digital Studio - Creative Web & Branding Solutions",
    description: "Explore our portfolio of web development, UI/UX design, logo creation, and digital marketing projects. Let's build something amazing together.",
    image: "../assets/preview-image.png",
    url: "https://sign-digital.com",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(hasTouch);
    }
  }, []);

  const handleToggle = (e, close = null) => {
    close ? setOpen(false) : setOpen(!open);
  };

  const closeNavBar = (close = null) => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <SectionProvider>
        <body className={notoSans.variable}>
          <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="robots" content={metadata.robots} />
            <meta name="viewport" content={metadata.viewport} />
            {/* Open Graph meta tags */}
            <meta property="og:title" content={metadata.og.title} />
            <meta property="og:description" content={metadata.og.description} />
            <meta property="og:image" content={metadata.og.image} />
            <meta property="og:url" content={metadata.og.url} />
            <meta property="og:type" content={metadata.og.type} />
          </Head>
          {!isTouch && <CustomCursor />}
          <Header  open={open} handleClick={closeNavBar}/>
          <SideBar open={open} handleClick={handleToggle} isTouch={isTouch}/>
          <NavBar  open={open} handleClick={handleToggle}/>
          <main>{children}</main>
          <Footer />
        </body>
      </SectionProvider>
    </html>
  );
}
