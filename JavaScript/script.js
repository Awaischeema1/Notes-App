const creatNoteOpenBtn = document.querySelector('.add-note button i'),
creatNote = document.querySelector('.top-bar .fa-floppy-disk'),
NoteList_el = document.querySelector('.note-list'),
Note = document.querySelector('.pop-up textarea'),
creatNoteCloseBtn = document.querySelector('.top-bar .fa-xmark'),
popUp = document.querySelector('.pop-up');

const noteList = JSON.parse(localStorage.getItem('noteList')) || [];

displayList()
creatNoteOpenBtn.addEventListener('click',()=>{
    popUp.classList.add('open')
});
creatNote.addEventListener('click',()=>{
    if(Note.value !== ''){
    noteList.push(Note.value);
    Note.value = ''
    popUp.classList.remove('open')
    setLocalStorage();
    location.reload();
    }
});
creatNoteCloseBtn.addEventListener('click',()=>{
    popUp.classList.remove('open')
    Note.value = ''
});
function setLocalStorage() {
    const arr = JSON.stringify(noteList);
    localStorage.setItem('noteList',arr);
}
function displayList() {
  if(noteList.length !== 0){
    for (let i = 0; i < noteList.length; i++) {
        let list_el = document.createElement('li');
        list_el.classList.add('list-item');
        list_el.innerHTML = `
        <div class="note-btn d-flex justify-content-end align-items-center">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash-can del"></i>
                        </div>
                        <textarea readonly>${noteList[i]}</textarea>
        `
        const editBtn = list_el.querySelector('.fa-pen-to-square'),
        delBtn = list_el.querySelector('.fa-trash-can');
        editBtn.addEventListener('click',()=>{
            popUp.classList.add('open')
            Note.value = `${noteList[i]}`
            list_el.remove();
           noteList.splice(i,1)
           setLocalStorage();
        })
        delBtn.addEventListener('click',()=>{
           list_el.remove();
           noteList.splice(i,1)
           setLocalStorage();
        })
        NoteList_el.appendChild(list_el);
    }
  }
}


