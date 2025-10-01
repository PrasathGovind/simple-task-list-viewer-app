import React from 'react'
import './TaskList.css'
import { TaskCard } from './TaskCard';

export const TaskList = ({tasks, setTasks}) => {

    const buttonShowText = "Show Tasks";

    const buttonHideText = "Hide Tasks";

    //const refTasks = React.useRef([...tasks, taskMap]);

    const [task, showTask] = React.useState([]);

    const [buttonLabel, setButtonLabel] = React.useState(buttonHideText);

    const [taskSectionVisible, setTaskSectionVisibility] = React.useState(true);
    

    function handleClick(){

        if(taskSectionVisible){

            console.log("Hiding Task Section");
            console.log("tasks Size: " + tasks.length);
            //setTasks([]);
            //showTask([]);
            setButtonLabel(buttonShowText);
            setTaskSectionVisibility(false);
        }
        else{
            console.log("Showing Task Section");
            console.log("tasks Size: " + tasks.length);
            //setTasks(refTasks.current);
            //setTasks([...tasks, taskMap]);
            //showTask(tasks);
            setButtonLabel(buttonHideText);
            setTaskSectionVisibility(true);
        }
    return ; 
    }


    function handleDelete(id){
        showTask(task.filter(item => item.id !==id));
    }

    function displayTaskCards(){


        //console.log("taskMap Size: " + taskMap.length);

        //const tasksMap = taskMap.concat(tasks);

        console.log("tasks Size: " + tasks.length);

        //setTasks(tasksMap);

        return tasks.map((item) => (
                    <TaskCard key={item.id} item={item} handleDelete={handleDelete} />
                )) 

    }

  return (
        <section className="tasklist">
            <ul>
                <div className="header">
                    <h1> ***** Task List ****** </h1>
                    <button className="trigger" onClick={() => handleClick()} style={{marginLeft: '20px'}}>{buttonLabel}</button>
                </div>
                
                {taskSectionVisible && displayTaskCards()}
          </ul>
        </section>
  )
}
