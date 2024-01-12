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
        <div className="column">
        <div className="GameCreate">
            <label>Create a new game</label>
            <button onClick={createGame}>Create Game</button>
        </div>
        <div className="GameJoin">
            <label>Join a game</label>
            <input onChange={(event => setGameId(event.target.value) )}></input>
            <button onClick={joinGame}>Join Game</button>
        </div>
        </div>
        </>
    )


}

export default GameCreate