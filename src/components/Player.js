import Cup from './Cup'

function Player ({upsidedown, name, setName, squares, setSquares, admin = false}){
  
    function reset(){
  
      setSquares(Array(10).fill(false))
    }
    function removeLastVariables(arrays, number){
      for (let i=0; i < 10; i++){
        if(i < number){
          arrays[i]= false;
        }
        else {
          arrays[i]= true;
        }
      }
    }

    function handleClick(i) {
      if(admin){
        const nextSquares = squares.slice();
        nextSquares[i] = !nextSquares[i];
        
        if(nextSquares.filter(Boolean).length === 4){
          removeLastVariables(nextSquares, 6);
        }
        if(nextSquares.filter(Boolean).length === 7){
          removeLastVariables(nextSquares, 3);
        }

        setSquares(nextSquares);
      }
    }
    
    let nameField = admin ? <><input value={name} onChange={(event => setName(event.target.value) )}/><button onClick={reset}>RESET FIELD</button></>: <span>{name}</span>;

    if(upsidedown){
      return(
        <>
              <div className="board-row">
        {nameField}
      </div>
      <br/>
      <div className="board-row">
          <Cup number={7} value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Cup number={8} value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Cup number={9} value={squares[8]} onSquareClick={() => handleClick(8)} />
          <Cup number={10} value={squares[9]} onSquareClick={() => handleClick(9)} />
        </div>
        <div className="board-row">
          <Cup number={4}value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Cup number={5} value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Cup number={6} value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Cup number={2} value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Cup number={3} value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Cup number={1} value={squares[0]} onSquareClick={() => handleClick(0)} />
        </div>
      </>
      )
    }
    return(
    <>
      <div className="board-row">
          <Cup number={1} value={squares[0]} onSquareClick={() => handleClick(0)} />
        </div>
        <div className="board-row">
          <Cup number={2} value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Cup number={3} value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Cup number={4}value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Cup number={5} value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Cup number={6} value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Cup number={7} value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Cup number={8} value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Cup number={9} value={squares[8]} onSquareClick={() => handleClick(8)} />
          <Cup number={10} value={squares[9]} onSquareClick={() => handleClick(9)} />
  
        </div>
        <br/>
        <div className="board-row">
        {nameField}
      </div>
  
      </>
    )
  }
  
  export default Player