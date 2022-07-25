import React, { Component } from 'react';
import GamesList from './GamesList';
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            games: [
                {
                    id: 1,
                    name: 'BattleShip',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Missouri_post_refit.JPG/800px-Missouri_post_refit.JPG',
                },

                {
                    id: 2,
                    name: 'Ahorcado',
                    image: 'https://s3.amazonaws.com/static.om.anigamy.net/static.selecciones.com.ar/App/Article/encasa-a-jugar-a-un-clasico-junto-al-tutti-frutti-el-ahorcado-5625-mainImage-2.jpg',
                },

                {
                    id: 3,
                    name: 'Gato',
                    image: 'https://www.mamalisa.com/images/mother_goose/ticktacktoe.gif',
                },

                {
                    id: 4,
                    name: 'Memorama',
                    image: 'https://store.centynova.com/wp-content/uploads/2021/01/81Qv9Y4BKvL._AC_SL1500_.jpg',
                },
                
            ],
        }
        
    }

  render() {
    return (
      <div className="Home">
      <GamesList 
      games={this.state.games}
      />
      </div>
    )
  }
}
