
let symbols = ["dessert", "island", "mountain", "rail", "ship", "stadium", "trail", "woods", "dessert", "island", "mountain", "rail", "ship", "stadium", "trail", "woods"];

shuffle();

function shuffle() {
    let currentIndex = symbols.length, 
    temporaryValue, 
    randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex); // math floor rounds down so can select numbers between 0-3 //pick 1
      currentIndex -= 1; //4 -1 = 3
  
      // And swap it with the current element.
      temporaryValue = symbols[currentIndex]; 
      symbols[currentIndex] = symbols[randomIndex]; 
      symbols[randomIndex] = temporaryValue; 
    }
  
    return symbols;
  }

//LOGIC WORKS 'FOR.. OF' - APPLY TO FOR.. OF LOOP? 
    //LOGIC ERROR 'IF STATEMENT' - RETURN VALUES. 
function duplication() {
    for (let i = 1; i < symbols.length; i++) {
    let compare = i; //
    compare = compare -= 1;
        if (symbols[compare] === symbols[i]) {
            return true;
        }
    }
return false;
} 

function arrayToCss() {
    const container = document.querySelector('.game-container').children;
    let childNumber = 0;
    for (const symbol of symbols) {
        container[childNumber].children[0].className += ` ${symbol}`;
        childNumber += 1;
    }
}
