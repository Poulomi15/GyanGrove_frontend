
import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Poulomi's Portfolio</h1>
      </header>
      <main>
        <Introduction />
        <Skills />
        <ProjectList />
      </main>
      <footer>
        <p>&copy; 2024 Poulomi Chowdhury</p>
      </footer>
    </div>
  );
}

export default App;
