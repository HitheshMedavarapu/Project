import { fetchData, getCurrentUser, setCurrentUser } from './main.js'

const note = document.getElementById("note-Form")

if(note) note.addEventListener('submit',noteFunc)

function noteFunc(e){
    e.preventDefault();
    let notes=document.getElementById('takeNotes').value;

    let note = new Note(notes);
    let user = getCurrentUser();
    note.userID = user.userID;

    fetchData("/notes/create", note, "POST")
    .then((data) => {
    //setCurrentNote(data);
    window.location.href = "note.html";
    })
    .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
    })

    const Note1 = new Note(notes);
    console.log(Note1);

    document.getElementById("note-Form").reset();
}

function Note(notes)
{
    this.takeNotes = notes;

    Note.prototype.getnotes = function(){
        return `${this.takeNotes}`
    }
}
/*
const noteprinting = document.getElementById("noteprint");
document.getElementById("notes-btn").addEventListener('click', getNotes);

function getNotes()
{
    fetch("http://localhost:3000/notes")
    .then((res)=>res.json())
    .then((data) => {
        let ul=document.getElementById("allNotes");
        data.forEach((note) => {
            let section = `
            <div class="nprint">
                <h3>${note.feedback}</h3>
                <br>
            </div>
            `
            noteprinting.innerHTML+=section;
        })
    })
    .catch((err)=>console.log(`Error! ${err}`));
}
*/