import React from 'react'

const Download = () => {
    function click(){
        window.open("https://metamask.io/download/");
    }
  return (
    <div  style={{color:"white"}}>Download Metamask for the features <button onClick={click}>Download</button></div>
  )
}

export default Download