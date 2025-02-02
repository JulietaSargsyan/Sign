'use client'

import { useEffect, useState } from "react";

import Section from '@/src/components/section/Section'
import Button from '@/src/components/button/Button'
import './style.css'

const ContactPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Section theme='light' sectionName='contact-us-page' id='contact-us-page'>
          <div className="contact-us-page__container">
            <p className="upTitle" style={{color: 'black'}}>In Case That You Have AN IDEA, STARTUP OR<br/> EXISTING BUSINESS AND NEED CONSULTATION </p>
            <h2 className="title" style={{color: 'black'}}>Contact us</h2>
            <p className="desc">And be sure that we can  provide best solution for you</p>
            <div className="contact-us-page__button-container">
                <Button theme='light' text='Download client briff' href='/Offer.pdf'/>
            </div>
          </div>
          
        </Section>
  )
}

export default ContactPage