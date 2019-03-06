import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



class AbstractCharacter extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        
      };
    }
  
    
  
  
  
    render() {
  
      
  
      
  
      return (
        <div>
            <p>Soy abstract character </p>
            <Link to = { '/character/'} ><button color="info" >More info</button></Link>
        </div>
      );  
    }  
  }
  
  export default AbstractCharacter;
  