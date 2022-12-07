
const login = document.getElementById("login-Form");
const register = document.getElementById("register-Form");


if(login) login.addEventListener('submit',loginFunc)
if(register) register.addEventListener('submit',regFunc)


function loginFunc(e){
    e.preventDefault();
    let uname=document.getElementById('userName').value;
    let pword=document.getElementById('passWord').value;

    const User1 = new User(uname, pword);
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

/*
class User {
    constructor(uname, pword, fname,lname, email) {
        this.userName = uname;
        this.password = pword;
        this.firstName = fname;
        this.lastName = lname;
        this.emailId = email;
    }
  
    getUsername() {
      return this.userName;
    }
    getpassword(){
        return this.password;
    }
    getfirstname(){
        return this.firstName;
    }
    getlastname(){
        return this.lastName;
    }
    getemail(){
        return this.emailId;
    }
  }
*/
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



/**** USER ******/



const loginprinting = document.getElementById("userprint");
document.getElementById("users-btn").addEventListener('click', getUsers);

function getUsers()
{
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then((data) => {
        
        data.forEach((user) => {
            let section = `
            <div class="uprint">
                <h3>${user.userName}</h3>
                <h3>${user.password}</h3>
                <br>
            </div>
            `
            loginprinting.innerHTML+=section;
        })
    })
    .catch((err)=>console.log(`Error! ${err}`));
}



/*register functionality
let regForm = document.getElementById("reg-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
    e.preventDefault();

    let userName = document.getElementById("username").value;
    let password = document.getElementById("pword").value;

    let user = new User(userName, password);        
}
*/
