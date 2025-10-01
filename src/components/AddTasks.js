import React, { useRef } from 'react'
import './AddTasks.css';

export const AddTasks = ({tasks, setTasks}) => {

    const [isAddItemVisible, setAddItemVisibility] = React.useState(false);

    const newTaskItemRef = useRef("");

    //const [newTaskText, setNewTask] = React.useState("");

    function isEmptyOrWhitespace(value) {
        return (value == null || 
                (typeof value === "string" && value.trim().length === 0));
    }

    function addNewTaskItem(event){

        event.preventDefault();
        console.log("Adding new task item: " + newTaskItemRef.current.value);
        console.log("Before adding new task item, size: " + tasks.length);
        //newTaskItem.push({id: getTaskIndex(), taskName: newTaskItemRef.current.value});

        if(isEmptyOrWhitespace(newTaskItemRef.current.value)){
            alert("Task name cannot be empty");
            return;
        }

        const newlyAddedTaskItem = {
            id: getTaskIndex(),
            taskName: newTaskItemRef.current.value
        }

        //setNewTaskItem(newTaskItem);
        console.log(" id: "+ newlyAddedTaskItem.id + " name: " + newlyAddedTaskItem.taskName);
        setTasks([newlyAddedTaskItem, ...tasks]);
        console.log("After adding new task item, size:" + tasks.length);
        //setNewTask("");
        //console.log("newTaskText after reset: " + newTaskText);
        //newTaskMap.push({id: getTaskIndex(), taskName: newTaskText});
        //setNewTask("");
        document.getElementById("addNewTaskForm").reset();
        setAddItemVisibility(false);
        return ;

    }

    function handleInputTextChange(event){

        //event.preventDefault();
        //setNewTask(event.target.value);
        //console.log("newTaskText: " + newTaskText);
        //setAddItemVisibility(true);
    }

    function getTaskIndex(){
        return Math.floor(Math.random() * 1000000);
    }

    function displayNewItem(){
        return (
            <div key={getTaskIndex()} className="taskcard">
                <li className="taskItem">  
                    {/*
                      Since we are using useRef(), we will not be able to 
                      render the below <span>, to render it, use useState()
                      coupled with onChange event on <input> element!  
                    */}
                    <span>{newTaskItemRef.current.value} </span>
                </li>
            </div>
        );
    }


  return (
            <section className="addTasks" >
                <ul>
                <div>
                <form id="addNewTaskForm" className="header" onSubmit={addNewTaskItem} >
                    <span>
                        {/* 
                            <input ref={newTaskItemRef} /> is the replacement of 
                            <input onChange={(e) => handleInputTextChange(e)}/> 
                        */}
                        <input ref={newTaskItemRef} name="addTask" type="text" size="91" placeholder="Type your Task Name here..." autoComplete="off" />
                    </span>
                    <span>
                        <button name="addTaskButton" type="submit">Add Task</button>
                    </span>
                </form>

                {isAddItemVisible ? <div>{displayNewItem()}</div> : null}
                </div>
                </ul>
        </section>
  )
}
