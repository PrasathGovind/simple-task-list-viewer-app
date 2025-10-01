import React, { useRef } from 'react'
import './AddTasks.css';

export const AddTasks = ({tasks, setTasks}) => {

    const [newTaskText, setNewTask] = React.useState("");

    const [newTaskItem, setNewTaskItem] = React.useState([]);

    const newTaskItemRef = useRef("");

    //const newTaskMap = [];

    function addNewTaskItem(){
        console.log("Adding new task item: " + newTaskText);
        console.log("Before adding new task item, size: " + tasks.length);
        //newTaskItem.push({id: getTaskIndex(), taskName: newTaskItemRef.current.value});

        const newTaskItem2 = {
            id: getTaskIndex,
            name: newTaskItemRef.current.value
        }

        //setNewTaskItem(newTaskItem);
        console.log(" id: "+ newTaskItem2.id + " name: " + newTaskItem2.taskName);
        setTasks([...tasks, newTaskItem2]);
        console.log("After adding new task item, size:" + tasks.length);
        //setNewTask("");
        //console.log("newTaskText after reset: " + newTaskText);
        //newTaskMap.push({id: getTaskIndex(), taskName: newTaskText});
        return ;

    }

    function handleInputTextChange(event){
        setNewTask(event.target.value);
        console.log("newTaskText: " + newTaskText);
        //newTaskMap.push({id: getTaskIndex(), taskName: newTaskText});
    }

    function getTaskIndex(){
        return Math.floor(Math.random() * 1000000);
    }

    function displayNewItem(){
        return (
            <div key={getTaskIndex()} className="taskcard">
                <li className="taskItem">  
                    <span>{newTaskItemRef.current.value} </span>
                </li>
            </div>
        );
    }

  return (
            <section className="addTasks" >
                <ul>
                <div>
                <form className="header" onSubmit={addNewTaskItem} >
                    <span>
                        <input onChange={ (e)=> handleInputTextChange(e) } name="addTask" type="text" size="91" placeholder="Add New Task" autoComplete="off" ref={newTaskItemRef}/>
                    </span>
                    <span>
                        <button name="addTaskButton" type="submit">Add Task</button>
                    </span>
                </form>

                {<div> {displayNewItem()} </div>}
                </div>
                </ul>
        </section>
  )
}
