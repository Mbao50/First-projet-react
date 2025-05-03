import React, { useState } from 'react'

function Panier() {
  const [panier, setPanier]= useState([]);
  
  function addToCard(fruit){
    setPanier((panier) => [...panier, fruit])
  }
      return (
        <div>
          <button onClick={() => addToCard("Pomme")}>Pomme</button>
          <button onClick={() => addToCard("Banana")}>Banana</button>
          <button onClick={() => addToCard("Poire")}>Poire</button>
          <button onClick={() => addToCard("Melon")}>Melon</button>

          <div>
            <ul>
              {panier.map((fruit, index) => (
                <li key={index}>{fruit}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    

export default Panier