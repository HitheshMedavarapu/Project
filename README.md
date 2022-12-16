# Note Taking Project 

### Description

This Project is mainly about taking notes from the user. It consists of three html files namely Login.html, Register.html and Note.html. 

A Stylesheet named Style.css is connected to all the html files. Various styling functions like flexbox are used. Many number of images are used in this project.

A javascript file named Script.js is connected to all the html files.

There are two different entities in this project namely USER and NOTE. USER have attributes namely USERID, Username, Firstname, Lastname, Email and Password. While NOTE enitity have attributes namely NoteID, Note, NoteDate and UserID as it's foreign key.

Server is setup with node package manager (npm package).

When a user signs up from the register page, the attributes of user will be stored in the user table of sample_db databse. And the attributes are also stored in the local storage so when it redirects to the Note page, the note attributes of the particular user will be retrieved.

The same happens for the login page but when the user signs in using username and password. We retrieve the user attributes from the user table of sample_db databse and store them in the local storage. When we redirect to the Note page, the note attributes of the particular user will be retrieved.

We make use of various functions to execute CRUD operations of User and Notes.

In the note page, all the notes of the user (the one that logged in) will appear in an unordered list below the submit button.
For each new note, the list will be updated.

![INS !](/Public/images/inspect.png)


### Business Rules

1. A USER may CREATE any number of NOTEs.
2. Each NOTE is CREATED by exactly one USER.

### Entity-Relationship Diagram

![ERD !](/Public/images/erd.png)

### Database

Sample_db

## Tables
User, Note
User consists of UserID, username, firstname, lastname, email and password
Note consists of NoteID, takeNotes and userID (foreign key from user table)

![DB !](/Public/images/db.png)


