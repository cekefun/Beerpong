import Rules from './components/Rules';
import FrontPage from './components/FrontPage';


export default function Board() {
  const websocket = new WebSocket("ws://localhost:9090");


  return (
    <>
    <FrontPage websocket={websocket}/>
    <Rules/>

    </>
  );
}
