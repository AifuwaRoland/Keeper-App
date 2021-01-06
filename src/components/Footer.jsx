import React from "react";
const date= new Date().getFullYear();
function Footer() {
    return (

        <footer>
            <p>Copyright © {date} </p>
            <p>Made by Roland O. Aifuwa</p>
        </footer>

    );
}

export default Footer;