import React from 'react';
import './App.css';

//components
import ChuckNorris from './components/chuckNorris';
import ISS from './components/iss'
import Number from './components/number';
import HarryPotter from './components/harryPotter'

function App() {
  return (
    <div>
      <header className='header'>
        <h1>API Fun</h1>
      </header>
      <main className='main'>
        <ChuckNorris />
        <ISS />
        <Number />
        <HarryPotter />
      </main>
    </div>
  )
}

export default App;