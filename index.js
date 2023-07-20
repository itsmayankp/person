let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

let openModal = function(){
    console.log('Modal is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
};

let closeModal = function(){
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
};
