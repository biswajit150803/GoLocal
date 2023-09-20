import React, { useEffect, useState } from "react";
import "./home.css";
import Footer from "../Footer/Footer";
// import Navbar from '../Navbar/Navbar'
import Categories from "../categories/categories";
import "react-responsive-modal/styles.css";
import Carousel from "react-bootstrap/Carousel";
import Map from "../Map/Map";
import Login from "../../components/Login";
import Navbare from "../../components/Navbare/Navbare";
import CCurrentorders from "../CCurrentorders/CCurrentorders";
import CPastorders from "../CPastorders/CPastorders";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { RxCross2 } from "react-icons/rx";
import Video from "../Video/Video";
import FAQC from "../../components/faq/FAQC";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  function myGreeting() {
    onOpenModal();
    // setApp("toaste");
  }
  React.useEffect(() => {
    setTimeout(myGreeting, 1000);
  }, []);

  const [success, setS] = React.useState(false);
  // const [note,setNotes]=React.useState();
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = React.useState(
    myStorage.getItem("Customeruser")
  );
  function logged_in(data) {
    console.log(data);
    setS(data);
  }
  useEffect(() => {
    if (currentUsername) {
      setS(true);
    } else {
      setS(false);
    }
  }, [currentUsername]);
  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("Customeruser");
    window.location.reload();
  };
  const [tab, setTab] = React.useState(0);
  function changeTab(data) {
    setTab(data);
  }
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  function handleChange(e) {
    setOption(e.target.value);
  }
  function handleRedirect() {
    if (option === "customer") {
      onCloseModal();
    } else if (option === "business") {
      navigate("/business");
    }
  }
  return (
    <>
      <>
        {success ? (
          <>
            <div className="Appo" style={{ overflowX: "hidden" }}>
              <Navbare
                user={currentUsername}
                logout={handleLogout}
                changeTab={changeTab}
              />
              {tab === 0 ? (
                <>
                  <header className="App-header">
                    <div className="body">
                      <section className="contain">
                        <div className="top-card banner-msg-box form_container msg">
                          <div className="top-Header">
                            Your own cart, at your location!
                          </div>
                          <div className="top-middle">
                            Craving for some street food or looking for nearby
                            local vendors? We got you covered!
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
                                src="./bakery1.jpg"
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-900 home-im"
                                src="./veg1.jpg"
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-900 home-im"
                                src="./fish1.jpg"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </section>
                    </div>
                  </header>
                  <Map user={currentUsername} />
                  <Categories />
                  <div className="customervideo">
                    <Video
                      url="https://www.youtube.com/watch?v=LapOdjjjJgQ"
                      text="Want to know on how to use our platform?"
                    />
                  </div>
                  <FAQC />
                </>
              ) : tab === 1 ? (
                <>
                  {" "}
                  <CCurrentorders user={currentUsername} />{" "}
                </>
              ) : (
                <>
                  <CPastorders user={currentUsername} />
                </>
              )}
              {/* <About /> */}

              <div className="Footer">
                <Footer />
              </div>
            </div>
          </>
        ) : (
          <>
            <Login
              setShowLogin={logged_in}
              setCurrentUsername={setCurrentUsername}
              myStorage={myStorage}
            />
          </>
        )}
      </>
    </>
  );
};

export default HomePage;
