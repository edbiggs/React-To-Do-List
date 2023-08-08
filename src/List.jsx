import React, { useState } from 'react';

const Test = () => {
  const [inputBoxes, setInputBoxes] = useState([{ id: 0 }]);

  const handleAddInputBox = () => {
    setInputBoxes(prevBoxes => [...prevBoxes, { id: prevBoxes.length }]);
  };

  const handleRemoveInputBox = id => {
    const newBoxes = inputBoxes.filter(
        (box) => box.id != id
    )
    setInputBoxes(newBoxes)
  }

  return (
    <div class='list-div'>
      <ul class='to-do-list'>
        {inputBoxes.map((inputBox) => (
          <li class='list-item'>
            <input type='text' class='text-input'></input>
            <input type='checkbox' class="checkbox"></input>
            <button onClick= { () => handleRemoveInputBox(inputBox.id)} class="remove">Remove</button>
          </li>
        ))}
        <button onClick={handleAddInputBox}>Add Line</button>
      </ul>
    </div>
  );
};

export default Test;