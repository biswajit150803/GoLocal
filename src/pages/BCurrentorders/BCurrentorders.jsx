import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Web3 from "web3";
import Download from "../Download/Download";
import WrongNetwork from "../WrongNetwork/WrongNetwork";
import HawkersHut from "../../contracts/HawkerHut.json";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../Admin/Admin.css";
import { set } from "date-fns";
// import Loader from "react-loader-spinner";
import { RxCross2 } from "react-icons/rx";

const BCurrentorders = (props) => {
  const [hawker, setHawker] = React.useState(props.user);
  const [NoteIns, setNoteIns] = React.useState(null);
  const [per, Sper] = React.useState({ lat: 0, long: 0 });
  const { ethereum } = window;
  const rejmsg = React.useRef();
  const [rejmsg1, setrejmsg1] = React.useState("");
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function msgchange(e){
    setrejmsg1(e.target.value);
  }

  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  useEffect(() => {
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

  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      Sper({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  }, []);
  React.useEffect(() => {
    if (hawker === null || hawker === "") {
      window.location.replace("https://evendornb.onrender.com//Business");
    }
  }, [hawker]);

  const apihawker = async () => {
    const options = {
      method: "GET",
      url: "https://evendorbackend.onrender.com/api/web3/hawker",
      params: { HUser: hawker },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        response.data.reverse();
        setNoteIns(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const apihawkerdone = async () => {
    const options = {
      method: "GET",
      url: "https://evendorbackend.onrender.com/api/web3/hawkerdone",
      params: { HUser: hawker },
    };
    axios
      .request(options)
      .then((response) => {
        //console.log(response.data)
        response.data.reverse();
        // setNoteIns2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    apihawker();
    apihawkerdone();
  }, [hawker]);

  const [loader, setLoader] = React.useState(false);
  const hawkerAccept = async (e, id, hash) => {
    onOpenModal();
    const { contract } = state;
    const accountss = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setLoader(true);    
      try {
        const res = await contract.methods
          .hawkerId(hash)
          .send({ from: accountss[0] });
        console.log(res);
        const va = res.events.success.returnValues[2].toString();
        alert(
          res.events.success.returnValues[0] +
            "\n Payment: " +
            Web3.utils.fromWei(va, "ether") +
            " Eth"
        );
        if (res.events.success.returnValues[1]) {
          const data = {
            id: id,
          }; ///WEB3 CONNECT FUNCTION///////////////////////////////////////
          console.log(data);
          await axios.post(
            "https://evendorbackend.onrender.com/api/web3/hawkeraccept",
            data
          );
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
        onCloseModal();
      }
    };
  const hawkerReach = async (e, id, lat, long, hash) => {
    const { contract } = state;
    //console.log(id);
    const data = {
      id: id,
    };
    console.log(data);
    //const a=true;
    //////////////////////////ADD CIRCLE CONDITION HERE !!!!!!!!!!!!!!!!!!!!
    if (Math.abs(lat - per.lat) > 0.03 || Math.abs(long - per.long) > 0.03)
      //ADD CIRCLE CONDITION HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      alert("Reach near the customer");
    else {
      await axios.post(
        "https://evendorbackend.onrender.com/api/web3/hawkerreach",
        data
      );
      window.location.reload();
    }
  };
  const [b1id, setb1id] = React.useState("");
  const [b1hash, setb1hash] = React.useState("");
  const hawkerDenyy = async (e, id, hash) => {
    setb1id(id);
    setb1hash(hash);
    console.log(1);
    onOpenModal();
  };
  const hawkerDeny = async () => {
    const { contract } = state;
    const accountss = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setLoader(true)
    try{
    const res = await contract.methods
      .cancelPayment(b1hash)
      .send({ from: accountss[0] });
    console.log(res);
    const va = res.events.success.returnValues[2].toString();
    alert(
      res.events.success.returnValues[0] +
        "\n Payment to your account: " +
        Web3.utils.fromWei(va, "ether") +
        " Eth"
    );
    if (res.events.success.returnValues[1]) {
      const data = {
        id: b1id,
        Message: rejmsg1,
      };
      console.log(data);
      await axios.post(
        "https://evendorbackend.onrender.com/api/web3/hawkerdeny",
        data
      );
      window.location.reload();
    }
  }catch(err)
  {console.log(err)}
  finally{
    onCloseModal();
    setLoader(false);
  }
  };
  const [download, setDownload] = React.useState(false);
  React.useEffect(() => {
    if (ethereum) {
      setDownload(true);
    }
  });
  return (
    <div style={{ color: "white" }}>
      <Modal
        className="mode"
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        center={true}
        closeIcon={<RxCross2 style={{ color: "white", fontSize: "25px" }} />}
      >
      {loader?
      /* <div style={{color:"white",fontSize:"5vh"}}>Loading...</div> */
      <div style={{color:"white",fontSize:"3vh"}}><img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" style={{width:"35px",height:"35px"}} /> &nbsp;Loading....</div>:<>
        <div className="moddd">
          <div className="mod-top">Reason for rejecting the order</div>
          <br />
          <br />
          <input type="text" className="mod-input" onChange={msgchange} />
          <Button variant="secondary" onClick={hawkerDeny}>
            Deny
          </Button>{" "}
        </div>
      </>}
      </Modal>
      <Modal
        className="mode"
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        center={true}
        closeIcon={<RxCross2 style={{ color: "white", fontSize: "25px" }} />}
      >
      {loader?
      /* <div style={{color:"white",fontSize:"5vh"}}>Loading...</div> */
      <div style={{color:"white",fontSize:"3vh"}}><img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" style={{width:"35px",height:"35px"}} /> &nbsp;Loading....</div>:<></>
      }
      </Modal>
      {download ? (
        <>
          Your orders1:
          <br />
          <br />
          {!state.contract ? <WrongNetwork /> : <></>}
          <div>
            {NoteIns === null || NoteIns.length === 0 ? (
              <div>No Orders Currently</div>
            ) : (
              NoteIns.map((note, index) => {
                return (
                  <div key={index}>
                    <Table striped bordered hover style={{ color: "white" }}>
                      <Thead>
                        <Tr>
                          <Th>Customer Name</Th>
                          <Th>Loc1</Th>
                          <Th>Requirement/message</Th>
                          <Th>Time</Th>
                          <Th>Accept</Th>
                          <Th>Deny</Th>
                        </Tr>
                      </Thead>
                      <Tbody style={{ color: "white" }}>
                        <Tr style={{ color: "white" }}>
                          <Td style={{ color: "white" }}>{note.CUser}</Td>
                          <Td style={{ color: "white" }}>
                            lat:{note.Lat} | long:{note.Long}
                          </Td>
                          <Td style={{ color: "white" }}>{note.Message}</Td>
                          <Td style={{ color: "white" }}>{note.updatedAt}</Td>
                          <Td style={{ color: "white" }}>
                            {note.HawkerStage === "Waiting" ? (
                              
                              <Button
                                variant="success"
                                onClick={(event) =>
                                  hawkerAccept(event, note._id, note.Hash)
                                }
                              >
                                Accept
                              </Button>
                            ) : note.HawkerStage === "Accepted" ? (
                              <Button
                                variant="success"
                                onClick={(event) =>
                                  hawkerReach(
                                    event,
                                    note._id,
                                    note.Lat,
                                    note.Long,
                                    note.Hash
                                  )
                                }
                              >
                                {" "}
                                Reached
                              </Button>
                            ) : note.HawkerStage === "Reached" ? (
                              <>Please contact {note.CPhone}</>
                            ) : (
                              <></>
                            )}
                          </Td>
                          <Td style={{ color: "white" }}>
                            <Button
                              variant="danger"
                              onClick={(event) =>
                                hawkerDenyy(event, note._id, note.Hash)
                              }
                            >
                              Cancel
                            </Button>{" "}
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </div>
                );
              })
            )}
          </div>
        </>
      ) : (
        <>
          <Download />
        </>
      )}
    </div>
  );
};

export default BCurrentorders;
