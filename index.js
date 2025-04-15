/* this changes the text inside of an element
document.querySelector('#user > b').textContent = ' Nina';
document.querySelector('#user > i').textContent = '?';
*/
// this is an array of numbers
// const s ='A very long sentence,500 words long. Really!!!!'
// document.querySelector('output').textContent = s;
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('#user');
const start = document.querySelector('#start');
const pan = document.querySelector('#panel')
//this unmask the password
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});
//this mask the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
});
//thi submits the password with the form
fm.addEventListener('submit',(e) => {
    e.preventDefault();//this will stop the page from reloading
    const pd ='ANIMESGOOD';
    if(pd === ipt.value) {
        user.remove();
        fm.remove();
        output.textContent = 'Signing you in...'; 
        const timeoutID = setTimeout(() => {
           output.remove();
            pop.showPopover();
            clearTimeout(timeoutID)
        }, 3000);
    } else {
        output.textContent = 'Wrong Password'
    }
});
//this shows/hides the panel 
start.addEventListener('click', () => {
    pan.classList.toggle('on');
}); 
//this formats a Unix number into a human readable date
const dob  = new Date('05/20/2014').getTime();//Date Format in js is mm/dd/yyyy
pan.querySelector('#dob').textContent = Intl.DateTimeFormat('en-US',{dateStyle:'full'}).format(dob);

//FUNCTIONS
//A function is a group of statements that never run unless when called
function calculator() {
    console.log(2 + 4);
    console.log(10-5);
    console.log(10/2);
    console.log(3*3);
    console.log(10 % 2);//modulus(short form is mod):it means the remainder of a division
};
calculator();

function callConfetti() {
    /*
        const t =' ANIME';
    const u =6;
    console.log(t-u);//concatenaation : joins strings together
    */
const d= new Date('04/14/2025').getDate();
const m= new Date('04/14/2025').getMonth();
const today =Date.now();
console.log(new Date(today).getDate())
if (new Date(today).getDate() === d && new Date(today).getMonth() ===m)
    pan.classList.add =('bgi');
console.log(m);
console.log(d);
}
callConfetti();