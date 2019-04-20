import React, { Component } from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Homepage from './components/HomePage/homePage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
	   <Header />
	   
	 
	   
	   <Homepage />
	   
	   
	   <Footer />
	   
      </div>
    );
  }
}

export default App;
