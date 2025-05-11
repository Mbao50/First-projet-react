// import React, { useState } from 'react';
// import './Panier.css';
// import { v4 as uuidv4 } from 'uuid';

// function Panier() {
//   const [panier, setPanier] = useState([]);

//   function addToCard(nom) {
//     const fruit = {
//       id: uuidv4(),
//       nom: nom,
//       prix: Math.floor(Math.random() * 10) + 1, // Prix aléatoire entre 1 et 10
//     };
//     setPanier((panier) => [...panier, fruit]);
//   }

//   function removeFruitById(id) {
//     setPanier((panier) => panier.filter((fruit) => fruit.id !== id));
//   }

//   const total = panier.reduce((sum, fruit) => sum + fruit.prix, 0);

//   return (
//     <div className="container">
//       <h2>Mon Panier</h2>

//       <div className="buttons">
//         <button onClick={() => addToCard("Pomme")}>Pomme</button>
//         <button onClick={() => addToCard("Banana")}>Banana</button>
//         <button onClick={() => addToCard("Poire")}>Poire</button>
//         <button onClick={() => addToCard("Melon")}>Melon</button>
//       </div>

//       <div className="info">
//         <p>Nombre d'éléments : {panier.length}</p>
//         <p>Prix total : {total} €</p>
//       </div>

//       <ul className="panier-list">
//         {panier.map((fruit) => (
//           <li key={fruit.id} className="panier-item">
//             {fruit.nom} - {fruit.prix} €
//             <button
//               className="delete-btn"
//               onClick={() => removeFruitById(fruit.id)}
//             >
//               Supprimer
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Panier;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">My Stylish To-Do List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-4">
            <input 
              type="text" 
              className="form-control"
              placeholder="Add a new task..."
              value={task} 
              onChange={(e) => setTask(e.target.value)} 
            />
            <button className="btn btn-success" onClick={addTask}>Add Task</button>
          </div>

          <ul className="list-group">
            {tasks.map((task, index) => (
              <li 
                key={index} 
                className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'task-completed' : ''}`}
                onClick={() => toggleTaskCompletion(index)}
              >
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={(e) => { e.stopPropagation(); deleteTask(index); }}
                >
                  <i className="fas fa-trash"></i>
                Delete Task</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
