import React from 'react'

export const TaskCard = ({item, handleDelete}) => {
  
  //console.log(" item: " + item.id + " - " + item.taskName);

  return (
    
    <div className="taskcard">
      <li className="taskItem">
          <span id={item.id}>{item.taskName} </span>
          <button onClick={() => handleDelete(item.id)} className='delete'>Delete</button>
      </li>
    </div>

  )
}
