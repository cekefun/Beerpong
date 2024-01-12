import Cookies from 'universal-cookie';
import Player from './Player'
import { useState } from 'react';


export default function Game({closeGame, gameState, admin}){
    const cookies = new Cookies();

    return (
        <div>
        <div className="column">
        <span>GAME CODE: {cookies.get("game")}</span>
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