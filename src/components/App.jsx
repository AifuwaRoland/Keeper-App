import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";



function App() {
    return (
        <div>
            <Header />
            {notes.map((notes) => (
                <Note
                    id={notes.id}
                    title={notes.title}
                    content={notes.content}
                />

            ))}

            <Footer />


        </div>
    );
}
export default App;



