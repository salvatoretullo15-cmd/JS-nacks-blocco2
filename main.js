//chiedere all'utente di inserire due parole in successione con due prompt.
//qui lutente inserisce la sua prima parola 
const first_Word=prompt("write a word")
//qui l'utente inserisce la sua seconda parola 
const second_Word=prompt("write a another word")

if(second_Word.length > first_Word.length){
    message=`the second word is longer than the first ${second_Word} ${first_Word}`;
} else if (first_Word.length > second_Word.length){
    message==`the first word is longer than the second ${first_Word} ${second_Word}`;
} else {
    message =`the word are equal ${first_Word} ${second_Word}`;
}
console.log(message);
