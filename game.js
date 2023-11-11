let colors = ["green", "red", "yellow", "blue"]
let sequenceToFollow = []
let playerSequence = []

let green_btn = document.getElementById("green")
let blue_btn = document.getElementById("blue")
let yellow_btn = document.getElementById("yellow")
let red_btn = document.getElementById("red")


// let startGame = true
let level_title = document.getElementById("level-title")
let currentLevel = 0


//Start level
function levelUp() {
    currentLevel += 1
    playerSequence=[]
    level_title.innerHTML = `Level ${currentLevel}`
    //generate random number index between 0 -> 3 
    let random_index = Math.floor(Math.random() * 4)
    sequenceToFollow.push(random_index)
    console.log("level up ", sequenceToFollow)


}


//Press to Start
document.addEventListener('keydown', function (event) {
    console.log("keydown entered")

    // if (startGame) {
    //     console.log(!startGame)
    //     level_title.innerHTML = `Level ${currentLevel}`
    //     // playGame();
    //     levelUp();

    //     startGame = false
    // }

    if (currentLevel <= 0) {
        // playGame();
        level_title.innerHTML = `Level ${currentLevel}`
        levelUp();
    }

});





// button_pressed.addEventListener('click',changeButtonStatus)
//change button color
function changeButtonStatus(button_pressed) {
    let button_pressed_name = button_pressed.id
    let button_pressed_index=colors.indexOf(button_pressed_name)

    console.log(button_pressed_name)

    console.log(playerSequence, sequenceToFollow)
    //change background to grey
    button_pressed.classList.add("pressed")
    setTimeout(function () {
        button_pressed.classList.remove("pressed")
    }, 500); // Delay of 0.5 seconds

    //add audio
    let sound = new Audio(`../sounds/${button_pressed_name}.mp3`);
    sound.play()



    //add chosen button to player sequence
    playerSequence.push(button_pressed_index)
    checkSequence()

    // console.log("lup ",sequenceToFollow,random_index)
    // console.log(playerSequence, sequenceToFollow)

}

function  checkSequence() {
    console.log(`in check plater seq : ${playerSequence},game seq ${sequenceToFollow}`)

    if(playerSequence.length != sequenceToFollow.length){
        console.log("game over length")
        gameOver()
        // return
    }

    if(playerSequence.toString()==sequenceToFollow.toString()){
        console.log("Same sequence")
        levelUp()
    }

    else{
        console.log("wrong sequence")
        gameOver()
    }

}


//Game Over
function gameOver(){


    let container=document.getElementsByClassName("container")
    container.classList.add("game-over")
    setTimeout(function () {
        button_pressed.classList.remove("pressed")
    }, 500); // Delay of 0.5 seconds


    currentLevel=0
    // playerSequence=[]
    sequenceToFollow=[]

   


}


//Play Game
function startGame() {
    console.log("Game", green_btn)

    green_btn.addEventListener('click', function () {
        changeButtonStatus(green_btn)
    })
    blue_btn.addEventListener('click', function () {
        changeButtonStatus(blue_btn)
    })

    yellow_btn.addEventListener('click', function () {
        changeButtonStatus(yellow_btn)
    })

    red_btn.addEventListener('click', function () {
        changeButtonStatus(red_btn)
    })


}


startGame()