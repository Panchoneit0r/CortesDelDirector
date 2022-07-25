import React, { useEffect, useState } from 'react';
import {Combos} from "./Combos";
import Popo from '../Popo/Popo';
import "./Gato.css";

const gatoVacio = [
  "", "", "",
  "", "", "",
  "", "", "",
];

function Gato(){
  const [gato, setGato] = useState(gatoVacio);
  const [player, setPlayer] = useState("X");
  const [win, setWin] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => { 
    checkIfTie();
    checkWin();

  }, [gato]);

  const elegirCasilla = (casilla) => {
    let casillas = [...gato];
    casillas[casilla] = player;
    setGato(casillas);
    eleccionCpu(casillas)
  };

  function eleccionCpu(casillas){
    let random = generateRandomNumber(9);
    let acaba = false;
    const vacios = casillas.every(function(val){
      return val !== "";
    })
    if(vacios===false){
      while(acaba === false) {
        if (casillas[random] === ""){
        casillas[random] = "O";
        acaba = true;
        }
      random = generateRandomNumber(9);
      }
      setGato(casillas);
    }
    
  }
  
  function generateRandomNumber(max) {
    return Math.floor(Math.random()*(max));
  }

  const checkWin = () => {
    let primerJugador;
    Combos.forEach((combo) => {
      primerJugador = gato[combo[0]];
      if (primerJugador === "") return;
      let encontrarComboGanador = true;
      combo.forEach((idx) => {
        if (gato[idx] !== primerJugador) {
          encontrarComboGanador = false;
        }
      });

      if (encontrarComboGanador) {
        setWin(true);
        setMensaje(`Gano la: ${primerJugador}`);
      }
    });
  };

  const checkIfTie = () => {
    let filled = gato.every(function(val){
      return val !== "";
    }) 

    if (filled) {
      setWin(true);
      setMensaje("Empante");
    }
  };

  const restart = () => {
    setGato(gatoVacio);
    setPlayer("X");
    setWin(false);
    setMensaje("");
  };

  return (
    <div className="gato">
      <Popo
        text={mensaje}
        func={restart}
        open={win}
      />
      <div className="gato-game" >
        {gato.map((casilla, index) => {
          let marcada = false;
          if(casilla !== "") marcada = true;
          return (
            <button
              className="gato-casilla"
              key={index}
              onClick ={() => {elegirCasilla(index)}}
              disabled= {marcada}    
            >
              {casilla}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Gato;