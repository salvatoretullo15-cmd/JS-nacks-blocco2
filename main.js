//chiedere all'utente di inserire due parole in successione con due prompt.
//qui lutente inserisce la sua prima parola 
const firstWord=(prompt("write a word"))
//qui l'utente inserisce la sua seconda parola 
const secondWord=(prompt("write a word"))

if(firstWord>secondWord){
    console.log("la parola piu corta è:",firstWord);
} else if (secondWord>firstWord){
    console.log("la parola piu lunga è:",secondWord)
}
console.log(firstWord)