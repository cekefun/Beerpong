import Rules from './components/Rules';
import FrontPage from './components/FrontPage';


export default function Board() {
  const websocket = new WebSocket("ws://localhost:9090");


  return (
    <>
    <img src='/images/CTTRedLogo.png' class="ct-logo"/>
    <img src='/images/AL_transparentBOOST1.png' class="partner-logo" />
    <FrontPage websocket={websocket}/>
    <Rules/>
    
    </>
  );
}
