const hintBtn=document.querySelector('#hintBtn')
const txt=document.querySelector('#txt')
const tid= setTimeout(() => {
    document.querySelector('#action').style.backgroundImage ='none'
    clearTimeout(tid);
})
let score =0;
const checkBtn=document.querySelector('#checkBtn');
checkBtn.addEventListener('click', () => {
    document.querySelector('#cup >i').textContent = score;
    score+5;
    document.querySelector('#action').style.backgroundImage =`url('error_fawzi_mourad.gif')`;
},  2000);
//string methods
//.slice( start,end )//this slices a portion of a string
//.concat(...strings) //joins all chars(character)in a string
//.trim( ) //removes spaces at the beginning and end of a string
//.at(...index)   //chooces the chars at the index
//.length  //tells how many chars are in a strings
//.toLowerCase //writes all chars in lower case
//.toUpperCase  //writes all the chars in upper case
//.endsWith      //returns true if the char of the string matches(ending letter)
//.startsWith     //returns true if the char of the srings matches(starting letter)
    hintBtn.addEventListener('click', () => {
    // txt.textContent ='I CHANGED YOU!!!';
    writeTxt ();
});
function writeTxt() {
    const text ="ANIME'S THE GOAT BECAUSE OF";
    txt.textContent =''
    let count=0;
    const id = setInterval(() => {
        if ( count === text.length - 1) clearInterval(id);
        txt.textContent +=  text[count];
        count++; //count ++ keeps adding 1 to the value of count
    }, 100);
}