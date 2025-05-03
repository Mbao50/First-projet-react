import React, { useState } from 'react';
import './Panier.css';
import { v4 as uuidv4 } from 'uuid';

function Panier() {
  const [panier, setPanier] = useState([]);

  function addToCard(nom) {
    const fruit = {
      id: uuidv4(),
      nom: nom,
      prix: Math.floor(Math.random() * 10) + 1, // Prix aléatoire entre 1 et 10
    };
    setPanier((panier) => [...panier, fruit]);
  }

  function removeFruitById(id) {
    setPanier((panier) => panier.filter((fruit) => fruit.id !== id));
  }

  const total = panier.reduce((sum, fruit) => sum + fruit.prix, 0);

  return (
    <div className="container">
      <h2>Mon Panier</h2>

      <div className="buttons">
        <button onClick={() => addToCard("Pomme")}>Pomme</button>
        <button onClick={() => addToCard("Banana")}>Banana</button>
        <button onClick={() => addToCard("Poire")}>Poire</button>
        <button onClick={() => addToCard("Melon")}>Melon</button>
      </div>

      <div className="info">
        <p>Nombre d'éléments : {panier.length}</p>
        <p>Prix total : {total} €</p>
      </div>

      <ul className="panier-list">
        {panier.map((fruit) => (
          <li key={fruit.id} className="panier-item">
            {fruit.nom} - {fruit.prix} €
            <button
              className="delete-btn"
              onClick={() => removeFruitById(fruit.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Panier;
