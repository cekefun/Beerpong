function Cup({ number, value, onSquareClick }) {
    const style = {
      background: value? "gray": "#a6001e"
    }
    return (
      <button style={style} className="square" onClick={onSquareClick}>
        {number}
      </button>
    );
  }

  export default Cup