import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { notFound } from 'next/navigation';

import './style.css'

export function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export default function PortfolioItemPage({ params }) {
  const { slug } = params;

  const item = portfolioData.find((item) => item.slug === slug);

  if (!item) {
    notFound(); // Show 404 page
  }

  return (
    <div className='client-container'>
      <div className='client-container__heading'>
        <div className='client-container__description'>
          <h2 className='client-container__description-title'>{item.title}</h2>
          <p  className='client-container__description-text'>{item.content}</p>
          <div className='client-container__description-data'>
            <div className='client-container__description-data-item'>
              <p className='client-container__description-data-title'>Client</p>
              <p className='client-container__description-data-text'>{item.client}</p>
            </div>
            <div className='client-container__description-data-item'>
              <p className='client-container__description-data-title'>Category</p>
              <p className='client-container__description-data-text'>{item.category}</p>
            </div>
            <div className='client-container__description-data-item'>
              <p className='client-container__description-data-title'>Date/Location</p>
              <p className='client-container__description-data-text'>{item.date}/{item.location}</p>
            </div>
          </div>
        </div>
        <div className='client-container__image'>
          <Image src={item.primaryImage} alt={item.name} fill/>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${item.bannerImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '50vh',
          width: '100%',
          position: 'relative',
        }}>
        
      </div>
      <div className='challenge'>
        <h3>The Challenge</h3>
        <p>{item.challenge}</p>
      </div>
      <div className='gallery-container'>
        <div className='gallery-item'><Image src={item.images[8]} alt={item.name} fill/></div>
        <div className='gallery-item'><Image src={item.images[7]} alt={item.name} fill/></div>
        <div className='gallery-item'><Image src={item.images[6]} alt={item.name} fill/></div>
      </div>
      <div className='challenge'>
        <h3>The Results</h3>
        <p>{item.result}</p>
      </div>
      <div className='gallery-container'>
        <div className='gallery-item'><Image src={item.images[5]} alt={item.name} fill/></div>
        <div className='gallery-item'><Image src={item.images[4]} alt={item.name} fill/></div>
        <div className='gallery-item'><Image src={item.images[3]} alt={item.name} fill/></div>
      </div>
      <div className='gallery-container gallery-container-last'>
        <div className='gallery-item'><Image src={item.images[2]} alt={item.name} fill/></div>
        <div className='gallery-item'><Image src={item.images[1]} alt={item.name} fill/></div>
        <div className='gallery-item'><Image src={item.images[0]} alt={item.name} fill/></div>
      </div>
    </div>
  );
}