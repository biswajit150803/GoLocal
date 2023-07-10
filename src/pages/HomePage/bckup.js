import React from 'react'
import "./home.css";
 import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'
import Categories from "../categories/categories"
import "react-responsive-modal/styles.css";
import Carousel from "react-bootstrap/Carousel";
import Map from "../Map/Map"
import Login from '../../components/Login';
import Navbare from '../../components/Navbare/Navbare';
const HomePage = () => {
  const [success,setS]=React.useState(false);
  const [note,setNotes]=React.useState();
  function logged_in(data)
  {
    setNotes(data);
    console.log(data);
    setS(true);
  }
  return (
    <>{(success)?
    <><div className='Appo'>
    <Navbare user={"sattwik"} email={"abc@gmail.com"} />
        <header className="App-header">
        <div className="body">
          <section className="contain">
            <div className="top-card banner-msg-box form_container msg">
              <div className="top-Header">Your own cart, at your location!</div>
              <div className="top-middle">
                Craving for some street food or looking for nearby local vendors? We got you covered!
              </div>
            </div>
            <div className="slide">
              <Carousel
                className="slide"
                controls={true}
                keyboard={true}
                touch={true}
                interval={3000}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dqy7m95yz/image/upload/v1677339876/bakerry_yzunbc.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dqy7m95yz/image/upload/v1677352787/veg_jq7mfv.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src="https://res.cloudinary.com/dqy7m95yz/image/upload/v1677342472/icee_cream_wxgmak.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>
      </header>
      <Map />
      <Categories />
      <div className="Footer">
        <Footer />
      </div>
    </div></>:
    /* <Login succes={logged_in} /> */
    <Login />}</>
  )
}

export default HomePage