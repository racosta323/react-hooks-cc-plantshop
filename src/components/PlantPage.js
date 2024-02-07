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

  const filterSearch = plants.filter((plant)=>{
    const lowerCasePlantsName = plant.name.toLowerCase()
    const lowerCaseSearch = search.toLocaleLowerCase()
    if(search === "") return true;
    if(lowerCasePlantsName===lowerCaseSearch){
      return plant
    }
  })



  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search onSearch={searchHandler} search={search}/>
      <PlantList plants={filterSearch}/>
    </main>
  );
}

export default PlantPage;
