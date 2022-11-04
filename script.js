
const login = document.getElementById("login-Form");
const register = document.getElementById("register-Form");
const note = document.getElementById("note-Form")

if(login) login.addEventListener('submit',loginFunc)
if(register) register.addEventListener('submit',regFunc)
if(note) note.addEventListener('submit',noteFunc)

function loginFunc(e)
{
    e.preventDefault();
    let username=document.getElementById('userName').value;
    let password=document.getElementById('passWord').value;


    class User{
        constructor(username,password)
        {
            this.uname=username;
            this.pword=password;
        }
    
    
    
    getuname(){
        return this.uname;
    }
    setuname(newusername){
        this.uname = username;
    }
    getpword(){
        return this.pword;
    }
    setpword(newpassword){
        this.pword = password
    }

    }

    const Userl=new User(username,password);
    console.log(Userl);

}


function regFunc(e)
{
    e.preventDefault()
    let fname=document.getElementById('firstName').value;
    let lname=document.getElementById('lastName').value;
    let email=document.getElementById('eMail').value;
    let password=document.getElementById('passWord').value;

    class User{
        constructor(fname,lname,email,password)
        {
            this.firstname=fname;
            this.lastname=lname;
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }

    const user1=new User(fname,lname,email,password);
    console.log(user1);
}


function noteFunc(e)
{
    e.preventDefault();
    let takenotes=document.getElementById('takeNotes').value;

    class User{
        constructor(takenotes)
        {
            this.tnotes=takenotes;
        }
    
    
    gettnotes(){
        return this.tnotes;
    }
    settnotes(takenotes){
        this.tnotes = takenotes;
    }
   

    }

    const Userl=new User(takenotes);
    console.log(Userl);

}


/*const loginForm = document.getElementById("login-form");
const noteForm = document.getElementById("note-form");
const registerForm = document.getElementById("register-form");

if(registerForm) registerForm.addEventListener('submit',registerFunc)
if(loginForm) loginForm.addEventListener('submit',loginFunc)
if(noteForm) noteForm.addEventListener('submit',noteFunc)

function registerFunc(e){
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    //let person.fullNameFunc = fullNameFunc(firstName,lastName);
    console.log(firstName)
}

function loginFunc(e){
    e.preventDefault();

    let userName = document.getElementById("userName").value;
    let passWord = document.getElementById("passWord").value;
}

function noteFunc(e){
    e.preventDefault();

    let takeNotes = document.getElementById("takeNotes").value;
}

const person = {
    
    get fullNameFunc() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullNameFunc(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}; */





