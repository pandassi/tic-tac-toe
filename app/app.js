
const React = require('react');
const Game = require('./components/Game');

const logo = {
  background: 'rgb(2,0,36)',
  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,96,142,1) 0%, rgba(0,212,255,1) 100%)',
  width: 'auto',
  fontFamily: 'Roboto',
  fontSize: '10px',
}

const style = {
  backgroundColor: "#fbdedd",
  height: '100%',
}

console.log(<div style={logo}>"Made by Lili✨www.lilaait.com"</div>);

const App = () => 
<div style={style}>
  <Game />
</div>;

module.exports = App;


//Inspired from: scrimba.com/g/greactgame
