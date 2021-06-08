// Created a new file will be one part of the homepage called Body.js
// I was finding eat, shop, play pictures for body section


import React from 'react';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../body.css';

import chilidish from '../img/body-img/chilidishjpg';
import chiliver from '../img/body-img/chiliver.jpg';
import chilidinner from '../img/body-img/chilidinner.jpg';
import icecreamcups from '../img/body-img/icecreamcups.jpg';
import icecreamtruck from '../img/body-img/icecreamtruck.jpg';
import greatericecream from '../img/body-img/greatericecream .jpg';

import chilidinner from '../img/body-img/chilidinner.jpg';
import icecreamcups from '../img/body-img/icecreamcups.jpg';
import icecreamtruck from '../img/body-img/icecreamtruck.jpg';
import greatericecream from '../img/body-img/greatericecream .jpg';



const body = () => {

    return (
        <div className="body-container"> 
          <div className="eat-container">
               <img className="body-img" id="" alt='' src= { chilidish } />
               <img className="body-img" id="" alt='' src= { chiliver } />
               <img className="body-img" id="" alt='' src= { icecreamcups } />
               <img className="body-img" id="" alt='' src= { icecreamtruck } />
               <img className="body-img" id="" alt='' src= { greatericecream  } />

          </div>

          <div className="shop-container">
          <img className="body-img" id="" alt='' src= { chilidish } />
               <img className="body-img" id="" alt='' src= { chiliver } />
               <img className="body-img" id="" alt='' src= { icecreamcups } />
               <img className="body-img" id="" alt='' src= { icecreamtruck } />
               <img className="body-img" id="" alt='' src= { greatericecream  } />

          </div>

        
        
        </div>


    )
};

export default body;