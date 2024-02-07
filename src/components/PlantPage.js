import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react"

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then (resp=>resp.json())
    .then ((allPlants)=>setPlants(allPlants))
  }, [])
  
  function onFormSubmit(formData){
    const updatedPlants = [...plants, formData]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
