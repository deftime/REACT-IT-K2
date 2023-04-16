import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Raiting />
      <Accordion />
    </div>
  );
}

function Raiting() {
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

function Accordion() {
  return (
    <div>
      <AccPalte />
      <AccContent />
    </div>
  )
}

function Star() {
  return (
    <div>Star</div>
  )
}

function AppTitle() {
  return (
    <>
    THIS is REACT!
    </>
  )
}

function AccPalte() {
  return (
    <div className="plate">
      Opener
    </div>
  )
}

function AccContent() {
  return (
    <div className="content">
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
}

export default App;
