import { useState } from 'react'
import './App.css'

import { Person } from './Person'
import { Education } from './Education'
import { Experience } from './Experience'

import { InputPerson } from './InputPerson'
import { InputEdu } from './InputEdu'
import { InputExp } from './InputExp'

function App() {
  const [openSection, setOpenSection] = useState("personal");

  const [inputP, setInputP] = useState({
    name: "Hor Xiang Zhi",
    email: "horxiangzhi@gmail.com",
    number: "+65 9123 8765",
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
    }
  ])

  const [inputExp, setInputExp] = useState([
    {
      id: crypto.randomUUID(),
      cname: "Singapore Stupid Hacks Hackathon 2026",
      pos: "2st Place",
      startDate: "2 May 2026",
      endDate: "2 May 2026",
      location: "Singapore Mangement University",
      desc: `
      It all started with a uniquely Singaporean idea from one of my teammate, we expanded on it. What began as a simple, fun idea quickly evolved into a full-fledged project that ultimately secured us 2nd place at the Singapore Stupid Hacks Hackathon. As my first-ever hackathon experience, it was an incredible journey of growth and collaboration. We even shared our work with the Reddit community (r/singapore) and were blown away by the overwhelming response! We were even featured on the news! (Lian He Zao Bao)`,
      isCollapsed: true,
    },
    {
      id: crypto.randomUUID(),
      cname: "Agent Forge AI Hackathon 2026",
      pos: "1st Place",
      startDate: "13 June 2026",
      endDate: "13 June 2026",
      location: "Singapore Mangement University",
      desc: `Can't believe I almost missed the top 3 teams announcements because I was searching for a toilet! Agent Forge AI Hackathon 2026 was a new experience for me and gave me new perspectives on working with AI. A big, big thanks to my teammates for the amazing teamwork! Out of 500+ registered builders at the Agent Forge AI Hackathon, my team and I won 1st place. 🏆 
      This hackathon taught me that building impactful AI systems is not just about writing the most code or moving the fastest. The most important work often happens before the first line of code is written.
      For agent-based systems especially, strong planning is crucial. Without clearly defining the problem, user expectations, and how each agent contributes, the system can easily become a collection of outputs rather than a meaningful solution.
      Through this experience, I learned that thoughtful planning, continuous discussion, and challenging our assumptions early are what allow AI systems to become more reliable, useful, and aligned with real-world needs.
      I may not be the strongest coder, but I realised my strength lies in connecting ideas, facilitating meaningful discussions, and identifying flaws or logical gaps early during the planning process. Those conversations helped us refine our approach and build a system that was more robust.
      The value of a multi-agent system isn't in generating more answers. It's in surfacing disagreement on purpose, exposing blind spots, and helping teams make better decisions before reality makes them expensive. For us, that meant making brand risk visible before a campaign goes live.
      `,
      isCollapsed: true,
    }
  ])

  function toggleSection(section) {
    setOpenSection(openSection === section ? "" : section);
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
        // isHidden: false
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
        desc: "",
        isCollapsed: false,
      }
    ]);
  }

  function removeEdu(id) {
    setInputEdu(idx => idx.filter(edu => edu.id !== id))
  }

  function removeExp(id) {
    setInputExp(idx => idx.filter(exp => exp.id !== id))
  }

  function toggleEduCollapse(id) {
    setInputEdu(prev => prev.map(
      // inverse collapse
      exp => exp.id === id ? { ...exp, isCollapsed: !exp.isCollapsed } : exp
    ))
  }

  function toggleExpCollapse(id) {
    setInputExp(prev => prev.map(
      // inverse collapse
      exp => exp.id === id ? { ...exp, isCollapsed: !exp.isCollapsed } : exp
    ))
  }


  return (
    <>
      <div className="container">
        <div className="sidebar">

          <button className="printBtn" onClick={() => window.print()}>
            Print CV
          </button>

          {/* Personal */}
          <button className="section-header" onClick={() => toggleSection("personal")}>
            <h2>Personal Details</h2>
          </button>
          {openSection === "personal" && (
            <div className="section-container">
              < InputPerson
                data={inputP}
                onChange={personOnChange}
              />
            </div>
          )}

          {/* Education */}
          <button className="section-header" onClick={() => toggleSection("education")}>
            <h2>Education</h2>
          </button>
          {openSection === "education" && (
            <div className='section-container'>
              {inputEdu.map((edu, index) => (
                <InputEdu
                  key={edu.id}
                  data={edu}
                  index={index}
                  onChange={(field, value) => eduOnChange(index, field, value)}
                  onClick={toggleEduCollapse}
                  removeEdu={removeEdu}
                />
              ))}

              <button className="addBtn" onClick={addEducation}>
                Add Education
              </button>
            </div>
          )}

          {/* Experience */}
          <button className="section-header" onClick={() => toggleSection("experience")}>
            <h2>Experience</h2>
          </button>
          {openSection === "experience" && (
            <div className='section-container'>
              {inputExp.map((exp, index) =>
                <InputExp
                  key={exp.id}
                  data={exp}
                  index={index}
                  onChange={(field, value) => expOnChange(index, field, value)}
                  onClick={toggleExpCollapse}
                  removeExp={removeExp}
                />
              )
              }
              <button className='addBtn' onClick={addExperience}>
                Add Experience
              </button>
            </div>
          )}

        </div>

        {/* if Toggled, we show the text form */}


        <div className="cv-wrapper">
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

      </div>
      <footer>
        Made by <a href="https://github.com/clouery">Xiang Zhi</a>
      </footer>
    </>
  )
}

export default App
