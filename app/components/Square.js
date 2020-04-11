const React = require("react");

//Not CSS but objects
const style = {
  background: '#c8a2c8',
  color:'#19374F',
  border: '2px solid #19374F',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
}

// const xoStyle = {
//   color: '#19374F',
//   fontStyle: '30px',
//   transition: 'all 1s ease-out 1s',
  
//   ':hover': {
//       fontSize: '50px'
//     },
// }



const Square = ({ value, onClick}) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

//OR structured not to type props. all the time:
//const props = {
  //onClick: () => 'function',
  //value: "X"
//};

//const {value} = props;

//const Game = (props) => (
    //<button onClick={props.onClick}>
      //{props.value}
  //</button>
//);

module.exports = Square;
