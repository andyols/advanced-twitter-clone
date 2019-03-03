import React from 'react'
import NavComponent from './components/NavComponent/index'
import LeftComponent from './components/LeftComponent/index'
import MiddletComponent from './components/MiddleComponent/index'
import RightComponent from './components/RightComponent/index'

function App() {
  return (
    <div>
      <NavComponent />

      <div className="row">
        <div className="col s3 offset-s1">
          <LeftComponent />
        </div>
        <div className="col s4">
          <MiddletComponent />
        </div>
        <div className="col s3">
          <RightComponent />
        </div>
      </div>
    </div>
  )
}
export default App
