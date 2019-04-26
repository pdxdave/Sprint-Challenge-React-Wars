import React from 'react'
import './StarWars.css';

const Character = ({chars}) => {
  return (
    <div>
      <div className="character--card">
        <h3>{chars.name}</h3>
        <div className="character--card-content">
            <div className="character--card-stats">
                <p><span>Gender:</span> {chars.gender}</p>
                <p><span>Birth year:</span> {chars.birth_year}</p>
                <p><span>Hair color:</span> {chars.hair_color}</p>
            </div>
            <div className="character--card-stats">
                <p><span>Eye color:</span> {chars.eye_color}</p>
                <p><span>Height:</span> {chars.height}</p>
                <p><span>Skin:</span> {chars.skin_color}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Character;