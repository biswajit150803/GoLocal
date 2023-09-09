import "./app.css";
import ReactMapGL, { Layer, Marker, Popup, Source } from "react-map-gl";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { Room, Star } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Web3 from "web3";
import WrongNetwork from "../WrongNetwork/WrongNetwork";
import Download from "../Download/Download";
import { use } from "i18next";
import HawkersHut from "../../contracts/HawkerHut.json";
import HawkerBox from "../../components/HawkerBox/HawkerBox";
import { set } from "date-fns";
import { RxCross2 } from "react-icons/rx";
function Map(props) {
  AOS.init();
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 13,
  });
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post(
        "https://hawkerhut-back.onrender.com/api/pins",
        newPin
      );
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };
  const getPins = async () => {
    try {
      const allPins = await axios.get(
        "https://hawkerhut-back.onrender.com/api/pins"
      );
      setPins(allPins.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
   
    getPins();
  });

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };
  // var screen=Screen;
  let screenWidth = window.screen.width;
  useEffect(() => {
    // console.log(screenWidth);
  }, []);

  //searchbar functionality
  const [productList, setProductList] = useState([]);
  const [checked, setChecked] = useState(localStorage.getItem("Checked"));
  const [items, setItems] = useState([]);
  const getPins2 = async () => {
    try {
      const allPins = await axios.get(
        "https://hawkerhut-back.onrender.com/api/pins"
      );
      console.log(allPins.data);

      for (let i = 0; i < allPins.data.length; i++) {
        // productList.push(allPins.data[i].title);
        setProductList((prev) => {
          return [...prev, allPins.data[i].title];
        });
        // setProducts((prev) => {
        //   return [...prev, allPins.data[i].title];
        // });
      }
      console.log(productList);

      setPins(() => {
        const newl = allPins.data;
        return newl;
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getItems = async () => {
    try {
      const allItems = await axios.get(
        "https://hawkerhut-back.onrender.com/api/items"
      );
      console.log(allItems.data[0].item);
      console.log(allItems.data[0].username);
      setItems(allItems.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    
    getPins2();
    getItems();
  }, [checked]);
  function inter(){
    setTimeout(()=>{
      setReset(reset+1);
    },5000);
  }
  useEffect(()=>{
    inter();
  })

  // console.log(productList);
  const [searchVal, setSearchVal] = useState("");
  const [reset, setReset] = useState(0);

  /////////////////search function/////////////////////
  function handleSearch() {
    if (searchVal === "") {
      // setProducts(items);
      return;
    }
    const filterBySearch = items.filter((it) => {
      console.log(it);
      if (it.item.toLowerCase().includes(searchVal.toLowerCase())) {
        return it.username;
      }
    });
    console.log(filterBySearch);

    const filterBySearch2 = sideBox.filter((ppp) => {
      for (let k = 0; k < filterBySearch.length; k++) {
        if (ppp.username === filterBySearch[k].username) {
          return ppp;
        }
      }
    });
    console.log(filterBySearch2);
    setSideBox(filterBySearch2);
  }
  const [tempUser, setTempUser] = useState();
  const openModal = (e, usernamee) => {
    console.log("opened");
    setTempUser(usernamee);
    onOpenModal();
  };

  ///WEB3//////////////////////////////////////////

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
    // const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545");

    async function template() {
      const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
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

      if (phoneRef.current.value.length !== 10) {
        alert("Enter a valid phone no");
      } else {
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
      }
    }
  };
  const [download, setDownload] = useState(false);
  useEffect(() => {
    if (ethereum) {
      setDownload(true);
    }
  },[]);

  // const circleLayer = {
  //   id: 'circle-layer',
  //   type: 'heatmap',
  //   paint: {
  //     'circle-radius': 100,
  //     'circle-color': 'blue',
  //   },
  // };

  const circleLayer = {
    id: "circle-layer",
    type: "circle",
    paint: {
      "circle-radius": 50,
      "circle-color": "rgba(0, 0, 255, 0.3)", // Set the circle color with alpha (0.3 for 30% transparency)
      "circle-stroke-width": 2,
      "circle-stroke-color": "blue", // Set the stroke color for the circle
    },
  };

  const circleData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [per.long, per.lat], // Set the coordinates of the center of the circle
        },
      },
    ],
  };

  /////////////////////////ADD CIRCLE CONDITION///////////////////////
  const [sideBox, setSideBox] = useState([]);
  useEffect(() => {
    getPins();
    if (pins) {
      getPins();
      let arr = [];
      for (let i = 0; i < pins.length; i++) {
        if (
          Math.abs(per.lat - pins[i].lat) < 0.015 &&
          Math.abs(per.long - pins[i].long) < 0.015 && 
          pins[i].blocked === false
        ) {
          // setSideBox((items)=>(
          //   [...items,
          //    pins[i]]
          // ));
          arr.push(pins[i]);
          console.log(pins[i]);
        }
      }

      setSideBox(arr);
    }
  },[reset]);
  React.useEffect(() => {
    setReset(reset+1);
  },[]);
  const [sideCoor, setSideCoor] = useState({
    lat: 0,
    long: 0,
    title: "abc",
    username: "abc",
    desc: "abc",
    items: ["abc"],
    _id: "abc",
  });

  function handleHawkerClick(e, userNameeee) {
    //e.preventDefault();
    sideBox.map((side) => {
      if (side.username === userNameeee) {
        console.log(side);
        setSideCoor(side);
      }
    });
  }

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
              {!state.contract ? (
                <WrongNetwork />
              ) : (
                <>
                  <div className="mod-top">Please Place Your Request </div>
                  <span>Order for : {tempUser}</span>
                  <br />
                  <br />
                  Place Orders:
                  <br />
                  <br />
                  <div className="requesin">
                    Message: &nbsp;
                    <input
                      className="requesmes"
                      type="text"
                      placeholder="Enter your requirements or message for the hawker"
                      ref={mesRef}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="requesin">
                    Phone No: &nbsp;
                    <input
                      className="requesmes"
                      type="number"
                      placeholder="Enter your phone no"
                      ref={phoneRef}
                    />
                  </div>
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
                    <Button variant="success" onClick={handleOrderSubmit}>
                      Submit
                    </Button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="reques">
              <Download />
            </div>
          )}
        </div>
      </Modal>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for your favourite food"
          onChange={(e) => setSearchVal(e.target.value)}
          className="searchInput"
        />
        <button className="searchbtn" onClick={handleSearch}>
          <AiOutlineSearch />
        </button>
        <button className="searchbtnRes" onClick={() => setReset(reset + 1)}>
          Reset
        </button>
      </div>

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
            {/* <Source id="circle-data" type="geojson" data={circleData}>
              <Layer {...circleLayer} />
            </Source> */}
            {/* <Layer
              type="circle"
              id="circle-layer"
              paint={{ "circle-radius": 5000, "circle-color": "blue" }}
            >
              <Feature latitude={per.lat}
              longitude={per.long} />
            </Layer> */}
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
            {pins.map((p, key) => (
              <div key={key} >{p.blocked?<></>:
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
                        currentUsername === p.username ? "tomato" : "slateblue",
                      cursor: "pointer",
                    }}
                    onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                  />
                </Marker>}
                {p._id === currentPlaceId && (
                  <Popup
                    key={p._id}
                    // tipSize={20}
                    latitude={p.lat}
                    longitude={p.long}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setCurrentPlaceId(null)}
                    anchor="left"
                    className="map-popup"
                  >
                    <div className="card">
                      {/* card for inner card css change and mapboxgl-popup-content css change */}
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
                      {/* <span className="date">{format(p.createdAt)}</span> */}
                      <Button
                        onClick={() => {
                          setTempUser(p.username);
                          onOpenModal();
                        }}
                      >
                        Request Visit
                      </Button>
                    </div>
                  </Popup>
                )}
              </div>
            ))}
            <Marker
              latitude={sideCoor.lat}
              longitude={sideCoor.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                className="map_mark"
                style={{
                  fontSize: 5 * viewport.zoom,
                  color: "green",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleMarkerClick(sideCoor._id, sideCoor.lat, sideCoor.long)
                }
              />
            </Marker>
            <Popup
              key={sideCoor._id}
              latitude={sideCoor.lat}
              longitude={sideCoor.long}
              closeButton={true}
              closeOnClick={true}
              onClose={() => {
                setSideCoor({
                  lat: 0,
                  long: 0,
                  title: "abc",
                  username: "abc",
                  desc: "abc",
                  items: ["abc"],
                  _id: "abc",
                });
                setCurrentPlaceId(null);
              }}
              anchor="left"
              className="map-popup"
            >
              <div className="card">
                {/* card for inner card css change and mapboxgl-popup-content css change */}
                <label>Hawker Category</label>
                <h4 className="place">{sideCoor.title}</h4>
                <label>Description</label>
                <p className="desc">{sideCoor.desc}</p>
                <label>Items To Be Sold</label>
                <p className="items">
                  {sideCoor.items.map((item, key) => (
                    <span key={key}>{item}, </span>
                  ))}
                </p>
                <label>Hawker Name</label>
                <p className="username">{sideCoor.username} </p>
                {/* <span className="date">{format(p.createdAt)}</span> */}
                <Button
                  onClick={() => {
                    setTempUser(sideCoor.username);
                    onOpenModal();
                  }}
                >
                  Request Visit
                </Button>
              </div>
            </Popup>
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
            <h2 style={{ color: "white" }}>Hawkers Nearby</h2>
          </div>

          {sideBox.length===0 || sideBox == null ? (
            <h2 style={{color:"white"}}>Loading Hawkers nearby
              <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" style={{width:"30px",height:"30px"}} />
            </h2>
          ) : (
            <div className="hawkerboxGrandParent">
              <div className="hbp">
                {sideBox.map((p, key) => {
                  //let usernameee = p.username;
                  return (
                    <div
                      className="hawkerboxParent"
                      key={key}
                      // onClick={(e) => {
                      //   handleHawkerClick(e, usernameee);
                      // }}
                    >
                      <HawkerBox
                        key={key}
                        username={p.username}
                        title={p.title}
                        items={p.items}
                        url={p.url}
                        request={(e,usernam) => {
                        handleHawkerClick(e, usernam);
                      }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* <div className="btn_div">
            <button className="btn_start" style={{ backgroundColor: "green" }}>
              Get Started
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Map;