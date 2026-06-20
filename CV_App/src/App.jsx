import { useState } from 'react'
import './App.css'

import { Person } from './Person'
import { Education } from './Education'
import { Experience } from './Experience'

function App() {

  return (
    <div className="container">
      <div className="inputDetails">
        
      </div>
      <div className="cv">
        < Person />
        < Education />
        < Experience />
      </div>
    </div>
  )
}

export default App
