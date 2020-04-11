const React = require("react"); 
const Board = require('./Board'); //Same dir
const { useState } = require('react'); //useState = Hook
const calculateWinner = require('./helpers')

const styles = {
    width: 'auto',
    backgroundColor: "transparent",
    border: 'none',
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#19374F',
    fontSize: "25px",
    transition: "0.5s ease-out",
  hover: {
    fontSize: "50px",
  },
}

//Heart of app, lots of logic in it so retun statement instead of implicit return
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [hover, setHover] = useState(false);

    //Functions needed (can use regular functions instead):
    const handleClick = (i) => { //Access the currently clicked square
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
       //Main logic that controls the game:
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button
        onMouseEnter={()=>{
        setHover(true);
        }}
        onMouseLeave={()=>{
        setHover(false);
        }}
        style={{
        ...styles,
        ...(hover ? styles.hover : null)}}
          onClick={() => setBoard(Array(9).fill(null))}>
            Restart Game
        </button>
    )

    return (
      //Can only return one fragment in JSX so = fragments. Empty tag = shortcut. Only here = divs instead has it doesn't take <>
     //JS expressions inside JSX with {}
        <div>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </div>
    )
}

module.exports = Game;