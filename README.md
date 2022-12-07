# Note Taking Project 

### Description

This Project is mainly about taking notes from the user. It consists of three html files namely Login.html, Register.html and Note.html. 

A Stylesheet named Style.css is connected to all the html files. Various styling functions like flexbox are used. Many number of images are used in this project.

A javascript file named Script.js is connected to all the html files.

There are two different entities in this project namely USER and NOTE. USER have attributes namely USERID, Username, Firstname, Lastname, Email and Password. While NOTE enitity have attributes namely NoteID, Note, NoteDate and UserID as it's foreign key.

Server is setup with node package manager (npm package).

### Business Rules

1. A USER may CREATE any number of NOTEs.
2. Each NOTE is CREATED by exactly one USER.

### Entity-Relationship Diagram

![ERD !](/Public/images/erd.png)
