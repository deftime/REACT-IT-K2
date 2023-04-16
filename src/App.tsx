import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      THIS is REACT!
      <Raiting />
      <Accordion />
    </div>
  );
}

function Raiting () {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  )
}

function Accordion () {
  return (
    <div>
      <div>Plate</div>
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
    </div>
  )
}

function Star () {
  return (
    <div>Star</div>
  )
}

export default App;
