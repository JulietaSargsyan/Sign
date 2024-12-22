import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import SideBar from "../components/sideBar/SideBar";
import CustomCursor from "../components/customCursor/CustomCursor";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const metadata = {
  title: "Sign Digital Studio",
  description: "Design studio, website development, logo creation",
  keywords: "web design, ui/ux, logo, frontend, template, web development"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.variable}>
        <CustomCursor />
        <Header />
        <SideBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
