import React from 'react';

function CompletedTasks({ toDos, setToDos }) {
  return (
    <div className="status-section">
      <h3>Completed Tasks</h3>
      {toDos.map((obj) => (
        <div key={obj.id} className="todo">
          <div className="left">
            <p className="completed-text">{obj.text}</p>
          </div>
          <div className="right">
            <i
              onClick={() => {
                setToDos(toDos.map(item => item.id === obj.id ? { ...item, status: 'onProgress' } : item));
              }}
              className="fas fa-undo"
              title="Move to On Progress"
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

export default CompletedTasks;
