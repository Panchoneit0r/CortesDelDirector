import React, { useState, useEffect } from 'react';
import Popo from '../Popo/Popo';
import "./BattleShip.css";

const casillasVacias = [
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
  "", "", "", "", "", "",
];

export default function BattleShip (){
  const [casillasJugador, setCasillasJugador] = useState(casillasVacias);
  const [casillasCpu, setCasillasCpu] = useState(casillasVacias);
  const[terminar, setTerminar] = useState(false);
  const[elegidos, setElegidos] = useState(false);
  const[count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if(count === 6) {
      setElegidos(true)
      elegirCpu(false, casillasCpu);
    };
  }, [count]);

  useEffect(() => { 
    let vacio = evitador(casillasCpu);
    if(!vacio) check(casillasCpu, "Ganaste");
  }, [casillasCpu]);

  useEffect(() => { 
    let vacio = evitador(casillasJugador);
    if(!vacio) check(casillasJugador, "Perdiste");
  }, [casillasJugador]);

  function evitador (cas){
    let casillas = [...cas];
    const vacio = casillas.every(function(val){
      return val === "";
    })
    return vacio;
  }

  function generateRandomNumber(max) {
    return Math.floor(Math.random()*(max));
  }

  const elegirCasilla = (casilla) => {
    let casillas = [...casillasJugador];
    casillas[casilla] = "b";
    setCasillasJugador(casillas);
    setCount(count + 1)
  };

  const elegirCpu = (atacar, cas) =>{
    let random = generateRandomNumber(36);
    let acaba = false;
    let casillas = [...cas];
    if (atacar){
      while(acaba === false) {
        if (casillas[random] !== "a"){
        casillas[random] = "a";
        acaba = true;
      }
        random = generateRandomNumber(36);
      }
      setCasillasJugador(casillas);
    }
    else{
      for(let i=0; i < 6; i++){
        while(acaba === false) {
          if (casillas[random] === ""){
          casillas[random] = "b";
          acaba = true;
        }
          random = generateRandomNumber(36);
        }
        acaba = false;
      }
    setCasillasCpu(casillas);}
  }

  const atqueJugador = (casilla) =>{
    let casillas = [...casillasCpu];
    casillas[casilla] = "a";
    setCasillasCpu(casillas);
    elegirCpu(true, casillasJugador);
  }

  const restart = () => {
    setCasillasJugador(casillasVacias);
    setCasillasCpu(casillasVacias);
    setTerminar(false);
    setMensaje("");
    setElegidos(false);
    setCount(0);
  };

  const check = (cas, texto)=>{
    let casillas = [...cas];
    const vacio = casillas.every(function(val){
      return val !== "b";
    })
    if (vacio){
      setTerminar(true);
      setMensaje(texto);
    }
  }

  return (
    <div className="battleShip">
      BattleShip
      <Popo
        text={mensaje}
        func={restart}
        open={terminar}
      />
      {
      !elegidos ?
      <div className="tablero">
        <div className="casillas">
          {casillasJugador.map((casilla,i)=>{
            let marcada = false;
            if(casilla !== "") marcada = true;
            return (
            <button className="casilla" key={i} onClick ={() => {elegirCasilla(i)}} disabled= {marcada}  >
              {casilla}
            </button>)
          })}
        </div>
      </div>
      :
      <div className="tablero">
        <div className="casillas">
          {casillasJugador.map((casilla,i)=>(
            <div className="casilla" key={i}>
              {casilla}
            </div>
          ))}
        </div>
        <div className="casillas">
        {casillasCpu.map((casilla,i)=>{
            let marcada = false;
            let vacio = "";
            if(casilla === "a") {marcada = true; vacio = casilla;}
            return (
              <button className="casilla" key={i} onClick ={() => {atqueJugador(i)}} disabled= {marcada}>
                {vacio}
              </button>)
          })}
        </div>
      </div>
      }
    </div>
  )
}