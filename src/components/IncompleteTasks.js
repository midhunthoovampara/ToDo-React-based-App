import React from 'react';

function IncompleteTasks({ toDos, setToDos }) {
  return (
    <div className="status-section">
      <h3>Incomplete Tasks</h3>
      {toDos.map((obj) => (
        <div key={obj.id} className="todo">
          <div className="left">
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i
              onClick={() => {
                setToDos(toDos.map(item => item.id === obj.id ? { ...item, status: 'onProgress' } : item));
              }}
              className="fas fa-play"
              title="Start Progress"
            ></i>
            <i
              onClick={() => {
                setToDos(toDos.filter((obj2) => obj2.id !== obj.id));
              }}
              className="fas fa-times"
              title="Delete"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IncompleteTasks;
