import Rules from './components/Rules';
import FrontPage from './components/FrontPage';
import Cookies from "universal-cookie";


export default function Board() {
  const websocket = new WebSocket("ws://158.101.172.58:9090");


  return (
    <>
    <FrontPage websocket={websocket}/>
    <Rules/>

    </>
  );
}
