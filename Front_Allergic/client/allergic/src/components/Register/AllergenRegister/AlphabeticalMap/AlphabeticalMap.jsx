import React from 'react'

const AlphabeticalMap = ({allergens}) => {
  return (
    <div>
    <h1>{allergens[0].name[0]}</h1>
    
    {allergens.map((allergen)=>{
     
     return <div key={allergen._id}>
     <input id={allergen.name} type="checkbox" value={allergen.name} />
      <label  htmlFor={allergen.name}>{allergen.name}</label>
      </div>
    })}
    </div>

  )
}

export default AlphabeticalMap