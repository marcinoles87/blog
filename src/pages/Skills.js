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

      
        <i class="fa-solid fa-briefcase fa-2xl"></i>

        <div className='skill-card'>
         <ul className='skill-list'>
          <li>Kierownik magazynu 2012-2024</li>
          <li>Zaopatrzeniowiec 2008-2012</li>
       
        </ul>
      </div>
      </div>
/* 
      <div>
      <i class="fa-solid fa-laptop-code fa-2xl"></i>
        <ul className='skill-list' onMouseEnter={showSkill}>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
      <i class="fa-solid fa-user fa-2xl"></i>
        <ul className='side-list' onMouseEnter={showSkill}>
          <li>Komunikatywnosc</li>
          <li>Pracowitosc</li>
          <li>Team Player</li>
          <li>Zaangazowanie</li>
          <li>Multi-tasking</li>
        </ul>
      </div>
    </div> */
  )
}

export default Skills