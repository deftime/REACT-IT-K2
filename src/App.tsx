import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import Switcher from "./components/Switcher/Switcher";

type TitleType = {
    title: string
}

function App() {
  return (
    <div className="App">
        <Switcher switch={true}/>

      {/*<AppTitle title={'This is REACT!'}/>*/}
      {/*<Rating value={5} />*/}
      {/*<Accordion title={'Qu-1'} collapse={true}/>*/}

      {/*<AppTitle title={'This is framework...'}/>*/}
      {/*<Rating value={4} />*/}
      {/*<Accordion title={'Qu-2'} />*/}
    </div>
  );
}

function AppTitle(props: TitleType) {
  return (
    <h1>{props.title}</h1>
  )
}

export default App;
