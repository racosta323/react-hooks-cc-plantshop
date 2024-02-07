import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react"

function PlantList() {

const [plants, setPlants] = useState([])

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then (resp=>resp.json())
  .then ((allPlants)=>setPlants(allPlants))
}, [])

const renderCards = plants.map((plant)=>{
  return <PlantCard 
    key={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
  />
})

  return (
    <ul className="cards">
      {renderCards}
    </ul>
  );
}

export default PlantList;
