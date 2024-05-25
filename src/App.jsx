import { useState } from 'react'
import React from 'react';

import starIcon from '../assets/images/icon-star.svg';
import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';


import './App.css'
import ButtonFunktion from './ButtonFunktion.jsx';

function App() {


  return (
    <>
      <div className='header'>
      
        <h1><img src={starIcon} alt="Star Icon" /> FAQs</h1></div>
      <div><strong>What is Frontend Mentor,and how will it help me?<ButtonFunktion/></strong><p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p>
       </div>
        <div><strong>Is Frontend Mentor free?<img className='img-plus'  src={iconPlus} alt="Plus Zeichenn" /></strong>
        <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p></div>
        <div><strong>Can I use Frontend Mentor projects in my portfolio?<img className='img-plus'  src={iconPlus} alt="Plus Zeichen" /></strong>
        <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p></div>
        <div><strong>How can I get help if I`m stuck on a challenge?<img className='img-plus' src={iconPlus} alt="Plus Zeichen" /></strong>
        <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p></div>
    </>
  )
}

export default App
