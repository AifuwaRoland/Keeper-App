import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, setNotes] = useState([]);



    function addNote(newNote) { //arry with new note 

        setNotes(prevNotes => { // get previous note 
            return [...prevNotes, newNote]; // add new note  at the end
        
        })
    }
    return (
        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            {notes.map(noteItem => { //loop through notes array 

                return <Note title={noteItem.title}
                    content={noteItem.content} />
            })}

            <Footer />
        </div>
    );
}

export default App;
