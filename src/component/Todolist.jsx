import React, { useState } from 'react';
import './Todolist.css'; // Assure-toi d'importer le fichier CSS

function Todolist() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') {
            alert('La tâche ne peut pas être vide');
            return;
        }
        if (task.length > 20) {
            alert('La tâche ne peut pas contenir plus de 20 caractères');
            return;
        }
        const newTask = { id: Date.now(), name: task, completed: false };
        setTasks([...tasks, newTask]);
        setTask('');
    };

    return (
        <div className="todo-container">
            <div className="todo-box">
                <h1 className="todo-title">Ma To-do List</h1>
                <form onSubmit={handleSubmit} className="todo-form">
                    <input
                        type="text"
                        name="todo"
                        placeholder="Entrez une tâche"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="todo-input"
                    />
                    <button type="submit" className="todo-button">
                        Ajouter
                    </button>
                </form>
                <ul className="todo-list">
                    {tasks.map((task) => (
                        <li key={task.id} className="todo-item">
                            {task.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todolist;
