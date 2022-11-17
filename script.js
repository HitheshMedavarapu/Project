
const login = document.getElementById("login-Form");
const register = document.getElementById("register-Form");
const note = document.getElementById("note-Form")

if(login) login.addEventListener('submit',loginFunc)
if(register) register.addEventListener('submit',regFunc)
if(note) note.addEventListener('submit',noteFunc)

function loginFunc(e){
    e.preventDefault();
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('passWord').value;

    const User1 = new User(uname, pword, null, null, null);
    console.log(User1);

    document.getElementById("login-Form").reset();
}

function regFunc(e){
    e.preventDefault();
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('passWord').value;
    let fname=document.getElementById('firstName').value;
    let lname=document.getElementById('lastName').value;
    let email=document.getElementById('eMail').value;

    const User1 = new User(uname, pword, fname, lname, email);
    console.log(User1);

    document.getElementById("register-Form").reset();
}

function noteFunc(e){
    e.preventDefault();
    let notes=document.getElementById('takeNotes').value;

    const Note1 = new Note(notes);
    console.log(Note1);

    document.getElementById("note-Form").reset();
}

function User(uname, pword, fname, lname, email)
{
    this.username = uname;
    this.password = pword;
    this.firstName = fname;
    this.lastName = lname;
    this.emailid = email;

    User.prototype.getusername = function(){
        return `${this.username}`
    }
    User.prototype.getpassword = function(){
        return `${this.password}`
    }
    User.prototype.getemail = function(){
        return `${this.email}`
    }
    User.prototype.getfirstname = function(){
        return `${this.firstName}`
    }
    User.prototype.getlastname = function(){
        return `${this.lastName}`
    }
    
}


function Note(notes)
{
    this.takeNotes = notes;

    User.prototype.getnotes = function(){
        return `${this.takeNotes}`
    }
}

