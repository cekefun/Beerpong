import Player from './Player'


export default function Game({closeGame, gameState, admin, gameId}){

    return (
        <div>
        <div className="column game-column">
        <Player upsidedown={true} name={gameState.player1.name} setName={gameState.player1.setName} squares={gameState.player1.squares} setSquares={gameState.player1.setSquares} admin={admin}/>
        <br/>
        <br/>
        <Player upsidedown={false} name={gameState.player2.name} setName={gameState.player2.setName} squares={gameState.player2.squares} setSquares={gameState.player2.setSquares} admin={admin}/>
        <div className='row'>
            <div className='gamecode'>
                <span>GAME CODE: <b>{gameId}</b></span>
            </div>
            <div className='leavebutton'>
                <button onClick={() => closeGame()}>Leave Game</button>
            </div>
        </div>
        </div>
        </div>
    );
}