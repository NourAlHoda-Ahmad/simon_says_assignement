let colors = ["blue", "yellow", "green", "red"]
let sequenceToFollow = []
let playerSequence = []

let green_btn = document.getElementById("green")
let blue_btn = document.getElementById("blue")
let yellow_btn = document.getElementById("yellow")
let red_btn = document.getElementById("red")


let startGame = false
let level_title = document.getElementById("level-title")
let currentLevel = 0




//Press to Start
document.addEventListener('keydown', function (event) {
    console.log("keydown entered")

    if (startGame) {
        console.log(!startGame)
        level_title.innerHTML = `Level ${currentLevel}`
        playGame();

        startGame = false
    }

});



// button_pressed.addEventListener('click',changeButtonStatus)
//change button color
function changeButtonStatus(button_pressed) {
    let button_id=button_pressed.id
    console.log(button_id)
    button_pressed.addEventListener('click', function (e) {

        //change background to grey
        button_pressed.classList.add("pressed")
        setTimeout(function () {
            button_pressed.classList.remove("pressed")
        }, 500); // Delay of 3 seconds

        //add audio
        let sound = new Audio(`../sounds/${button_id}.mp3`);
        sound.play()

    })


}



//Play Game
function playGame() {
    console.log("Game", green_btn)

    green_btn.addEventListener('click', changeButtonStatus(green_btn))
    blue_btn.addEventListener('click', changeButtonStatus(blue_btn))
    yellow_btn.addEventListener('click', changeButtonStatus(yellow_btn))
    red_btn.addEventListener('click', changeButtonStatus(red_btn))


}


playGame()