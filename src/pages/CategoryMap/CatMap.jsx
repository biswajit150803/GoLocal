import "./app.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useEffect, useState,useRef } from "react";
import { Room } from "@material-ui/icons";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Web3 from "web3";
import WrongNetwork from "../WrongNetwork/WrongNetwork";
import Download from "../Download/Download";
// import Register from "../Register";
// import Login from "../Login";
import AOS from "aos";
import "aos/dist/aos.css";

import HawkersHut from "../../contracts/HawkerHut.json";
import { RxCross2 } from "react-icons/rx";
//import { width } from "@mui/system";

function CatMap(props) {
  AOS.init();
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [tempUser, setTempUser] = useState();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 10,
  });
  //   const [showRegister, setShowRegister] = useState(false);
  //   const [showLogin, setShowLogin] = useState(false);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };
  const [per, Sper] = useState({
    lat: 47.040182,
    long: 17.071727,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      Sper({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  }, []);
 

  useEffect(() => {
    const getPins = async () => {
      try {
        console.log("checkkk" + props.category);
        const options = {
          method: "GET",
          url: "https://hawkerhut-back.onrender.com/api/pins/category",
          params: { Category: props.category },
        };
        axios
          .request(options)
          .then((response) => {
            console.log(response.data);

            setPins(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };
  // var screen=Screen;
  let screenWidth = window.screen.width;
  useEffect(() => {
    console.log(screenWidth);
  }, []);



  ///////////web3///////////////////////////////////

  
  const [customer, setCustomer] = useState(currentUsername);
  const orderRef = useRef();
  const phoneRef = useRef();
  const amountRef = useRef();
  const mesRef = useRef();
  const { ethereum } = window;
  /////////////////hash for payment////////////////////

  function handleAccountsChanged() {
    // Handle new accounts, or lack thereof.
    setCount(count + 1);
  }
  React.useEffect(() => {
    if (ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleAccountsChanged);
    }
  });

  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  useEffect(() => {
    //const provider = new Web3.providers.HttpProvider(Web3.givenProvider);

    async function template() {
      const web3 = new Web3(Web3.givenProvider||"ws://localhost:8545");
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = HawkersHut.networks[networkId];
      const contract = new web3.eth.Contract(
        HawkersHut.abi,
        deployedNetwork.address
      );
      console.log(contract);
      setState({ web3: web3, contract: contract });
    }
    template();
  }, []);

  ////////////////////////////////////////////
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      Sper({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  }, []);
  function hashGenerator() {
    const length = 16;
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const handleOrderSubmit = async () => {
    if (phoneRef.current.value.length !== 10) {
      alert("Enter a valid phone no");
    } else {
    const { contract } = state;
    ////////////////web3 connect and ask payment//////////////////////
    const accountss = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const Hash = hashGenerator();
    console.log(Hash);
    let vale = amountRef.current.value.toString();
    const res = await contract.methods
      .pay(Hash)
      .send({ value: Web3.utils.toWei(vale, "ether"), from: accountss[0] });
    console.log(res);
    const va = res.events.success.returnValues[2].toString();
    alert(
      res.events.success.returnValues[0] +
        "\n Payment: " +
        Web3.utils.fromWei(va, "ether") +
        " Eth"
    );
    if (res.events.success.returnValues[1]) {
      /////////////////if error or denied then cancel order///////////////
      const data = {
        Hash: Hash,
        CUser: props.user,
        HUser: tempUser,
        CPhone: phoneRef.current.value,
        Lat: per.lat,
        Long: per.long,
        Message: mesRef.current.value,
      };

      
        await axios.post(
          "https://hawkerhut-back.onrender.com/api/web3/order",
          data
        );
        console.log(
          "O: " +
            orderRef.current.value +
            " P:" +
            phoneRef.current.value +
            " L:" +
            per.lat +
            " L:" +
            per.long
        );
        onCloseModal();
      }
    }
  };
  const [download, setDownload] = useState(false);
  useEffect(() => {
    if (ethereum) {
      setDownload(true);
    }
  });


  //////////////////////////////////////////////////
  return (
    <>
    <Modal
        className="mode"
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        center={true}
        closeIcon={<RxCross2 style={{color:"white",fontSize:"25px"}} />}
      >
        <div className="moddd">
          {download ? (
            <div className="reques">
              {!state.contract ? <WrongNetwork /> : <>
              <div className="mod-top">Please Place Your Request </div>
              <span>Order for : {tempUser}</span>
              <br />
              <br />
              Place Orders:
              <br/>
              <br/>
              <div className="requesin">
                Message: &nbsp;
              <input
                className="requesmes"
                type="text"
                placeholder="Enter your requirements or message for the hawker"
                ref={mesRef}
              /></div>
              <br />
              <br />
              <div className="requesin">
                Phone No: &nbsp;
              <input
                className="requesmes"
                type="number"
                placeholder="Enter your phone no"
                ref={phoneRef}
              /></div>
              <br />
              <br />
              <div className="requesin">
                Amount: &nbsp;
              <input
                className="requesmes"
                type="text"
                placeholder="Enter amount(min. 0.1)"
                ref={amountRef}
              />
              </div>
              <br />
              <br />
              <div className="btncenter">
              <Button variant="success" onClick={handleOrderSubmit}>Submit</Button></div></>}
            </div>
          ) : (
            <div className="reques">
              <Download />
            </div>
          )}
        </div>
      </Modal>
      <div
        className="parentcon"
        data-aos="fade-up"
        style={{
          overflowX: "hidden",
          display: "flex",
          justifyContent: "space-arond",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginLeft: "5vw",
          }}
        >
          <ReactMapGL
            className="mapwidth"
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiYmlzd2EwMDd4IiwiYSI6ImNsZWprNGs3YzBjOGczb21pZzc5cjJqczIifQ.JS_Zgjwbm9RDW9H8KmGqKg"
            width={screenWidth > 800 ? "54vw" : "90vw"}
            height="60vh"
            transitionDuration="200"
            mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
            onViewportChange={(viewport) => setViewport(viewport)}
            onDblClick={currentUsername && handleAddClick}
          >
            <Marker
              latitude={per.lat}
              longitude={per.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                className="map_mark"
                style={{
                  fontSize: 5 * viewport.zoom,
                  color: "blue",
                  cursor: "pointer",
                }}
              />
            </Marker>
            {pins == null ? (
              <></>
            ) : (
              pins.map((p) => (
                <>
                  <Marker
                    latitude={p.lat}
                    longitude={p.long}
                    offsetLeft={-3.5 * viewport.zoom}
                    offsetTop={-7 * viewport.zoom}
                  >
                    <Room
                      className="map_mark"
                      style={{
                        fontSize: 5 * viewport.zoom,
                        color:
                          currentUsername === p.username
                            ? "tomato"
                            : "slateblue",
                        cursor: "pointer",
                      }}
                      onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                    />
                  </Marker>
                  {p._id === currentPlaceId && (
                    <Popup
                      key={p._id}
                      latitude={p.lat}
                      longitude={p.long}
                      closeButton={true}
                      closeOnClick={false}
                      onClose={() => setCurrentPlaceId(null)}
                      anchor="left"
                      className="map-popup"
                    >
                      <div className="card">
                        <label>Hawker Category</label>
                        <h4 className="place">{p.title}</h4>
                        <label>Description</label>
                        <p className="desc">{p.desc}</p>
                        <label>Items To Be Sold</label>
                        <p className="items">
                          {p.items.map((item, key) => (
                            <span key={key}>{item}, </span>
                          ))}
                        </p>
                        <label>Hawker Name</label>
                        <p className="username">{p.username} </p>
                      </div>
                      <Button
                        onClick={() => {
                          setTempUser(p.username);
                          onOpenModal();
                        }}
                      >
                        Request Visit
                      </Button>
                    </Popup>
                  )}
                </>
              ))
            )}
          </ReactMapGL>
        </div>
        <div
          className="writeup"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "10vh",
          }}
        >
          <div className="writeuph">
            <h2 style={{ color: "white" }}> Welcome to your very own online customer portal. </h2>
          </div>
          <span style={{ color: "white" }}>
           Here you can find
            all the nearby hawkers and their details. You can also request a
            visit to the hawker and get your order delivered to your doorstep.
          </span>
        </div>
      </div>
    </>
  );
}

export default CatMap;