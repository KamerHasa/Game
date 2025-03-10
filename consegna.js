// Consegna:

// 1. Non dimenticare di committare spesso e presto! 
//  Puoi fare riferimento alla lezione sui messaggi di commit qui!
   
// 2. Inizia un nuovo repository Git per il tuo progetto.
   
// 3. Crea un documento HTML vuoto con un tag script (Suggerimento: 
//      è pratica comune collegare un file .js esterno). 
//      Questo gioco verrà giocato completamente dalla console, 
//      quindi non preoccuparti di mettere altro all'interno.
   
// 4. Il tuo gioco giocherà contro il computer, 
//     quindi inizia con una funzione chiamata getComputerChoice che restituirà casualmente 'Rock', 
//      'Paper' o 'Scissors'. Utilizzeremo questa funzione nel gioco per determinare la mossa del computer. 
//      Suggerimento: usa la console per assicurarti che restituisca l'output atteso prima di passare al 
//        passaggio successivo!
   
// 5. Scrivi una funzione che esegue un singolo round di Rock Paper Scissors. 
//  La funzione dovrebbe prendere due parametri - playerSelection e computerSelection - 
//  e quindi restituire una stringa che dichiara il vincitore o il pareggio del round in questo modo: 
//  "Hai perso! La carta batte il sasso"
   
// 6. Rendi il parametro playerSelection della tua funzione insensibile alle maiuscole e minuscole 
//  (in modo che gli utenti possano inserire rock, ROCK, RocK o qualsiasi altra variazione).
   
// 7. Nota importante: vuoi restituire i risultati di questa chiamata di funzione, non console.log()arli. 
//  Userai ciò che restituisci in seguito, quindi testiamo questa funzione usando console.log per vedere i risultati:


function playRound(playerSelection, computerSelection) {
  // il tuo codice qui!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


// 8. Scrivi una NUOVA funzione chiamata playGame(). Utilizza la funzione precedente all'interno 
//di questa per giocare a un gioco di cinque round che tiene il punteggio e riferisce un vincitore o un perdente alla fine.
   
// 9. Non hai ancora imparato ufficialmente come "loop" su codice per ripetere chiamate di funzione...
// se conosci già i loop da qualche altra parte (o se vuoi fare un po' di apprendimento in più), sentiti libero di usarli.
// Se no, non preoccuparti! Chiama semplicemente la tua funzione playRound 5 volte di seguito. 
//I loop sono coperti nella prossima lezione.
   
// 10. A questo punto dovresti utilizzare console.log() per visualizzare i risultati di ogni round e il vincitore alla fine.
   
// 11. Usa prompt() per ottenere input dall'utente. Leggi la documentazione qui se ne hai bisogno.
   
// 12. Sentiti libero di rielaborare le tue funzioni precedenti se necessario. In particolare, 
//  potresti voler cambiare il valore restituito in qualcosa di più utile.
   
// 13. Sentiti libero di creare ulteriori funzioni "helper" se ritieni che possa essere utile.
