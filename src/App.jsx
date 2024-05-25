import { useState } from 'react'
import React from 'react';

import starIcon from '../assets/images/icon-star.svg';
import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';


import './App.css'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Work Sans:400,700', 'sans-serif']
  }
});

function App() {

  const [isVisible1, setIsVisible1] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const [isVisible3, setIsVisible3] = React.useState(false);
  const [isVisible4, setIsVisible4] = React.useState(false);

  return (
    <>
      <div className='container'>
        <div className='header'>

          <h1><img className='starIcon' src={starIcon} alt="Star Icon" /> FAQs</h1></div>
        <div className='text'><strong onClick={() => setIsVisible1(!isVisible1)}>What is Frontend Mentor,and how will it help me?  <img className='img-plus' src={isVisible1 ? iconMinus : iconPlus} alt="Plus Zeichen" /></strong>
          <p className={isVisible1 ? 'visible' : 'hidden'}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p>
        </div><hr />
        <div className='text'><strong onClick={() => setIsVisible2(!isVisible2)}>Is Frontend Mentor free? <img className='img-plus' src={isVisible2 ? iconMinus : iconPlus} alt="Plus Zeichen" /></strong>
          <p className={isVisible2 ? 'visible' : 'hidden'}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p></div><hr />
        <div className='text'><strong onClick={() => setIsVisible3(!isVisible3)}>Can I use Frontend Mentor projects in my portfolio? <img className='img-plus' src={isVisible3 ? iconMinus : iconPlus} alt="Plus Zeichen" /></strong>
          <p className={isVisible3 ? 'visible' : 'hidden'}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p></div><hr />
        <div className='text'><strong onClick={() => setIsVisible4(!isVisible4)}>How can I get help if I`m stuck on a challenge? <img className='img-plus' src={isVisible4 ? iconMinus : iconPlus} alt="Plus Zeichen" /></strong>
          <p className={isVisible4 ? 'visible' : 'hidden'}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skillst with projects in HTML,CSS,and Javascript.It`s suitable for all levels and ideal for portfolio building.</p></div></div>
    </>
  )
}

export default App