 import React from 'react';
import ReactDOM from 'react-dom'; 



//import App from './App';

const firstName = 'Kalaivani';
const lastName = 'Sivakumar';
const num = 3;
const year = new Date().getFullYear();
const img = "https://picsum.photos/200";

 ReactDOM.render(
 <div>
 <h1 className='heading' contenteditable="true" spellcheck="true">Hello world!</h1>
 <p>This is the paragraph</p>
 <h2>Favorite food</h2>
 <ul>
   <li>Pasta</li>
   <li>Pizza</li>
   <li>Burger</li>
 </ul>
 <div >
   <img src="image/img1.jpeg" alt="pasta" className='food-img'/>
   <img src="image/img2.jpeg" alt="pizza"  className='food-img'/>
   <img src="image/img3.jpeg" alt="burger"  className='food-img'/>
 </div>
 <h2>Welcome {`${firstName} ${lastName}`}</h2>
 <h3>Hello {firstName + " " + lastName}</h3>
 <h3>Hi {firstName} {lastName}</h3>
 <h3 className='heading' >Random image is generated</h3>
 <img src={img} alt="image" />
 <h3 className='heading' >Random image is generated in gray color</h3>
 <img src={img + "?grayscale"} alt="image" />

 <p>Your lucky number is {num}</p>
 <p>Random lucky number generated {Math.floor(Math.random () * 100)}</p>

 <p>created by {firstName}</p>
 <p>copyright {year}</p>
 </div>,
  document.getElementById('root')
 
 );