import React from "react";
import Navbare from "../../components/Navbare/Navbare";
import Carousel from "react-bootstrap/Carousel";
import About from "../../components/About/About";
import Footer from "../Footer/Footer";
import { Category } from "@material-ui/icons";
import CatMap from "../CategoryMap/CatMap";
import FAQC from "../../components/faq/FAQC";
const Cate = () => {
  const [s1, sets1] = React.useState(
    "https://res.cloudinary.com/dqy7m95yz/image/upload/v1677339876/bakerry_yzunbc.png"
  );
  const [s2, sets2] = React.useState(
    "https://res.cloudinary.com/dqy7m95yz/image/upload/v1677352787/veg_jq7mfv.png"
  );
  const [s3, sets3] = React.useState(
    "https://res.cloudinary.com/dqy7m95yz/image/upload/v1677342472/icee_cream_wxgmak.png"
  );
  const [text1, setText1] = React.useState("Your own cart, at your location!");
  const [text2, setText2] = React.useState("Craving for some street food or looking for nearby local vendors? We got you covered!");
  const [success, setS] = React.useState(false);
  //const [note,setNotes]=React.useState();
  const myStorage = window.localStorage;
  const [currentCat, setCurrentCat] = React.useState(
    myStorage.getItem("Category")
  );

  const [currentUsername, setCurrentUsername] = React.useState(
    myStorage.getItem("Customeruser")
  );
  //   function logged_in(data)
  //   {

  //     console.log(data);
  //     setS(data);
  //   }
  React.useEffect(() => {
    if (currentUsername) {
      setS(true);
    } else {
      window.location.replace("https://evendor-ezvv.onrender.com/");
      setS(false);
    }
  }, [currentUsername]);
  React.useEffect(() => {
    if (currentCat === "Ice-Cream-Seller") {
      // sets1("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655970/ice_3_enrifc.png");
      // sets2("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655971/ice_2_xcfuak.png");
      // sets3("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655971/ice_1_iw7yxf.png");
      sets1("./ice1.jpg");
      sets2("./ice2.jpg");
      sets3("./ice3.jpg");
      setText1("Melt your mood with frozen desserts");
      setText2("We got you covered! Find the nearest ice-cream seller and enjoy your favourite flavour!");
    }
    if(currentCat === "Street-Food-Vendor") {
      // sets1("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655968/street_2_vojhdh.png");
      // sets2("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655968/street_1_jgx9e2.png");
      // sets3("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655969/street_3_ob4qv8.png");
      sets1("./street1.jpg");
      sets2("./street2.jpg");
      sets3("./street3.jpg");
      setText1("Savour your taste buds with the flavours of streets. ");
      setText2("We got you covered! Find the nearest street food vendor and enjoy your favourite street food!");
    }
    if (currentCat === "Bakery") {

      sets1("./bakery1.jpg");
      sets2("./bakery2.jpg");
      sets3("./bakery3.jpg");
      setText1("Bake your day with the best bakery products");
      setText2("We got you covered! Find the nearest bakery and enjoy your favourite bakery products!");
    }
    if(currentCat === "Cobbler") {
      sets1("./cobbler1.jpg");
      sets2("./cobbler2.jpg");
      sets3("./cobbler3.jpg");
      setText1("Get your shoes repaired at your doorstep");
      setText2("We got you covered! Find the nearest cobbler and get your shoes repaired!");
    }
    if (currentCat === "Recycle") {
      setText1("Recycle waste at your doorstep!");
      setText2("We got you covered! Find the nearest recycle vendor and recycle your waste!");
    }
    if (currentCat === "All-in-one-store"){
      sets1("./all1.jpg");
      sets2("./all2.jpg");
      sets3("./all3.jpg");
      setText1("One place for all your needs");
      setText2("We got you covered! Find the nearest all-in-one store and get all your needs fulfilled!");
    }
    if (currentCat === "Electrician") {
      // sets1("https://res.cloudinary.com/dcyfkgtgv/image/upload/v1688655976/electrician_2_w5wx9r.jpg");
      sets1("./electrician1.jpg");
      sets2("./electrician3.jpg");
      sets3("./electrician2.jpg");
      setText1("Don’t let the lights go out anymore");
      setText2("We got you covered! Find the nearest electrician and get your electrical problems solved!");
    }
    if (currentCat === "Fish-Seller") {
      sets1("./fish1.jpg");
      sets2("./fish2.jpg");
      sets3("./fish3.jpg");
      setText1("Now Sea food at your doorstep");
      setText2("We got you covered! Find the nearest fish seller and enjoy your favourite sea food!");
    }
    if (currentCat === "Vegetables/Fruits-Seller") {
      sets1("./veg1.jpg");
      sets2("./veg2.jpg");
      sets3("./veg3.jpg");
      setText1("Eat fresh, stay healthy.");
      setText2("We got you covered! Find the nearest vegetable/fruit seller and enjoy your favourite fruits and vegetables!");
    }
  }, []);
  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("Customeruser");
    window.location.reload();
  };
  return (
    <div>
      <Navbare user={currentUsername} logout={handleLogout} />
      <header className="App-header">
        <div className="body">
          <section className="contain">
            <div className="top-card banner-msg-box form_container msg">
              <div className="top-Header">{text1}</div>
              <div className="top-middle">
                {text2}
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
                    src={s1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src={s2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-900 home-im"
                    src={s3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>
      </header>
      <CatMap category={currentCat} />
      <Category />
      <FAQC />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cate;