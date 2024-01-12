export default function Rules () {
    return (    <div className='column'>
    <h1> Rules </h1>
    <h2> Goal </h2>
    The goal of this game is to hit all the cups of your opponents side before yours run out.
    
    <h2> How to Play </h2>
    This game requires at least 2 players including someone using this app to keep track of the cups hit.
    <br/>
    To see whether or not we hit a cup we will generate a number between 1 and 100.
    <br/>
    <br/>
    We take that number and look at the last of digit in last place. This is the cup you'd hit. If the cup is still there on your opponents side, you remove the cup. 
    <br/>
    If it's already removed, nothing happened unless you hit one of the trick shots.
    <h2> Trick Shots </h2>
    These trick shots only work when the cup they would have hit has already been removed. If it hasn't been removed, then remove the cup instead.
    <ul>
      <li><b>Doubles</b>: If you roll the same digit twice, you get to roll again! For clarity, applicable numbers are 11, 22, 33, 44, 55, 66, 77, 88 and 99</li>
      <li><b>Bad shot</b>: If you roll a 1, the ball bounces back and your opponent gets to remove one of your cups of their choice.</li>
      <li><b>Cloning shot</b>: If you roll a 42, you can add 1 cup back to your side of the board. Your opponent needs to remove it again to win.</li>
      <li><b>Nice shot</b>: If you roll a 69, you get to remove any cup of your choice.</li>
      <li><b>Perfect shot</b>: If you roll a 100, you get to remove 2 cups of your choice.</li>
    </ul>
    <h2> Special events </h2>
    Once a total of 10 cups have been removed, a special round starts!
    <br/>
    Each player takes their turn like normal, but if they hit a cup on their opponents side, they get to add that same cup back to your side! 
    <br/>
    If that cup is still standing, then nothing happens.
    <h2> How to Use this tool? </h2>
    This tool is to keep track of which player still has which cups. Click a cup to change red to green and green to red.
    <br/>
    The reset button sets all cups from that side of the board back to red.
    <br/>
    The input field can be used to indicate who is which side of the board.
    <h3>Creating a Session</h3>
    To create a session, simply press the <b>Create Game</b> button. 
    <br/>
    This will allow you to input names and click fields. 
    <br/>
    On top of the screen, a game code is shown. Share this to the other members.
    <h3>Joining a game</h3>
    To join a game, input the game code received from the host and click the <b>Join Game</b> button.
    <br/>
    This is a view only and you won't be able to edit any of the values on the page.
    <h3>Leaving a session</h3>
    To leave a session, press the <b>Leave game</b> button or refresh the page.
    <br/>
    <b>DO NOTE THAT YOU CAN'T REJOIN A GAME AS ADMIN!</b>
    </div>    );
}