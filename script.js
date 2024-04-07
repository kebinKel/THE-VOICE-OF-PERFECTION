let menu_open = document.querySelector('.fa-bars');
let menu_close = document.querySelector('.fa-xmark');
let nav_contents = document.querySelector('.nav-contents');
let O01 = document.querySelector('.O01');
let O02 = document.querySelector('.O02');
let O03 = document.querySelector('.O03');
let O04 = document.querySelector('.O04');
let O05 = document.querySelector('.O05');

menu_open.onclick = (()=>{
    
    menu_open.classList.add('close')
    menu_close.classList.add('open')
    nav_contents.classList.toggle('open')
    console.log(O01);
    O01.classList.toggle('open')
    O02.classList.toggle('open')
    O03.classList.toggle('open')
    O04.classList.toggle('open')
    O05.classList.toggle('open')
})

menu_close.onclick = (()=> {
    menu_close.classList.toggle('open')
    menu_open.classList.remove('close')
    nav_contents.classList.toggle('open')
    console.log(O01);
    O01.classList.toggle('open')
    O02.classList.toggle('open')
    O03.classList.toggle('open')
    O04.classList.toggle('open')
    O05.classList.toggle('open')
})