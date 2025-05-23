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
  title: "Sign Digital Studio",
  description: "Design studio, website development, logo creation",
  keywords: "web design, ui/ux, logo, frontend, template, web development"
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
