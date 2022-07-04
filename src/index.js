 import React from 'react';
import ReactDOM from 'react-dom'; 



//import App from './App';

const firstName = 'Kalaivani';
const lastName = 'Sivakumar';
const num = 3;
const year = new Date().getFullYear();

 ReactDOM.render(
 <div>
 <h1 className='heading' contenteditable="true" spellcheck="true">Hello world!</h1>
 <p>This is the paragraph</p>
 <h2>Favorite food</h2>
 <ul>
   <li>Pasta</li>
   <li>Pizza</li>
   <li>idli</li>
 </ul>
 <div >
   <img src="image/img1.jpeg" alt="pasta" className='food-img'/>
   <img src="image/img2.jpeg" alt="pizza"  className='food-img'/>
   <img src="image/img3.jpeg" alt="burger"  className='food-img'/>
 </div>
 <h2>Welcome {`${firstName} ${lastName}`}</h2>
 <h3>Hello {firstName + " " + lastName}</h3>
 <h3>Hi {firstName} {lastName}</h3>

 <p>Your lucky number is {num}</p>
 <p>Random lucky number generated {Math.floor(Math.random () * 100)}</p>

 <p>created by {firstName}</p>
 <p>copyright {year}</p>
 </div>,
  document.getElementById('root')
 
 );