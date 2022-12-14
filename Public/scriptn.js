import { fetchData ,getCurrentUser, setCurrentNote, setCurrentUser } from './main.js'

const noteForm = document.getElementById("note-Form")

if(noteForm) noteForm.addEventListener('submit',noteFunc)

function noteFunc(e){
    e.preventDefault();
    let notes=document.getElementById('takeNotes').value;

    let note = new Note(notes);
    let user = getCurrentUser();
    note.userID = user.userID;

    fetchData("/notes/create", note, "POST")
    .then((data) => {
    //setCurrentNote(data);
    setCurrentNote(data);
    window.location.href = "note.html";
    })
    .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
    })

    const Note1 = new Note(notes);
    console.log(Note1);
    window.location.href = "note.html";
    document.getElementById("note-Form").reset();
}

// function Note(notes)
// {
//     this.takeNotes = notes;

//     Note.prototype.getNotes = function(){
//         return `${this.takeNotes}`
//     }
// }

class Note {
    constructor(takeNotes){
        this.takeNotes = takeNotes;
    }

    getNotes(){
        return this.takeNotes;
    }
}

let user = getCurrentUser();
if(user && noteForm) getNotes();


 function getNotes(){
    let user = getCurrentUser();
     fetchData("/notes/", user,"post")
     .then((data)=>{
         let ul=document.getElementById("allNotes");

         data.forEach((note)=>{
             let li=document.createElement('li');
             let text=document.createTextNode(note.note);
             li.appendChild(text);
             ul.appendChild(li);

         })
     })
     .catch((err)=>console.log(`Error! ${err}`));

     //window.location.href="note.html";
 }
