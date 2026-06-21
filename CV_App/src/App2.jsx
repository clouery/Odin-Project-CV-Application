import { useState } from 'react'
import './App2.css'
import { Person } from './Person'
import { Education } from './Education'
import { Experience } from './Experience'

function App2() {
  const [openSection, setOpenSection] = useState("showing")

  const [inputP, setInputP] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: "9999 9999",
    address: "Singapore"
  })

  const [inputEdu, setInputEdu] = useState([
    {
      id: 1,
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
      id: 1,
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
    setOpenSection(openSection === section ? "" : section)
  }

  function personOnChange(field, value) {
    setInputP(prev => ({ ...prev, [field]: value }))
  }

  function eduOnChange(id, field, value) {
    setInputEdu(prev => prev.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ))
  }

  function toggleEduCollapse(id) {
    setInputEdu(prev => prev.map(edu =>
      edu.id === id ? { ...edu, isCollapsed: !edu.isCollapsed } : edu
    ))
  }

  function toggleEduHide(id) {
    setInputEdu(prev => prev.map(edu =>
      edu.id === id ? { ...edu, isHidden: !edu.isHidden } : edu
    ))
  }

  function removeEdu(id) {
    setInputEdu(prev => prev.filter(edu => edu.id !== id))
  }

  function addEducation() {
    setInputEdu(prev => [
      ...prev,
      {
        id: Date.now(),
        sch: "",
        location: "",
        deg: "",
        startDate: "",
        endDate: "",
        isCollapsed: false,
        isHidden: false,
      }
    ])
  }

  function expOnChange(id, field, value) {
    setInputExp(prev => prev.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  function toggleExpCollapse(id) {
    setInputExp(prev => prev.map(exp =>
      exp.id === id ? { ...exp, isCollapsed: !exp.isCollapsed } : exp
    ))
  }

  function toggleExpHide(id) {
    setInputExp(prev => prev.map(exp =>
      exp.id === id ? { ...exp, isHidden: !exp.isHidden } : exp
    ))
  }

  function removeExp(id) {
    setInputExp(prev => prev.filter(exp => exp.id !== id))
  }

  function addExperience() {
    setInputExp(prev => [
      ...prev,
      {
        id: Date.now(),
        cname: "",
        pos: "",
        startDate: "",
        endDate: "",
        location: "",
        desc: "",
        isCollapsed: false,
        isHidden: false,
      }
    ])
  }

  return (
    <div className="container">
      <div className="sidebar">
        {/* Personal Details */}
        <button className="section-header" onClick={() => toggleSection("showing")}>
          <h2>Personal Details</h2>
          {/* <span className={`chevron ${openSection === "personal" ? "open" : ""}`}>▼</span> */}
        </button>
        {openSection === "showing" && (
          <div className="form-card">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                value={inputP.name}
                onChange={(e) => personOnChange("name", e.target.value)}
                placeholder="Enter full name"
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={inputP.email}
                onChange={(e) => personOnChange("email", e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={inputP.number}
                onChange={(e) => personOnChange("number", e.target.value)}
                placeholder="Enter phone number"
              />
            </div>
            <div className="input-group">
              <label>Address</label>
              <input
                type="text"
                value={inputP.address}
                onChange={(e) => personOnChange("address", e.target.value)}
                placeholder="Enter address"
              />
            </div>
          </div>
        )}

        {/* Education */}
        <button className="section-header" onClick={() => toggleSection("education")}>
          <h2>Education</h2>
          <span className={`chevron ${openSection === "education" ? "open" : ""}`}>▼</span>
        </button>
        {openSection === "education" && (
          <div className="forms-container">
            {inputEdu.map(edu => (
              edu.isCollapsed ? (
                <button
                  key={edu.id}
                  className="collapsed-bar"
                  onClick={() => toggleEduCollapse(edu.id)}
                >
                  <span className="collapsed-title">{edu.sch || "(No School)"}</span>
                  <span
                    className="eye-icon"
                    onClick={(e) => { e.stopPropagation(); toggleEduHide(edu.id); }}
                  >
                    {edu.isHidden ? "🙈" : "👁"}
                  </span>
                </button>
              ) : (
                <div key={edu.id} className="form-card">
                  <div className="input-group">
                    <label>School</label>
                    <input
                      type="text"
                      value={edu.sch}
                      onChange={(e) => eduOnChange(edu.id, "sch", e.target.value)}
                      placeholder="Enter school / university"
                    />
                  </div>
                  <div className="input-group">
                    <label>Degree</label>
                    <input
                      type="text"
                      value={edu.deg}
                      onChange={(e) => eduOnChange(edu.id, "deg", e.target.value)}
                      placeholder="Enter degree / field of study"
                    />
                  </div>
                  <div className="dates-row">
                    <div className="input-group">
                      <label>Start Date</label>
                      <input
                        type="text"
                        value={edu.startDate}
                        onChange={(e) => eduOnChange(edu.id, "startDate", e.target.value)}
                        placeholder="Enter start date"
                      />
                    </div>
                    <div className="input-group">
                      <label>End Date</label>
                      <input
                        type="text"
                        value={edu.endDate}
                        onChange={(e) => eduOnChange(edu.id, "endDate", e.target.value)}
                        placeholder="Enter end date"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Location <span className="optional">optional</span></label>
                    <input
                      type="text"
                      value={edu.location}
                      onChange={(e) => eduOnChange(edu.id, "location", e.target.value)}
                      placeholder="Enter location"
                    />
                  </div>
                  <div className="form-buttons">
                    <button className="btn-delete" onClick={() => removeEdu(edu.id)}>Delete</button>
                    <button className="btn-cancel" onClick={() => toggleEduCollapse(edu.id)}>Cancel</button>
                    <button className="btn-save" onClick={() => toggleEduCollapse(edu.id)}>Save</button>
                  </div>
                </div>
              )
            ))}
            <button className="add-button" onClick={addEducation}>
              <span className="plus">+</span> Education
            </button>
          </div>
        )}

        {/* Experience */}
        <button className="section-header" onClick={() => toggleSection("experience")}>
          <h2>Experience</h2>
          <span className={`chevron ${openSection === "experience" ? "open" : ""}`}>▼</span>
        </button>
        {openSection === "experience" && (
          <div className="forms-container">
            {inputExp.map(exp => (
              exp.isCollapsed ? (
                <button
                  key={exp.id}
                  className="collapsed-bar"
                  onClick={() => toggleExpCollapse(exp.id)}
                >
                  <span className="collapsed-title">{exp.cname || "(No Company)"}</span>
                  <span
                    className="eye-icon"
                    onClick={(e) => { e.stopPropagation(); toggleExpHide(exp.id); }}
                  >
                    {exp.isHidden ? "🙈" : "👁"}
                  </span>
                </button>
              ) : (
                <div key={exp.id} className="form-card">
                  <div className="input-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={exp.cname}
                      onChange={(e) => expOnChange(exp.id, "cname", e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="input-group">
                    <label>Position Title</label>
                    <input
                      type="text"
                      value={exp.pos}
                      onChange={(e) => expOnChange(exp.id, "pos", e.target.value)}
                      placeholder="Enter position title"
                    />
                  </div>
                  <div className="dates-row">
                    <div className="input-group">
                      <label>Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => expOnChange(exp.id, "startDate", e.target.value)}
                        placeholder="Enter start date"
                      />
                    </div>
                    <div className="input-group">
                      <label>End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => expOnChange(exp.id, "endDate", e.target.value)}
                        placeholder="Enter end date"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Location <span className="optional">optional</span></label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => expOnChange(exp.id, "location", e.target.value)}
                      placeholder="Enter location"
                    />
                  </div>
                  <div className="input-group">
                    <label>Description <span className="optional">optional</span></label>
                    <textarea
                      value={exp.desc}
                      onChange={(e) => expOnChange(exp.id, "desc", e.target.value)}
                      placeholder="Enter description"
                      rows={3}
                    />
                  </div>
                  <div className="form-buttons">
                    <button className="btn-delete" onClick={() => removeExp(exp.id)}>Delete</button>
                    <button className="btn-cancel" onClick={() => toggleExpCollapse(exp.id)}>Cancel</button>
                    <button className="btn-save" onClick={() => toggleExpCollapse(exp.id)}>Save</button>
                  </div>
                </div>
              )
            ))}
            <button className="add-button" onClick={addExperience}>
              <span className="plus">+</span> Experience
            </button>
          </div>
        )}
      </div>

      {/* CV Preview */}
      <div className="cv">
        <Person
          name={inputP.name}
          email={inputP.email}
          number={inputP.number}
          address={inputP.address}
        />
        {!inputEdu.every(e => e.isHidden) && <p className="title">EDUCATION</p>}
        {inputEdu.filter(e => !e.isHidden).map(edu => (
          <Education
            key={edu.id}
            sch={edu.sch}
            location={edu.location}
            deg={edu.deg}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))}
        {!inputExp.every(e => e.isHidden) && <p className="title">EXPERIENCE</p>}
        {inputExp.filter(e => !e.isHidden).map(exp => (
          <Experience
            key={exp.id}
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

export default App2
