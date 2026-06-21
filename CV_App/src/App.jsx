import { useState } from 'react'
import './App.css'

import { Person } from './Person'
import { Education } from './Education'
import { Experience } from './Experience'
import { InputPerson } from './InputPerson'

function App() {
  const [inputP, setInputP] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: "9999 9999",
    address: "Singapore"
  })

  return (
    <div className="container">
      <div className="inputDetails">
        <InputPerson data={inputP} />
      </div>
      <div className="cv">

        < Person
          name={inputP.name}
          email={inputP.email}
          number={inputP.number}
          address={inputP.address}
        />

        <p className="title">EDUCATION</p>
        < Education />
        <p className="title">EXPERIENCE</p>
        < Experience />
      </div>
    </div>
  )
}

export default App
