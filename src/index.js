import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"))
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

root.render(<h1 className='title' style={customStyle}>{message}</h1>)