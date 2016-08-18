//selecting the  buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton=document.getElementById('reset')
// selecting the h1 to make the changes in the score
// p2
var p1Display =document.
querySelector('#p1Display');
//p2
var p2Display =document.
querySelector('#p2Display');// selecting the number box
var numInput = document.querySelector("input");

// selecting the winning score display
var winningScoreDisplay =document.querySelector('p span');
//keeping scores
// p1
 var p1Score =0;
 // p2
 var p2Score =0;
 // when the game ends starts at false because we dont want the game to end before it starts
 var gameover=false;
 // saving the score of when the game is over
 var winningScore=7;
//making the buttons clickable
p1Button.addEventListener("click",function(){
  if(!gameover){
     p1Score++;
      if(p1Score===winningScore){
        p1Display.classList.add("winner")
      alert('gameover');
      //disables the button
      gameover=true;
     }
 p1Display.textContent=p1Score;
  }
});
//p2
p2Button.addEventListener("click", function(){
  if(!gameover)
    p2Score++;
      if(p2Score===winningScore){
        // changes the color from black to green if they won
        p2Display.classList.add("winner")
      alert('gameover');
      //disables the button
      gameover=true;
    }
  p2Display.textContent=p2Score;
});
// reset button
resetButton.addEventListener("click",function(){
  reset();
});
function reset(){
  p1Score=0;
p2Score=0;
p1Display.textContent=0;
p2Display.textContent=0;
p1Display.classList.remove("winner");
p2Display.classList.remove("winner");
gameover=false;
}
// working with the number box. the change event will run anytime the value changes it doesnt matter how the value changed. 
numInput.addEventListener('change', function(){
winningScoreDisplay.textContent=numInput.value;
// turns the number to a string
winningScore=Number(numInput.value);
reset();
});