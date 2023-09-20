import React from "react";
import "./Admin.css";
import Button from "react-bootstrap/esm/Button";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import NavAdmin from "../NavAdmin/NavAdmin";
import { ToastContainer, toast } from "react-toastify";

const Admin = (props) => {
  const customerRef = React.useRef();
  const hawkerRef = React.useRef();
  const [notes, setNotes] = React.useState([]);
  const [notes2, setNotes2] = React.useState();
  const [value, onChange] = React.useState(new Date());
  const [value1, onChange1] = React.useState(new Date());
  const apicustomer = async () => {
    const options = {
      method: "GET",
      url: "https://hawkerhut-back.onrender.com/api/web3/admin",
    };
    await axios
      .request(options)
      .then((response) => {
        console.log(response.data)
        response.data.reverse();
        setNotes(response.data);
        setNotes2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [hawkerss, setHawkerss] = React.useState([]);
  const getHawkers = async () => {
    const options = {
      method: "GET",
      url: "https://hawkerhut-back.onrender.com/api/users/admin",
    };
    await axios
      .request(options)
      .then((response) => {
        //console.log(response.data)
        response.data.reverse();
        setHawkerss(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const notify = () => toast("Blocked!");
  React.useEffect(() => {
    apicustomer();
    getHawkers();
  }, []);
  const [amount, setAmount] = React.useState(0);
  React.useEffect(() => {
    console.log("notes", notes);
    let sum = 0;
    for (let i = 0; i < notes.length; i++) {
      sum += notes[i].Amt;
      // console.log(notes[i])
    }
    sum = sum * 0.125;
    console.log(sum);
    setAmount(sum);
  }, [notes]);
  const clickFunc = async () => {
    if (value1 < value) {
      alert("Please select correct date");
      console.log("1");
    } else if (
      value1.getDate() === value.getDate() &&
      value1.getMonth() === value.getMonth() &&
      value1.getFullYear() === value.getFullYear()
    ) {
      const filterBySearch = notes.filter((item) => {
        if (
          item.CUser.toLowerCase().includes(
            customerRef.current.value.toLowerCase()
          ) &&
          item.HUser.toLowerCase().includes(
            hawkerRef.current.value.toLowerCase()
          )
        ) {
          return item;
        }
      });
      console.log(filterBySearch);
      console.log("2");
      setNotes(filterBySearch);
    } else {
      const filterBySearch = notes.filter((item) => {
        let date = new Date(item.createdAt);
        if (date >= value && date <= value1) {
          console.log(item);
          if (
            item.CUser.toLowerCase().includes(
              customerRef.current.value.toLowerCase()
            ) &&
            item.HUser.toLowerCase().includes(
              hawkerRef.current.value.toLowerCase()
            )
          ) {
            return item;
          }
        }
      });
      console.log(filterBySearch);
      console.log("3");
      setNotes(filterBySearch);
    }
  };
  const [tab, setTab] = React.useState(0);
  function change(id) {
    setTab(id);
  }
  const funcBlock = async (id) => {
    // e.preventDefault();
    const options = {
      method: "POST",
      url: "https://hawkerhut-back.onrender.com/api/users/block",
      data: {
        username: id,
      },
    };
    notify();
    await axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        console.log("blocked user");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });

  };
  function cLL(e, id) {
    e.preventDefault();
    funcBlock(id);
  }

  function logout() {
    props.logout();
  }
  return (
    <>
      <NavAdmin changeTab={change} logout={logout} />
      {tab === 0 ? (
        <div className="admin">
          <div>
            <div>
              <input
                type="text"
                placeholder="Enter Customer Name"
                ref={customerRef}
              />
              <input
                type="text"
                placeholder="Enter Hawker Name"
                ref={hawkerRef}
              />
            </div>
            
            <DatePicker onChange={onChange} value={value} />
            <DatePicker onChange={onChange1} value={value1} />
            <Button variant="success" onClick={clickFunc}>
              <BiSearch />
            </Button>
            <Button
              variant="success"
              onClick={() => {
                setNotes(notes2);
              }}
            >
              Reset
            </Button>
          </div>
          {/* {loader?<div className="loaddd">Loading...</div>:<></>} */}
          <div>
            {notes === null || notes === undefined || notes.length === 0 ? (
              <>no items currently</>
            ) : (
              <div>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Transaction Id</Th>
                      <Th>Customer Name</Th>
                      <Th>Hawker Name</Th>
                      <Th>Date</Th>
                      <Th>Contract status</Th>
                      <Th>Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {notes.map((note, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{note.Hash}</Td>
                          <Td>{note.CUser}</Td>
                          <Td>{note.HUser}</Td>
                          <Td>{note.createdAt}</Td>
                          <Td>{note.ContractStage}</Td>
                          <Td>{note.Amt}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
                <div className="total">
                  <h3 style={{ color: "white" }}>
                    Total Amount: {amount}&nbsp;SHM
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="admin">
        <ToastContainer />
        
          <div>
            {hawkerss.length === 0 ? (
              <>no hawkers currently</>
            ) : (
              <div>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Pic</Th>
                      <Th>Hawker Name</Th>
                      <Th>Aadhar</Th>
                      <Th>Block</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {hawkerss.map((note, index) => {
                      return (
                        <Tr key={index}>
                          <Td>
                            <img
                              src={note.url}
                              style={{ width: "30px", height: "30px" }}
                              alt="na"
                            />
                          </Td>
                          <Td>{note.username}</Td>
                          <Td>{note.aadhar}</Td>
                          <Td
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {note.blocked ? (
                              <>This User is Blocked</>
                            ) : (
                              <Button
                                type="Submit"
                                onClick={(event) => {
                                  cLL(event, note.username);
                                }}
                              >
                                Block
                              </Button>
                            )}
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
