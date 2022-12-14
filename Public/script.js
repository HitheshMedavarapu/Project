import { fetchData, setCurrentUser, removeCurrentUser, getCurrentUser, setCurrentNote } from './main.js'

const login = document.getElementById("login-Form");
const register = document.getElementById("register-Form");


if(login) login.addEventListener('submit',loginFunc)
if(register) register.addEventListener('submit',regFunc)


function loginFunc(e){
    e.preventDefault();
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('password').value;

    const User1 = new User(uname, pword, "", "", "");
    console.log(User1);
    //console.log(fetchData("/users/login", User1, "POST"))

    fetchData("/users/login", User1, "POST")
    .then((data) => {
      setCurrentUser(data);
      console.log("hi")
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })



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

    fetchData("/users/register", User1, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })

    document.getElementById("register-Form").reset();
}


function User(uname, pword, fname, lname, email, userid)
{
    this.userName = uname;
    this.password = pword;
    this.firstName = fname;
    this.lastName = lname;
    this.emailid = email;
    this.userID = userid;

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
    User.prototype.getuserid = function(){
        return `${this.userID}`
    }
}

    










