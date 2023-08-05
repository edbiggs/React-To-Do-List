import React from 'react'


function ToDoList() {
    return (
        <div class='list-div'>
            <ul class='to-do-list'>
                <li class='list-item'>
                    <input type='text' class='text-input'></input>
                    <input type='checkbox' ></input>
                </li>
                
                <li class='list-item'>
                    <input type='text' class='text-input'></input>
                    <input type='checkbox' ></input>
                </li>
                <li class='list-item'>
                    <input type='text' class='text-input'></input>
                    <input type='checkbox' ></input>
                </li>
                <li class='list-item'>
                    <input type='text' class='text-input'></input>
                    <input type='checkbox' ></input>
                </li>
                <li class='list-item'>
                    <input type='text' class='text-input'></input>
                    <input type='checkbox' ></input>
                </li>
            </ul>
        </div>
    )
}

export default ToDoList