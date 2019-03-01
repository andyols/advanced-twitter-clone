import React from 'react';
import './App.css';
import NavComponent from './components/NavComponent/index';
import LeftComponent from './components/LeftComponent/index';
import MiddletComponent from './components/MiddleComponent/index';
import RightComponent from './components/RightComponent/index';

function App() {
  return (
    <div>
      <NavComponent />
      <div className="App">
        <LeftComponent />
        <MiddletComponent />
        <RightComponent />
      </div>
    </div>
  );
}
export default App;
