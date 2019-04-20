import React, { Component } from 'react';
import './homePage.css'; 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import StarTrek from '../HomePage/StarTrek.jpg';


import './App.css';

class Blog1 extends Components{


  render() {
    return (
      <div className="Blog1">
       
	   <Header />
<div className='wrapper'>

  <div className='row'>

    

      <div className='orange-column'>
		p><a href="Blog3.js"><h1>Star Trek</h1></a></p>
		<p><img src = {StarTrek}/></p>
		<p>In case you missed it in the wake of all the hype for that other space movie, the trailer for Star Trek Beyond dropped this week.Did you enjoy the trailer?</p>
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

export default Blog1;
