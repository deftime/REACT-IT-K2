import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
  return (
    <div className="App">
      <AppTitle title={'This is REACT!'}/>
      <AppTitle title={'This is framework...'}/>
      <Rating value={3} />
      <Accordion title={'Qu-1'}/>
      <Rating value={4} />
      <Accordion title={'Qu-2'}/>
    </div>
  );
}

function AppTitle(props: any) {
  return (
    <h1>{props.title}</h1>
  )
}

export default App;
