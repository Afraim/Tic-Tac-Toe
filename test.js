let inputValue="X";
let player1,player2;
let player=true;
let CurrentPlayer = document.getElementById('player');

let button1 = document.getElementById("b11");
let button2 = document.getElementById("b12");
let button3 = document.getElementById("b13");
let button4 = document.getElementById("b21");
let button5 = document.getElementById("b22");
let button6 = document.getElementById("b23");
let button7 = document.getElementById("b31");
let button8 = document.getElementById("b32");
let button9 = document.getElementById("b33");

window.onload = function(){
    document.getElementById("choose").style.display = "block";
    document.getElementById("newMathch").style.display = "none";    
    document.getElementById("Game").style.display = "none";
}


function ClickedSubmit(){
    if(document.getElementById("P1name").value!="" &&document.getElementById("P2name").value!=""){
        player1 = document.getElementById("P1name").value;
        player2 = document.getElementById("P2name").value;
        CurrentPlayer.innerHTML = player1+"'s Turn with value="+inputValue;;
        
    document.getElementById("choose").style.display = "none";
    
    document.getElementById("Game").style.display = "block";
    document.getElementById("newMathch").style.display = "block";
    
    }
}

// Changing the text of the button
document.querySelectorAll('button').forEach(button => {
button.addEventListener('click', () =>{
    if(button.textContent === '_'){
        button.textContent = inputValue;
        checkWin();
    }
    })
});


//Chaning player X and player O
function changePlayer(){
    if(inputValue === "X"){
        inputValue = "O";
        CurrentPlayer.innerHTML = player2+"'s Turn with value="+inputValue;

    }else{
        inputValue = "X";
        CurrentPlayer.innerHTML = player1+"'s Turn with value="+inputValue;;
    }
    
}

function checkWin(){
    if(button1.innerHTML==button2.innerHTML && button1.innerHTML==button3.innerHTML && button2.innerHTML!="_"){        
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";        
    }    
    else if(button4.innerHTML==button5.innerHTML && button5.innerHTML == button6.innerHTML && button5.innerHTML!="_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    else if(button7.innerHTML == button8.innerHTML && button7.innerHTML == button9.innerHTML && button7.innerHTML != "_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    // Vertical wins
    else if(button1.innerHTML === button4.innerHTML && button1.innerHTML === button7.innerHTML && button1.innerHTML !== "_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    else if(button2.innerHTML === button5.innerHTML && button2.innerHTML === button8.innerHTML && button2.innerHTML !== "_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    else if(button3.innerHTML === button6.innerHTML && button3.innerHTML === button9.innerHTML && button3.innerHTML !== "_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    // Diagonal wins
    else if(button1.innerHTML === button5.innerHTML && button1.innerHTML === button9.innerHTML && button1.innerHTML !== "_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    else if(button3.innerHTML === button5.innerHTML && button3.innerHTML === button7.innerHTML && button3.innerHTML !== "_"){
        CurrentPlayer.innerHTML= CurrentPlayer.innerHTML+" Wins";
    }
    else if(button1.innerHTML!="_" && button2.innerHTML!="_" && button3.innerHTML!="_"&& button4.innerHTML!="_"&& button5.innerHTML!="_"&& button6.innerHTML!="_"&& button7.innerHTML!="_"&& button8.innerHTML!="_"&& button9.innerHTML!="_" ){
        CurrentPlayer.innerHTML= "It's a Draw between "+player1+" and "+player2;
    }
    else{
        changePlayer();
    }
    
   
}

function Retry(){
    button1.innerHTML="_";
    button2.innerHTML="_";
    button3.innerHTML="_";
    button4.innerHTML="_";
    button5.innerHTML="_";
    button6.innerHTML="_";
    button7.innerHTML="_";
    button8.innerHTML="_";
    button9.innerHTML="_";
}
function NewMatch(){
    
    document.getElementById("choose").style.display = "none";    
    document.getElementById("Game").style.display = "block";
    window.location.reload();
}