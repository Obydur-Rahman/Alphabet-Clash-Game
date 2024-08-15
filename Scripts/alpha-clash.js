// function play(){
//     // step-1: Hide The home Screen 

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show The Playground

//     const playgroundSection = document.getElementById('playground-screen');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    // Step-1: generate a random alphabet 
    const alphabet = getARandomAlphabet();

    // Step-2 : Set the random alphabet to the Screen

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet.toUpperCase();

    // set bacground color of the alphabet
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('playground-screen');
    continueGame();
}