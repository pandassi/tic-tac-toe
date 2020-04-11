const React = require("react");
const Square = require('./Square');

const style = {
  border: '4px solid #19374F',
  color: '#19374F',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)' //3 x 3 board
}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => ( //implicit return
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

module.exports = Board;
