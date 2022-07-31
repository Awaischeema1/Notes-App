const creatNoteOpenBtn = document.querySelector('.add-note button i'),
creatNoteCloseBtn = document.querySelector('.top-bar .fa-xmark'),
popUp = document.querySelector('.pop-up');


creatNoteOpenBtn.addEventListener('click',()=>{
    popUp.classList.add('open')
})
creatNoteCloseBtn.addEventListener('click',()=>{
    popUp.classList.remove('open')
})

