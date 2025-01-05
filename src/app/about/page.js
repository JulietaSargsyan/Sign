import React from 'react'
import './style.css'

const AboutPage = () => {
  return (
    <section className='about-us-section'>
      <h2 className="title" style={{color: 'black'}}>what we do</h2>
      <div className='services-list-container'>
        <div className='services-list-container__item'>
          <h3>Social Media Marketing</h3>
          <p>If you want to reach thousands of people in a day then it&apos;s time to bring your business to social media platforms. DMS will help you create, manage and improve your social media presence. Our team of creative experts will design strategies and campaigns that will show your business in the best light and increase your brand awareness. You will notice the progress very quickly and be able to monitor it through our monthly reports.</p>
        </div>
        <div className='services-list-container__item'>
          <h3>UI/UX Web Design</h3>
          <p>Our UI/UX web design services focus on creating visually stunning, user-friendly, and intuitive websites that deliver exceptional digital experiences. We blend creativity with functionality to craft responsive designs that engage users and enhance usability. From wireframes to prototypes, we prioritize user-centric design principles to ensure seamless navigation, accessibility, and aesthetics that align with your brand&apos;s identity. Let us transform your vision into a captivating web presence that drives engagement and boosts conversions.</p>
        </div>
        <div className='services-list-container__item'>
          <h3>Web Development</h3>
          <p>Our web development services deliver high-performance, scalable, and visually appealing websites tailored to your business needs. From dynamic e-commerce platforms to custom web applications, we combine cutting-edge technologies with clean, efficient code to create seamless digital experiences. Whether you&apos;re building from scratch or enhancing an existing site, our team ensures responsive design, fast load times, and robust functionality. Let us turn your ideas into a fully optimized, user-friendly website that drives results and sets you apart online.</p>
        </div>
        <div className='services-list-container__item'>
          <h3>Branding</h3>
          <p>Our branding services help define and elevate your brand&apos;s identity, creating a lasting impression that resonates with your audience. From logo design and brand messaging to visual guidelines and storytelling, we craft cohesive and memorable brand strategies that reflect your values and vision. Whether you&apos;re launching a new brand or refreshing an existing one, we ensure consistency across all touchpoints to build trust, recognition, and loyalty. Let us bring your brand to life and make it stand out in a competitive market.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;