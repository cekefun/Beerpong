import { useState } from "react";


function GameCreate({websocket, userId}) {
    const [gameId, setGameId] = useState("");
    const createGame = () => {
        const request = {
            "method": "create",
            "userId": userId
        }
        websocket.send(JSON.stringify(request))
    }

    const joinGame = () => {
        const request = {
            "method": "join",
            "userId": userId,
            "gameId": gameId
        }
        websocket.send(JSON.stringify(request))
    }

    return(
        <>
        <div className="column gamecreatescreen">
        <div className="GameJoin">
            <div className="row">
                <h1>Join a game</h1>
            </div>
            <div className="row">
                <input onChange={(event => setGameId(event.target.value) )}></input>
                <button onClick={joinGame}>Join Game</button>
            </div>
        </div>
        <div className="GameCreate">
            <div className="row">
                <h1>Create a new game</h1>
            </div>
            <div className="row">
                <button onClick={createGame}>Create Game</button>
            </div>
        </div>
        </div>
        </>
    )


}

export default GameCreate