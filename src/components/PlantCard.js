import React, { useState } from "react";

function PlantCard({ plants }) {
  const [showFront, setShowFront] = useState(true)

  return (
    <li className="card">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
