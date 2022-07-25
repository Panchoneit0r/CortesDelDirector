import React from 'react';

const GamesList = props => {

    const {games} = props;

    return (
        <div className="juegos">
            {
                games.map( (game, key) => (
                    <div 
                        key={key} 
                        className='juego'
                    >
                        {game.name}
                        <img src={`${game.image}`} className="App-logo" alt="logo"/>
                        <a href = {`/${game.name}`}>
                            Play
                        </a>
                    </div>

                ))
            }
        </div>
    );
}

export default GamesList;