import React from 'react'
import './TaskList.css'
import { TaskCard } from './TaskCard';

export const TaskList = () => {

    const buttonShowText = "Show Tasks";

    const buttonHideText = "Hide Tasks";

    const taskMap = [
        {id: 412332, taskName: "Learn React"},
        {id: 745643, taskName: "Develop React App - Task Viewer"},
        {id: 123125, taskName: "Take Notes for React Topics learnt"},
        {id: 954643, taskName: "Check-in the code to Github"}
    ]

    const [task, showTask] = React.useState([]);

    const [buttonLabel, setButtonLabel] = React.useState(buttonShowText);

    const [taskSectionVisible, setTaskSectionVisibility] = React.useState(false);
    

    function handleClick(){

        if(taskSectionVisible){
            showTask([]);
            setButtonLabel(buttonShowText);
            setTaskSectionVisibility(false);
        }
        else{
            showTask(taskMap);
            setButtonLabel(buttonHideText);
            setTaskSectionVisibility(true);
        }
    return ; 
    }
    
    function htmlDecode(input){
        console.log("input: " + input);
        var e = document.createElement('div');
        e.innerHTML = input;
        var output =  e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        console.log("output: " + output);
        return output;
    }

    function handleDelete(id){
        showTask(task.filter(item => item.id !==id));
    }

    function displayTaskCards(){

        return task.map((item) => (
                    console.log("item: " + item.taskName),
                    <TaskCard key={item.id} item={item} handleDelete={handleDelete} />
                )) 

    }

  return (
        <section className="tasklist">
            <ul>
                <div className="header">
                    <h1>Task List</h1>
                    <button className="trigger" onClick={() => handleClick()} style={{marginLeft: '20px'}}>{buttonLabel}</button>
                </div>
                
                {displayTaskCards()}
          </ul>
        </section>
  )
}
