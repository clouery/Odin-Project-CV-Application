import { useState } from 'react'
import './App.css'

import { Person } from './Person'
import { Education } from './Education'
import { Experience } from './Experience'

import { InputPerson } from './InputPerson'
import { InputEdu } from './InputEdu'
import { InputExp } from './InputExp'

function App() {
  const [openSection, setOpenSection] = useState("show");

  const [inputP, setInputP] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: "9999 9999",
    address: "Singapore"
  })

  const [inputEdu, setInputEdu] = useState([
    {
      sch: "Singapore Management University",
      location: "Singapore",
      deg: "Computer Science and Business Management",
      startDate: "8 Aug 2025",
      endDate: "1 Dec 2029",
      isCollapsed: true,
      isHidden: false,
    }
  ])

  const [inputExp, setInputExp] = useState([
    {
      id: crypto.randomUUID(),
      cname: "XZ pte ltd",
      pos: "CEO",
      startDate: "01 May 2026",
      endDate: "08 Aug 2026",
      location: "City Hall - Circle Line + bus 7",
      desc: "This is my company that i start since the Summer Break started",
      isCollapsed: true,
      isHidden: false,
    }
  ])

  function toggleSection(section) {
    setOpenSection(openSection === section? "" : section);
  }

  function personOnChange(field, value) {
    setInputP(prev => ({
      ...prev,
      [field]: value
    }));
  }

  function eduOnChange(index, field, value) {
    setInputEdu(prev =>
      prev.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      )
    );
  }

  function expOnChange(index, field, value) {
    setInputExp(prev =>
      prev.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      )
    );
  }

  function addEducation() {
    setInputEdu(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sch: "",
        location: "",
        deg: "",
        startDate: "",
        endDate: "",
        isCollapsed: false,
        isHidden: false
      }
    ]);
  }

  function addExperience() {
    setInputExp(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        cname: "",
        pos: "",
        startDate: "",
        endDate: "",
        location: "",
        desc: ""
      }
    ]);
  }

  function toggleEduCollapse(id) {
    setInputEdu(prev => prev.map(
      // inverse collapse
      exp => exp.id === id ? {...exp, isCollapsed: !exp.isCollapsed} : exp
    ))
  }

  function toggleExpCollapse(id) {
    setInputExp(prev => prev.map(
      // inverse collapse
      exp => exp.id === id ? {...exp, isCollapsed: !exp.isCollapsed} : exp
    ))
  }


  return (
    <div className="container">
      <div className="sidebar">

        {/* Personal */}
        <button className="section-header" onClick={() => toggleSection("show")}>
          <h2>Personal Details</h2>
        </button>
      </div>

      {/* if Toggled, we show the text form */}
      {openSection === "show" && (
        < InputPerson 
          data={inputP}
          onChange={personOnChange}
        />
      )}

      {/* Education */}


      <div className="cv">

        < Person
          name={inputP.name}
          email={inputP.email}
          number={inputP.number}
          address={inputP.address}
        />

        <p className="title">EDUCATION</p>
        {inputEdu.map((edu, index) => (
          <Education
            key={index}
            sch={edu.sch}
            location={edu.location}
            deg={edu.deg}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))}
        <p className="title">EXPERIENCE</p>
        {inputExp.map((exp, index) => (
          <Experience
            key={index}
            cname={exp.cname}
            pos={exp.pos}
            startDate={exp.startDate}
            endDate={exp.endDate}
            location={exp.location}
            desc={exp.desc}
          />
        ))}
      
      </div>
    </div>
  )
}

export default App
