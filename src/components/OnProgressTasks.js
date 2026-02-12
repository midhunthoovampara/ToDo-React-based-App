import React from 'react';

function OnProgressTasks({ toDos, setToDos }) {
  return (
    <div className="status-section">
      <h3>On Progress</h3>
      {toDos.map((obj) => (
        <div key={obj.id} className="todo">
          <div className="left">
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i
              onClick={() => {
                setToDos(toDos.map(item => item.id === obj.id ? { ...item, status: 'completed' } : item));
              }}
              className="fas fa-check"
              title="Mark as Completed"
            ></i>
            <i
              onClick={() => {
                setToDos(toDos.map(item => item.id === obj.id ? { ...item, status: 'pending' } : item));
              }}
              className="fas fa-arrow-left"
              title="Move to Incomplete"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnProgressTasks;
