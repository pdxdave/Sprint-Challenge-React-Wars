import React from 'react'
import Character from './Character';

 const CharacterList = ({starwarsChars}) => {
  return (
    <div className="character--list">
        {starwarsChars.map(characters => {
            return (
                <Character chars={characters}/>
            )
        })}
     
    </div>
  )
}

export default CharacterList;
