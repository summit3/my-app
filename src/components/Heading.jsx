import React from "react";

function Heading () {

  const today = new Date()
  const timeHours = today.getHours()
  let message;
  let customStyle = {
    color: ""
  }
  
  if (timeHours<12) {
    message = "Good Morning"
    customStyle.color = "red"
  } else if (timeHours<18) {
    message = "Good Afternoon"
    customStyle.color = "green"
  } else if (timeHours<24) {
    message = "Good Evening"
    customStyle.color = "blue"
  }
  return <h1 style={customStyle}>{message}</h1>
}

export default Heading;