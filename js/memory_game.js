
let symbols = ["dessert", "island", "mountain", "rail", "ship", "stadium", "trail", "woods", "dessert", "island", "mountain", "rail", "ship", "stadium", "trail", "woods"];

shuffle(symbols);

function shuffle(array) {
    let currentIndex = array.length, 
    temporaryValue, 
    randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex); // math floor rounds down so can select numbers between 0-3 //pick 1
      currentIndex -= 1; //4 -1 = 3
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex]; 
      array[currentIndex] = array[randomIndex]; 
      array[randomIndex] = temporaryValue; 
    }
  
    return array;
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
