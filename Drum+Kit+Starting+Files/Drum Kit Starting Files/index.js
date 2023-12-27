var lengthOfBtn = document.querySelectorAll('.drum').length;
for(var i = 0; i < lengthOfBtn; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        var btnInnerHTML = this.innerHTML;
        keyboardSound(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
    });
}

document.addEventListener('keydown', function(event){
    keyboardSound(event.key);
    buttonAnimation(event.key);
});

function keyboardSound(key){
    switch(key){
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}