import React from "react"
import trollFace from "../images/troll-face.png"
import logo from "../images/logo.png"
export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">By Rentoken</h4>
            <img 
                src={logo} 
                className="header--image header--logo"
            />
        </header>
    )
}