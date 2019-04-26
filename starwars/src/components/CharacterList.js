import React from 'react'
import Character from './Character';

 const CharacterList = ({starwarsChars}) => {
  return (
    <div>
        {starwarsChars.map(characters => {
            return (
                <Character chars={characters}/>
            )
        })}
     
    </div>
  )
}

export default CharacterList;
