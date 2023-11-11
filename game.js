let colors = ["green", "red", "yellow", "blue"]
let sequenceToFollow = []
let playerSequence = []

let green_btn = document.getElementById("green")
let blue_btn = document.getElementById("blue")
let yellow_btn = document.getElementById("yellow")
let red_btn = document.getElementById("red")
let all_btn = document.getElementsByClassName("btn")

let game_start = true
let level_title = document.getElementById("level-title")
let currentLevel = 0




//function change background
function changeButtonColor(button) {

    button.classList.add("pressed")
    setTimeout(function () {
        button.classList.remove("pressed")
    }, 500);

}

//function play audio
function playSound(button_name) {
    let sound = new Audio(`../sounds/${button_name}.mp3`);
    sound.play()

}


//click on button event
function clickButton() {

    green_btn.addEventListener('click', function () {
        addPlayerSequence(green_btn)
    })
    blue_btn.addEventListener('click', function () {
        addPlayerSequence(blue_btn)
    })

    yellow_btn.addEventListener('click', function () {
        addPlayerSequence(yellow_btn)
    })

    red_btn.addEventListener('click', function () {
        addPlayerSequence(red_btn)
    })


}

clickButton()




//Start new level
function levelUp() {

    currentLevel += 1
    playerSequence = []
    level_title.innerHTML = `Level ${currentLevel}`


    //generate random number index between 0 -> 3 
    let random_index = Math.floor(Math.random() * 4)

    sequenceToFollow.push(random_index)

    //change button background
    const button_generated = all_btn[random_index]
    changeButtonColor(button_generated)

    //add audio
    const button_generated_name = all_btn[random_index].id
    playSound(button_generated_name)




}


//change button color
function addPlayerSequence(button_pressed) {

    let button_pressed_name = button_pressed.id
    let button_pressed_index = colors.indexOf(button_pressed_name)

    //change background to grey
    changeButtonColor(button_pressed)

    //add audio
    playSound(button_pressed_name)


    //add chosen button to player sequence
    playerSequence.push(button_pressed_index)

    //check
    checkSequence(playerSequence)

}



//compare player and game sequences
function checkSequence() {

    if (playerSequence.length == currentLevel) {
  
        if (playerSequence.toString() == sequenceToFollow.toString()) {
            levelUp()
        }

        else {
            gameOver()
        }

    }

    else {

        if (playerSequence[(playerSequence.length) - 1] != sequenceToFollow[(playerSequence.length) - 1]) {
            gameOver()
        }
    }

}


//Game Over
function gameOver() {

    
    document.body.classList.add("game-over")
    setTimeout(function () {
        document.body.classList.remove("game-over")


    }, 1000);


    currentLevel = 0
    playerSequence = []
    sequenceToFollow = []
    game_start = true

    level_title.innerHTML = `Game Over Press Any Key To Restart`

}


//Press to Start
document.addEventListener('keydown', function (event) {
    console.log("keydown entered")

    if (game_start == true) {
        level_title.innerHTML = `Level ${currentLevel}`
        levelUp();
        game_start = false
    }

});