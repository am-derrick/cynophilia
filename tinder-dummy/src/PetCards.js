import axios from './axios';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './PetCards.css';

function PetCards() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/pet/cards')

      setAnimals(req.data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToRemove) => {
    console.log('removing: ' + nameToRemove);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' removed from the screen!');
  };

  return (
    <div className='petCards'>
      <div className='petCards__cardContainer'>
        {animals.map((animal) => (
          <TinderCard
            className='swipe'
            key={animal.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, animal.name)}
            onCardLeftScreen={() => outOfFrame(animal.name)}
          >
            <div
              style={{ backgroundImage: `url(${animal.imgUrl})` }}
              className='card'
            >
              <h3>{animal.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default PetCards;