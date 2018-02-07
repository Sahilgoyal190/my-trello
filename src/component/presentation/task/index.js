import React from 'react';
import './main.css';


const Task = ({ task, handleClick, index }) => {
    return (
        <div className="item" onClick={handleClick.bind(null, task, index)}>
            <div className="item-name">{task.name}</div>
            <div className="item-container">
                <div className="item-content">
                    <p>{task.description}</p>
                </div>
            </div>
            <div className="item-perfomers">
                    Due-Date: <span className="duedate">{task.dueDate}</span>
            </div>
        </div>
    )
}


export default Task