function hideElementById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.add('hidden');
}

function showElementById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.remove('hidden');
}



function setBackgroundColorById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.add('bg-orange-600');
}

function removeBackgroundColorById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.remove('bg-orange-600');
}



function getARandomAlphabet(){
    // get or create an alphabet array
    const  alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25

    const rendomNumber = Math.random()*25;
    const randomIndex = Math.round(rendomNumber);
   

    const alphabet = alphabets[randomIndex];
    return alphabet;
}