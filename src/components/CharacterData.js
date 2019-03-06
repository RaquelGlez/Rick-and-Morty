import React, { Component } from 'react';
import axios from 'axios';
import AbstractCharacter from './AbstractCharacter'
import '../App.css';


const API = 'https://rickandmortyapi.com/api/character/?page=1';

class CharacterData extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        items: [],
        isLoading: false,
        error: null, 
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });
  
      axios.get(API)
        .then(result => this.setState({
          items: result.data.results,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }
  
    render() {
    
      const { items } = this.state;
      console.log(items)
      
     
      return (
        
        <div>
          <div className="container" >
            {
              items.map(item => (
                <AbstractCharacter
                  key = {item.id} 
                  id = {item.id} 
                  name = {item.name} 
                  image = {item.image} 
                  status = {item.status}
                  />
                 )
                )
              }
            </div>
        </div>
      );  
    }  
  }
  
  export default CharacterData;