import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Popo.css';

function Popo({text, func, open}){
    return (
    <Popup open= {open} modal nested closeOnDocumentClick ={false} closeOnEscape = {false}>
        <div className="modal">
        <button className="close" onClick={() => {func()}}>
          &times;
        </button>
            <div className="header">
                <h1>{text}</h1>
            </div>
            <div className="actions">
                <button
                    className="action"
                    onClick={() => {
                    func();                    
                }}>
                    Volver a jugar
                </button>
                <a 
                    href="/"
                    className="action"
                >
                    Volver al menu
                </a>
            </div>
        </div> 
    </Popup>
    )
}
export default Popo;