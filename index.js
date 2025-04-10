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