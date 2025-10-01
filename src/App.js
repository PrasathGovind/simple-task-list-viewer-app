import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import { Notes } from './components/Notes';
import { AddTasks } from './components/AddTasks';

function App() {

  const taskMap = [
      {id: 412332, taskName: "Learn React"},
      {id: 745643, taskName: "Develop React App - Task Viewer"},
      {id: 123125, taskName: "Take Notes for React Topics learnt"},
      {id: 954643, taskName: "Check-in the code to Github"}
  ]

  const [tasks, setTasks] = React.useState(taskMap);

  return (

    <div className="App">
      <Header />
      <main>
        <AddTasks tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
        <Notes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
