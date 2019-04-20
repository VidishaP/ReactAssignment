import React, { Component } from 'react';
import './homePage.css';
import Endgame from '../HomePage/Endgame.jpg';
import HarryPotter from '../HomePage/HarryPotter.jpg';
import StarTrek from '../HomePage/StarTrek.jpg';





class Homepage extends Component {
  render() {
	  
    return (
    	

<div className='wrapper'>

  <div className='row'>


      <div className='orange-column'>
    	
      
		<p><a href ="Blog1.js"><h1>Avengers: Endgame</h1></a></p>
		<p><img src = {Endgame}/></p>
		<p>After ten years, 22 movies, roughly a billion characters and a body count of approximately half of infinity, Avengers: Endgame is just about here to wrap all of that up. The shared universe that started with Iron Man could very well be bringing Tony Stark story to a close in the new film. We have been watching from the start (especially the underappreciated ones), and we have got everything you need to know before it hits.</p>
		<h4>Date: 19/04/2019</h4>



		
		
		<p><a href="Blog2,js"><h1>Harry Potter</h1></a></p>
		<p><img src = {HarryPotter}/></p>
		<p>Discover more about your favourite characters, spells and creatures from across the wizarding world. Today, we invite you to explore Hogwarts.Also, go on the adventures of Newt Scamander, from New York, to London, to Paris.</p>
		<h4>Date: 19/04/2019</h4>

		

		<p><a href="Blog3.js"><h1>Star Trek</h1></a></p>
		<p><img src = {StarTrek}/></p>
		<p>In case you missed it in the wake of all the hype for that other space movie, the trailer for Star Trek Beyond dropped this week.Did you enjoy the trailer?</p>
		<h4>Date: 19/04/2019</h4>

      
    </div>
  
     
      <div className='green-column'>
      
      
	   <a href = "homePage.js">Home Page</a>
	   <p></p><p></p><p></p><p></p><p></p>

	  
	   </div>

  </div>
</div>



    );
  }
}

export default Homepage;