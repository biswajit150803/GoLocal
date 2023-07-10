import './GetStarted.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next'

const GetStarted = (props) => {
    const { t } = useTranslation(); 
  
    // const [lang, setLang] = React.useState(props.lang);
  
  return (
    <div className='outslid'>
        
        <Carousel className="slid" touch={true}>
      <Carousel.Item>
      <div  className='EachGS'>
        <img
          className="imgGS"
          src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1678458342/carousel1_pjtikp.jpg"
          alt="First slide"
        />
        <div className='ContentGS'>
          <h3 className='HeadingGS'>{t('s1')}</h3>
          <p className='BodyGS'>{t('body1')}</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div  className='EachGS'>
        <img
          className="imgGS"
          src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1678458342/carousel2_bgzuio.jpg"
          alt="Second slide"
        />

        <div className='ContentGS'>
          <h3 className='HeadingGS'>{t('s2')}</h3>
          <p className='BodyGS'>{t('body2')}</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div  className='EachGS'>
        <img
          className="imgGS"
          src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1678459895/carousel3_xtvaxd.png"
          alt="Third slide"
        />

        <div className='ContentGS'>
          <h3 className='HeadingGS'>{t('s3')}</h3>
          <p className='BodyGS'>
          {t('body3')}
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div  className='EachGS'>
        <img
          className="imgGS"
          src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1678459895/carousel4_cgtjws.jpg"
          alt="Third slide"
        />

        <div className='ContentGS'>
          <h3 className='HeadingGS'>{t('s4')}</h3>
          <p className='BodyGS'>
          {t('body4')}
          </p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div  className='EachGS'>
        <img
          className="imgGS"
          src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1678459896/carousel5_gnamzo.jpg"
          alt="Third slide"
        />

        <div className='ContentGS'>
          <h3 className='HeadingGS'>{t('s5')}</h3>
          <p className='BodyGS'>
          {t('body5')}
          </p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default GetStarted