import { useState } from "react";
import Cookies from "universal-cookie";


function GameCreate({websocket}) {
    const cookies = new Cookies();
    const [gameId, setGameId] = useState("");
    const createGame = () => {
        const request = {
            "method": "create",
            "userId": cookies.get("userId")
        }
        websocket.send(JSON.stringify(request))
    }

    const joinGame = () => {
        const request = {
            "method": "join",
            "userId": cookies.get("userId"),
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