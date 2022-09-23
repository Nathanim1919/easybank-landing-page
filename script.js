let closeBar= document.querySelector('.close');
let bar = document.querySelector('.bar');
let menu = document.querySelector('.menu')
let backdrop = document.querySelector('.backdrop');



bar.addEventListener('click',show);
closeBar.addEventListener('click',closemenu);





function show(){
    menu.classList.add('showMenu');
    bar.style.display='none';
    closeBar.style.display='block';
    backdrop.style.display='block';
}

function closemenu(){
    menu.classList.remove('showMenu');
    bar.style.display='block';
    closeBar.style.display='none';
    backdrop.style.display='none';

}