//import logo from '../shared/images/logo.svg';

import './App.css';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import Popup from 'reactjs-popup';

import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Header title="Juegos Friv"/>
      <Content >
        {props.children}
      </Content>
      <Popup/>
      <Footer />
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
