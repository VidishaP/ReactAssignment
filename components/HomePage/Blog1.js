import React, { Component } from 'react';

import Header from './components/headerComponents/header.js';
import Footer from './components/footerComponents/footer.js';
import Homepage from './components/pages/homePage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Blog1">
       
	   <Header />
<div className='wrapper'>

  <div className='row'>

    <div className='column'>

      <div className='orange-column'>
    	
      
		<p><a href="https://www.denofgeek.com/us/avengers-endgame"><h1>Avengers: Endgame</h1></a></p>
		<p>Summary:</p>
		<p><img src = {Endgame}/></p>
		<p>After ten years, 22 movies, roughly a billion characters and a body count of approximately half of infinity, Avengers: Endgame is just about here to wrap all of that up. The shared universe that started with Iron Man could very well be bringing Tony Stark story to a close in the new film. We have been watching from the start (especially the underappreciated ones), and we have got everything you need to know before it hits.</p>
		<h4>Date: 19/04/2019</h4>	   
	 </div>
	 </div>

<div className='column'>
     
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
	 </div>

	   
	   
	   
	   
	   <Footer />
	   
      </div>
    );
  }
}

export default Blog1;
