import Cookies from "universal-cookie";
import Game from "./Game";
import GameCreate from "./GameCreate";
import { useState } from 'react';


export default function FrontPage({websocket}){
    const cookies = new Cookies();

    const [game_loaded, setGame_loaded] = useState(!!cookies.get("game"));
    const [squares, setSquares] = useState(Array(10).fill(false));
    const [name, setName] = useState("TEST");
    const [squares2, setSquares2] = useState(Array(10).fill(false));
    const [name2, setName2] = useState("BLABLA");
    const [admin, setAdmin] = useState(false);


    const game = {
        player1: {
            "name": name,
            "setName": (name)=> {setName(name);sendUpdate(name, squares, name2, squares2);},
            "squares": squares,
            "setSquares": (squares)=> {setSquares(squares);sendUpdate(name, squares, name2, squares2);}
        },
        player2: {
            "name": name2,
            "setName": (name2)=> {setName2(name2);sendUpdate(name, squares, name2, squares2);},
            "squares": squares2,
            "setSquares": (squares2)=> {setSquares2(squares2);sendUpdate(name, squares, name2, squares2);}
        }
    }

    websocket.onopen = (event) => {console.log(event); console.log("opened")}
    websocket.onclose = (event) => {console.log(event); console.log("closed")}
    websocket.onmessage = message => {
        const response = JSON.parse(message.data);
        console.log(response);
        //connect
        if (response.method === "connect"){
                cookies.set("userId", response.clientId);
        }

        //create
        if (response.method === "create"){
            console.log("created")
            console.log(response);
            const value = response.game.id;
            startGame(value);
            setAdmin(true);
        }


        //update
        if (response.method === "update"){
            updateGameState(response.game)
        }

        //join
        if (response.method === "join"){
            const value = response.game.id;
            startGame(value);
            updateGameState(response.game);
        }
        return false;
    }


    function closeGame(){
        cookies.remove("game")
        cookies.remove("userId")
        setGame_loaded(false);
    }
    function startGame(value){
        cookies.set("game", value)
        setGame_loaded(true);
    }

    function updateGameState(game){
        console.log("updating")
        console.log(game);
        cookies.set("host", game.host);
        setName(game.player1.name);
        setName2(game.player2.name);
        setSquares(game.player1.squares);
        setSquares2(game.player2.squares);
    }

    function sendUpdate(name, squares, name2, squares2){
        const request = {
            method: "update",
            gameId: cookies.get("game"),
            game: {
                player1: {
                    name: name,
                    squares: squares
                },
                player2: {
                    name: name2,
                    squares: squares2
                }
            },
            userId: cookies.get("userId")
        }
        console.log("sending update")
        console.log(request)
        websocket.send(JSON.stringify(request))
    }


    console.log(JSON.stringify(cookies))
    if (game_loaded){
        return (<Game closeGame={closeGame} websocket={websocket} gameState={game} admin={admin}/>)
    }
    return <GameCreate websocket={websocket}/>
}