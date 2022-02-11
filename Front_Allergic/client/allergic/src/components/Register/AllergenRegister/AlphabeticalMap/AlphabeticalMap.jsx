import React from "react";

const AlphabeticalMap = ({ allergens, letter, register }) => {
  return (
    <div>
      <h1>{letter}</h1>

      <div>
        {allergens.map((allergen) => (
          <div key={allergen._id}>
            {allergen.name[0].toUpperCase() === letter && (
              <div>
              <input type="checkbox" value={allergen._id} {...register('allergens')}/>
              <label>{allergen.name}</label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabeticalMap;
