// Detects Button Press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.textContent

        makeSound(buttonInnerHTML);
        
        //when the letter is clicked with the mouse, it will trigger the buttonAnimation Function 
        buttonAnimation(buttonInnerHTML);
    });
}

// Detects Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);

    //when the letter is pressed by the keyboard, it will trigger the buttonAnimation Function
    buttonAnimation(event.key);
})

function makeSound(key) {

    //  Switch Statement:
    switch (key) {

        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kickbass = new Audio('./sounds/kickbass.mp3');
            kickbass.play();
            break;

        default: console.log(buttonInnerHTML);

    }
}



function buttonAnimation(currentKey) {
    // "." + current key: is the class "letter" located in the HTML. ex. = ".w" will now = activeButton 
    var activeButton = document.querySelector("." + currentKey);

    // adds the "pressed" class located in the CSS to the activeButton
    activeButton.classList.add("pressed");

    // "setTimeout" will remove the "pressed" class after 100ms so the animation can be reset
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}