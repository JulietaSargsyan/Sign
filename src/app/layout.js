'use client'

import { useState } from "react";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
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
    url: "https://signdigitalstudio.com",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  const handleToggle = (close = null) => {
    close ? setOpen(false) : setOpen(!open);
  };

  const closeNavBar = (close = null) => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <body className={notoSans.variable}>
        <CustomCursor />
        <Header  open={open} handleClick={closeNavBar}/>
        <SideBar open={open} handleClick={handleToggle}/>
        <NavBar  open={open} handleClick={handleToggle}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
