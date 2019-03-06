import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../App.css';


const API = 'https://rickandmortyapi.com/api/character/?page=1';

class DetailCharacter extends Component {
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
      const { history } = this.props
      const { items } = this.state;      
      
      return (
      
        <div className= "container">
            {items.map(item =>
            <div key={item.id} className="card my-2 mx-2"> 
              <div  className="card-body">
                <img src={item.image} className="card-img-top" alt="imagen-personaje"  />
                <h6 className="card-title pt-3">Nombre: {item.name}</h6>
                <p className="card-text">Id: {item.id}</p>
                <p className="card-text">Status: {item.status}</p>
                <p className="card-text">Specie: {item.species}</p>
                <p className="card-text">Tipo: {item.type}</p>
                <p className="card-text">Gender: {item.gender}</p> 
                <p className="card-text">Origin-Name: {item.origin.name}</p>
              </div>
              <button className="btn btn-info" onClick={() => history.goBack()} >Regresar</button>
            </div>
            )}      
        </div>

      );    
    }  
  }
  
  export default withRouter(DetailCharacter);