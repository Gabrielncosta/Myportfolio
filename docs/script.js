let imgLink = document.querySelector('img');
let bar = document.querySelector('.active');
let menu = document.querySelector('ul');


imgLink.onclick = function active() {
    menu.classList.toggle('active');
}