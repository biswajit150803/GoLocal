import axios from "axios";
import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Web3 from "web3";
import Download from "../Download/Download";
import WrongNetwork from "../WrongNetwork/WrongNetwork";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import HawkersHut from '../../contracts/HawkerHut.json';
const BPastorders = (props) => {
    const [length, setLength] = React.useState(0);
  const [hawker, setHawker] = React.useState(props.user);
  const [NoteIns, setNoteIns] = React.useState(null);
  const [NoteIns2, setNoteIns2] = React.useState(null);
  const [per, Sper] = React.useState({ lat: 0, long: 0 });
  const {ethereum} = window;

  function handleAccountsChanged() {
    // Handle new accounts, or lack thereof.
    setCount(count+1);
  }
  React.useEffect(()=>{
    if(ethereum)
  {window.ethereum.on('accountsChanged', handleAccountsChanged);
  window.ethereum.on('chainChanged', handleAccountsChanged);}
});

  const [count, setCount] = useState(0);
   const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  useEffect(() => {
   

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

     /////////////////hash for payment////////////////////
   
  
  
  
  
     ////////////////////////////////////////////



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
        console.log(response.data)
        setLength(response.data.length);
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
        setNoteIns2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    apihawker();
    apihawkerdone();
  }, [hawker]);

  const hawkerAccept = async (e,id,hash) => {
    const { contract } = state;
    const accountss = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const res=await contract.methods.hawkerId(hash).send({ from: accountss[0] });
    console.log(res);
    const va=res.events.success.returnValues[2].toString();
    alert(res.events.success.returnValues[0]+"\n Payment: "+Web3.utils.fromWei(va, "ether")+" Eth");
    if(res.events.success.returnValues[1])
    {  
      const data={
        id:id
      };///WEB3 CONNECT FUNCTION///////////////////////////////////////
      console.log(data);
      await axios.post("https://evendorbackend.onrender.com/api/web3/hawkeraccept", data);
      window.location.reload();
    }
  }
  const hawkerReach = async (e,id,lat,long,hash) => {
    const { contract } = state;
    //console.log(id);
    const data={
      id:id
    };
    console.log(data);
    //const a=true;
    //////////////////////////ADD CIRCLE CONDITION HERE !!!!!!!!!!!!!!!!!!!!
    if((Math.abs(lat-per.lat)>0.03)||(Math.abs(long-per.long)>0.03)) //ADD CIRCLE CONDITION HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      alert("Reach near the customer");
    else
    {   
        await axios.post("https://evendorbackend.onrender.com/api/web3/hawkerreach", data);
        window.location.reload();
    }
  }
  const hawkerReceive = async (e,id,hash) => {
    const { contract } = state;
    const accountss = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    ///WEB3 RECEIVE FUNCTION///////////////////////////////////////
    const res=await contract.methods.hawker_withdraw(hash).send({ from: accountss[0] });
    console.log(res);
    const va=res.events.success.returnValues[2].toString();
    alert(res.events.success.returnValues[0]+"\n Payment to your account: "+Web3.utils.fromWei(va, "ether")+" Eth");
    if(res.events.success.returnValues[1])
    {
      //console.log(id);
        const data={
          id:id
        };  
        console.log(data);
        await axios.post("https://evendorbackend.onrender.com/api/web3/hawkerreceive", data);
        window.location.reload();
    }
  }

  const hawkerDeny = async (e,id,hash) => {
    const { contract } = state;
    const accountss = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const res=await contract.methods.cancelPayment(hash).send({ from: accountss[0] });
    console.log(res);
    const va=res.events.success.returnValues[2].toString();
    alert(res.events.success.returnValues[0]+"\n Payment to your account: "+Web3.utils.fromWei(va, "ether")+" Eth");
    if(res.events.success.returnValues[1])
    {
      const data={
        id:id
      };
      console.log(data);
      await axios.post("https://evendorbackend.onrender.com/api/web3/hawkerdeny", data);
      window.location.reload();
    }
  }
  const [download, setDownload] = React.useState(false);
  React.useEffect(() => {
    if(ethereum)
    {
      setDownload(true);
    }
  });
  return (
    <div style={{color:"white"}}>
    {(download)?<>
    Your past orders:
      {(!state.contract)? <WrongNetwork />:<></>}
    <br />
    <br />
    <div>
      {(NoteIns2 === null ||NoteIns2 === []) ? (
        <div>No Past Orders</div>
      ) : 
        (
          <Table striped bordered hover>
                <Thead>
                  <Tr>
                    <Th>Customer Name</Th>
                    <Th>Time</Th>
                    <Th>Status</Th>
                    <Th>Profit</Th>
                  </Tr>
                </Thead>
                <Tbody>
        {NoteIns2.map((note, index) => {
          return (
                  <Tr key={index}>
                    <Td>{note.CUser}</Td>
                    <Td>{note.updatedAt}</Td>
                    <Td>{(note.HawkerStage==="Success")?
                      <Button variant="success"  onClick={event => hawkerReceive(event,note._id,note.Hash)}> Receive</Button>:
                      <>{(note.RejMessage!=undefined)?<>{note.RejMessage}</>:<>No message</>}</>}</Td>
                    <Td>{note.Amt}</Td>
                  </Tr>)
          })}
          </Tbody></Table>)}
        
    </div></>:<><Download /></>}</div>
  )
}

export default BPastorders