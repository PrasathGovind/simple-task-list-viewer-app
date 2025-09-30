import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import { Notes } from './components/Notes';

function App() {

  return (

    <div className="App">
      <Header />
      <TaskList />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
