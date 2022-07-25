import React, { useEffect, useState } from 'react';
import butcher from '../../shared/images/butcher.jpg';
import caporal from '../../shared/images/caporal.jpg';
import homelander from '../../shared/images/homelander.jpg';
import starlight from '../../shared/images/starlight.jpg';
import back from '../../shared/images/back.jpg';
import Popo from '../Popo/Popo';
import "./Memorama.css";

const pibes = [
  { id: 1, imagen: butcher, back: true },
  { id: 2, imagen: caporal, back:true },
  { id: 3, imagen: homelander, back:true },
  { id: 4, imagen: starlight, back: true},
];

let cardPibes = [...pibes, ...pibes];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
cardPibes = shuffle(cardPibes);

function Memorama (){

  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [win, setWin] = useState(false);
  const [contador, setContador] = useState(0);

  const flipCard = (index) => setOpenedCard((opened) => [...opened, index]);
  
  useEffect(() => {
      if (openedCard.length < 2) return;
      
      const firstMatched = cardPibes[openedCard[0]];
      const secondMatched = cardPibes[openedCard[1]];
      
      if(openedCard.length === 2)
      {
          if (secondMatched && firstMatched.id === secondMatched.id) {
              setMatched([...matched, firstMatched.id]);
          }
          setTimeout(() => setOpenedCard([]), 1000);
          setContador(contador + 1);
      }
  }, [openedCard]);

  useEffect(() => {
      if(matched.length >= 4) setWin(true);
  }, [matched]);
  
  const restart = () => {
      setOpenedCard([]);
      setMatched([]);
      setContador(0);
      setWin(false);
      cardPibes = shuffle(cardPibes);
  }

  return (
    <div className="Memorama">
      <Popo
        text='Ganaste'
        func={restart}
        open={win}
      />
      <h2>Intentos: {contador}</h2>
      <div className="Memorama-game">{
        cardPibes.map( ({id,imagen}, key) => {
          let isFlipped = false;
          if (openedCard.includes(key) && openedCard.length < 3) isFlipped = true;
          if (matched.includes(id)) isFlipped = true;
          return(       
            <div 
              key={key} 
              className='Memorama-card'
            >
              <button 
                onClick={() => flipCard(key)}  
                disabled={(isFlipped ? true : false)}
              >
                <img src={isFlipped ?imagen:back} className="App-logo" alt="logo"/>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Memorama; 