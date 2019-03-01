import React from 'react';
import './App.css';
import LeftComponent from './components/LeftComponent/index';
import MiddletComponent from './components/MiddleComponent/index';
import RightComponent from './components/RightComponent/index';

function App() {
  return (
    <div className="App">
      <LeftComponent />
      <MiddletComponent />
      <RightComponent />
    </div>
  );
}
export default App;
