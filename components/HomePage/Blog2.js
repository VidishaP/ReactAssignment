import React, { Component } from 'react';
import './homePage.css'; 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import HarryPotter from '../HomePage/HarryPotter.jpg';

import './App.css';

class Blog2 extends Components{


  render() {
    return (
      <div className="Blog1">
       
	   <Header />
<div className='wrapper'>

  <div className='row'>

    

      <div className='orange-column'>
		
		<p><h1>Harry Potter</h1></p>
		<p><img src = {HarryPotter}/></p>
		<p>Discover more about your favourite characters, spells and creatures from across the wizarding world. Today, we invite you to explore Hogwarts.Also, go on the adventures of Newt Scamander, from New York, to London, to Paris.</p>
		<h4>Date: 19/04/2019</h4>
		</div>
	


     
      <div className='green-column'>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      
		<a href = "homePage.js">Home Page</a>
		<p></p><p></p><p></p><p></p><p></p>
		</div>
    
	 </div>
	 </div>

	   
	   
	   
	   
	   <Footer />
	   
      </div>
    );
  }
}

export default Blog2;
