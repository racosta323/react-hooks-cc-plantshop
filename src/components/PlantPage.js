import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react"

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then (resp=>resp.json())
    .then ((allPlants)=>setPlants(allPlants))
  }, [])
  
  function onFormSubmit(formData){
    const updatedPlants = [...plants, formData]
    setPlants(updatedPlants)
  }

  function searchHandler(e){
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search onSearch={searchHandler} search={search}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
