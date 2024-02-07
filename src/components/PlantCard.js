import React from "react";
import { useState } from "react"

function PlantCard({ name, image, price }) {

  const[stock, setStock]= useState(true)

  return (
    <li className="card" data-testid="plant-item">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {stock ? (
        <button 
          className="primary"
          onClick={()=>{setStock(false)}}
        > 
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
