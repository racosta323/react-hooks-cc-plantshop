import React from "react";
import { useState } from "react"

function NewPlantForm({ onFormSubmit }) {

  const initialFormState = {
    name: "",
    image: "",
    price: ""
  }

  const [formData, setFormData] = useState(initialFormState)

  function handleChange(event){
    const key=event.target.name
    const value = event.target.value

    setFormData({
      ...formData,
      [key]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault()

    fetch(`http://localhost:6001/plants`,{
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(formData)
    })
    .then((resp)=>resp.json())
    .then((newPlant) => {
      onFormSubmit(newPlant)
      setFormData(initialFormState)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={formData.name}
          onChange ={handleChange} 
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL"
          value={formData.image}
          onChange ={handleChange} 
        />
        <input 
          type="number" 
          name="price"
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