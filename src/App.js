import Rules from './components/Rules';
import FrontPage from './components/FrontPage';


export default function Board() {
  const websocket = new WebSocket("ws://158.101.172.58:9090");


  return (
    <>
    <img src='/images/CTTRedLogo.png' className="ct-logo"/>
    <FrontPage websocket={websocket}/>
    <Rules/>
    
    </>
  );
}
