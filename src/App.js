//import de modulos
import React, { Component } from 'react';

//import css
import './styles.css';

//import componentes
import Header from './components/Header';
import Main from './pages/main';



//uso de componentes 
const App = () => (
  <div className="App">
  <Header />
  <Main />
</div>
);



export default App;
