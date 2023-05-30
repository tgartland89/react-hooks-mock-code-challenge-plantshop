import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then(setPlants);
}, []);


function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant]);
}

const plantsToDisplay = plants.filter((plant) =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  
return (
    <main>
      <NewPlantForm onHandleAddPlant= {handleAddPlant} />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;



