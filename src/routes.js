import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home/Home';
import Error404 from './components/Error/404';
import Ahorcado from './components/Ahorcado/Ahorcado';
import BattleShip from './components/BattleShip/BattleShip';
import Gato from './components/Gato/Gato';
import Memorama from './components/Memorama/Memorama';

const  AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Error404 />} />
            <Route path='/ahorcado' element={<Ahorcado />} />
            <Route path='/battleship' element={<BattleShip />} />
            <Route path='/gato' element={<Gato />} />
            <Route path='/memorama' element={<Memorama />} />
            
        </Routes>
    </App>
)

export default AppRoutes;