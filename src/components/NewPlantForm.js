import React from "react";
import { useState } from "react"

function NewPlantForm() {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(event){
    const key=event.target.id
    const value = event.target.value

    setFormData({
      ...formData,
      [key]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    //onTaskFormSubmit
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          id="name"
          placeholder="Plant name"
          value={formData.name}
          onChange ={handleChange} 
        />
        <input 
          type="text" 
          name="image" 
          id="image" 
          placeholder="Image URL"
          value={formData.image}
          onChange ={handleChange} 
        />
        <input 
          type="number" 
          name="price"
          id="price" 
          step="0.01" 
          placeholder="Price"
          value={formData.price}
          onChange ={handleChange} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

//https://i.ebayimg.com/images/g/Ml4AAOSwjCdhWOy6/s-l1200.webp