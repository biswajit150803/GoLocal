import React from "react";
import { Button } from "react-bootstrap";
import "./HawkerBox.css";
const HawkerBox = (props) => {
  function requestVisit() {
    props.request(props._id, props.username);
  }
  // const [show, setShow] = React.useState(props.url);
  // const myStorage = window.localStorage;
  // React.useEffect(() => {
  //   myStorage.setItem(props.username, props.url);
  // });
  // React.useEffect(() => {
  //   setShow(myStorage.getItem(props.username));
  // }, [props.url]);
  return (
    <div className="hawkerbox">

      <div className="hawker1111">
      <div className="paren1" style={{display:"flex"}}>
        <img
          src={props.url || "https://www.w3schools.com/howto/img_avatar.png"}
          alt="hawker_image"
          style={{ width: "30px", height: "30px",marginRight:"20px" }}
        />
        <p style={{ fontSize: "25px" }}>
          <b>{props.username}</b>
        </p>
      </div>
      <div className="paren2">
        <p style={ {fontSize:'20px',fontWeight:"500",marginTop:"-10px"}}>        
          {props.title}
        </p>
      </div>
      <div className="paren3" style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{}}>
      <p>
          <span>
            <b>Items Selling:</b>
          </span>
          <ul>
            {props.items ? (
              props.items.map((it, key) => {
                return (
                  <div  key={key}>
                    <li>{it}</li>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </p>
      </div>
      {/* <div style={{width:"50px"}}>
      <h6>Rate</h6>
      <span>loenJ;FBfi;kjfwGO'REGWGUJBGEUUEjnwnugjn</span>
      </div>*/}
        
      </div> 
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <button onClick={requestVisit} className="hawkerbox_btn">
          Check
        </button>
      </div>

      <hr style={{ width: "100%" }} />
    </div>
  );
};

export default HawkerBox;
