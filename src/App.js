import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='App'>
    <Header />
  
      <Main>
        <Sidebar/>        
      </Main>
  </div>
  );
}

export default App;
