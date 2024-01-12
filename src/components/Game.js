import Player from './Player'


export default function Game({closeGame, gameState, admin, gameId}){

    return (
        <div>
        <div className="column">
        <span>GAME CODE: {gameId}</span>
        <br/>
        <button onClick={() => closeGame()}>Leave Game</button>
        <Player upsidedown={true} name={gameState.player1.name} setName={gameState.player1.setName} squares={gameState.player1.squares} setSquares={gameState.player1.setSquares} admin={admin}/>
        <br/>
        <br/>
        <Player upsidedown={false} name={gameState.player2.name} setName={gameState.player2.setName} squares={gameState.player2.squares} setSquares={gameState.player2.setSquares} admin={admin}/>
        </div>
        </div>
    );
}