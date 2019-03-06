import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';




const AbstractCharacter = (props) => {

  let statusLife;
  props.status !== "Alive" ? statusLife = "1": statusLife = "0"
  
      return (
          <div key={props.id} className="card my-2 mx-2"> 
            <div  className="card-body">
              <img src={props.image} className="card-img-top" alt="imagen-personaje" style={{filter: "grayscale("+statusLife+")"}} />
              <h6 className="card-title pt-3">Nombre: {props.name}</h6>
              <p className="card-text">Id: {props.id}</p>
              <Link to = { '/character/'+props.id} ><button className="btn btn-info" >Ver más</button></Link>
            </div>
          </div>  
      );  
  }
  
  export default AbstractCharacter;
  