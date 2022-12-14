const con = require("./db_connect");                // we need this file because we need connection

async function createTable(){
    let sql=`CREATE TABLE if not exists notes(
        noteID INT NOT NULL AUTO_INCREMENT,
        note VARCHAR(255) NOT NULL UNIQUE,
        userID INT,
        CONSTRAINT notePK PRIMARY KEY(noteID),
        CONSTRAINT note_Fk FOREIGN KEY (userID) REFERENCES users(userID)
        
    );`
    await con.query(sql);                            // we need await when used async
}
//  
//
createTable();

async function getAllNotes() {
    const sql = `SELECT * FROM notes;`;
    let notes = await con.query(sql);
    console.log(notes)
  }

  async function createNote(note){

    let cNote=await getNote(note);

    const sql=`INSERT INTO notes(note,userID) VALUES ("${note.takeNotes}",${note.userID});`
    //const sql=`INSERT INTO notes(note) VALUES ("${note.note}");`

    await con.query(sql);
    return cNote[0];
    
}

  async function editNote(note){
    let sql=`update notes SET note="${note.takeNotes}" where noteID=${note.noteID}`;

    await con.query(sql);
    let updatedNote=await getNote(note);

    return updatedNote[0];
}

async function deleteNote(note){
    let sql=`Delete from notes where noteID=${note.noteID}`;

    await con.query(sql);

}

async function getNote(note){
    let sql;

    if(note.userID){
        sql=`select * from notes where userID=${note.userID};`;

    }
    else{
        sql=`select * from notes where noteID =${note.noteID};`;
    }

    return await con.query(sql);
}



function getAllNotes(){
    return notes;
}

module.exports={getNote,editNote,deleteNote,createNote};