import React from 'react'



function Skills() {

  const showSkill = (e) => {
    console.log(e.target)
    const skillList = e.target
    console.log(skillList)
    skillList.classList.toggle('show-list');
  }
  return (
    <>
    <div className='skills-container'>

      
        <i class="fa-solid fa-briefcase fa-2xl"></i>

        <div className='skill-card'>
         <ul className='skill-list'>
          <li>Kierownik magazynu 2012-2024</li>
          <li>Zaopatrzeniowiec 2008-2012</li>
       
        </ul>
      </div>
      </div>

<div className='skills-container'>

      
<i class="fa-solid fa-briefcase fa-2xl"></i>

<div className='skill-card'>
 <ul className='skill-list'>
  <li>Kierownik magazynu 2012-2024</li>
  <li>Zaopatrzeniowiec 2008-2012</li>

</ul>
</div>
</div>

<div className='skills-container'>

      
<i class="fa-solid fa-briefcase fa-2xl"></i>

<div className='skill-card'>
 <ul className='skill-list'>
  <li>Kierownik magazynu 2012-2024</li>
  <li>Zaopatrzeniowiec 2008-2012</li>

</ul>
</div>
</div>

</>


  )
}

export default Skills