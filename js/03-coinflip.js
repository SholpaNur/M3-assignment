let randomNum = Math.round(Math.random());
let flip=(randomNum===0?"Heads":"Tails")
let choice = (prompt("Heads or Tails"));

if (choice==='Heads') {
    if (flip === 'Heads') {
        console.log(`The flip was heads and you chose heads...you win`);
    } else if (flip === 'Tails') {
        console.log(`The flip was tails but you chose heads...you lose`);
    } 
} else if (choice === 'Tails') {
    if (flip === 'Tails') {
        console.log(`The flip was tails and you chose tails...you win`);
    } else if (flip === 'Heads') {
        console.log(`The flip was heads but you chose tails...you lose`);
    } 
}
