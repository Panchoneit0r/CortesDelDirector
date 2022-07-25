import React, { Component } from 'react';
import './Ahorcado.css';
import Popo from '../Popo/Popo';
import { randomWord } from './Words.js';

import step0 from "../../shared/images/A0.jpg";
import step1 from "../../shared/images/A1.jpg";
import step2 from "../../shared/images/A2.jpg";
import step3 from "../../shared/images/A3.jpg";
import step4 from "../../shared/images/A4.jpg";
import step5 from "../../shared/images/A5.jpg";
import step6 from "../../shared/images/A6.jpg";

class Ahorcado extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
      mensaje: "",
      terminar: false,
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
      terminar: false
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let mensaje = this.state.mensaje;
    let terminar = this.state.terminar;
    let gameStat = this.generateButtons();

    if (isWinner) {
      mensaje = "Ganaste";
      terminar = true;
    }

    if (gameOver) {
      mensaje = "Perdiste";
      terminar = true;
    }

    return (
      <div className="Ahorcado">
        <Popo
          text={mensaje}
          func={this.resetButton}
          open={terminar}
        />
        <h1 className='text'>Ahorcado</h1>
        <div className="float-right">Fallos: {this.state.mistake} de {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        <div className="text-center">
          <p>Adivina la palabra relacionada con programacion:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
        </div>
      </div>
    )
  }
}

export default Ahorcado;
