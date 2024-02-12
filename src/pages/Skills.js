import React from 'react'



function Skills() {

  const showSkill = (e) => {
    console.log(e.target)
    const skillList = e.target
    console.log(skillList)
    skillList.classList.toggle('show-list');
  }
  return (
    <div className='skills-container'>
      <div>
        <h1 className='carrer-item' >Carrer</h1>
        <ul className='carrer-list' onMouseEnter={showSkill}>
          <li>Kierownik magazynu 2012-2024</li>
          <li>Zaopatrzeniowiec 2008-2012</li>
       
        </ul>
      </div>

      <div>
        <h1 className='skill-item'>Skill</h1>
        <ul className='skill-list' onMouseEnter={showSkill}>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
        <h1 className='side-item'>Strong side</h1>
        <ul className='side-list' onMouseEnter={showSkill}>
          <li>Komunikatywnosc</li>
          <li>Pracowitosc</li>
          <li>Team Player</li>
          <li>Zaangazowanie</li>
          <li>Multi-tasking</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills