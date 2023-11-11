let colors=["blue","yellow","green","red"]
let sequenceToFollow=[]
let playerSequence=[]

let startGame = false
let level_title = document.getElementById("level-title")
let currentLevel=0
console.log(startGame,!startGame, level_title)


//Press to Start
document.addEventListener('keydown', function (event) {
    console.log("keydown entered")

    if(!startGame){
        console.log(!startGame)
        level_title.innerHTML=`Level ${currentLevel}`
        playGame();
    }


});


//Play Game
function playGame(){
    console.log("Game")
}
