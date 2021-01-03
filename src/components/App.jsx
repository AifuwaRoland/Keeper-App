import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";


function createNote(notes){
    return(
        <Note
        id={notes.id}
        title={notes.title}
        content={notes.content}
        />
    );
}

function App() {
    return (
    <div>
        <Header />
        {notes.map(createNote)}
        <Footer />


    </div>
    );
}
export default App;



