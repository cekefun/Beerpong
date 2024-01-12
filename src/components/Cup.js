function Cup({ number, value, onSquareClick }) {
    const style = {
      background: value? "lime": "red"
    }
    return (
      <button style={style} className="square" onClick={onSquareClick}>
        {number}
      </button>
    );
  }

  export default Cup