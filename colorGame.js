var colors=[];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay=document.getElementById("rgbLogo");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var numSquares=6;
colorDisplay.textContent=pickedColor;
initialize();

//initialize 
function initialize()
{

    //mode buttons event listeners
    for(var i=0;i<modeButtons.length;i++)
    {
            modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numSquares=3:numSquares=6;
            resetGame();
        })
    }
    //squares event listeners

        for(var i=0;i<squares.length;i++)
    {
        
            //add click listener to squares
        squares[i].addEventListener("click",function(){
            //grab color of clicked square 
            var clickedColor=this.style.backgroundColor;
            //compare color to picked square
            if( clickedColor===pickedColor)
            {
                ifCorrect(pickedColor);
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
            }
        });
    }
    //to add initial colors to squares
    resetGame();

}


resetButton.addEventListener("click",function(){
resetGame();
});


function resetGame()
{
    colors=generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor=pickRandomColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    //change colors of squares
    for(var i=0;i<squares.length;i++)
       { 
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else
            squares[i].style.display="none";
        }
    h1.style.backgroundColor="rgb(70, 130, 180)";
   
}



function generateRandomColors(num)
{
    var random=[];
    for(var i=0;i<num;i++)
    {
        var r=Math.floor(Math.random() *256);
        var g=Math.floor(Math.random() *256);
        var b=Math.floor(Math.random() *256);
        random.push("rgb("+r+", " +g+", " + b+")");
    }
    return random;
}

function pickRandomColor()
{
   var i= Math.floor(Math.random() *colors.length);
   return colors[i];
}

function ifCorrect(color)
{
  resetButton.textContent="Play Again!";
  messageDisplay.textContent="Correct!";
  //change the h1
  h1.style.backgroundColor=color;
  //loop through each square
  //change color of each square to match the given color
  for(var i=0;i<colors.length;i++)
  {
      squares[i].style.backgroundColor=color;
  }
}