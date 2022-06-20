
//Detect a button press

for (let i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     
        playSound(this.innerHTML)   
       pressAnimation(this.innerHTML)

    })
}

//Detect a key press

document.addEventListener("keydown", function(e) {
    playSound(e.key)
pressAnimation(e.key)

})

function playSound (key) {
    switch (key) {
        case "w":
            const crashSymbol= new Audio("sounds/crash.mp3");
            crashSymbol.play();
            break;

        case "a":
            const kickBass= new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            const snare = new Audio ("sounds/snare.mp3");
            snare.play();
             break;

        case "d":
            const drum1= new Audio("sounds/tom-1.mp3");
            drum1.play();
            break;

        case "j":
            const drum2 = new Audio("sounds/tom-2.mp3");
            drum2.play();
            break;

        case "k": 
            const drum3= new Audio("sounds/tom-3.mp3");
             drum3.play();
             break;

             case "l":
                const drum4 = new Audio("sounds/tom-4.mp3");
                drum4.play()
                break;


        default:
            break;
    }
}

function pressAnimation (currentkey) {
  const pressButton=   document.querySelector("." + currentkey)
  pressButton.classList.add("pressed")
  setTimeout(function() {
    pressButton.classList.remove("pressed")
  }, 100)
}