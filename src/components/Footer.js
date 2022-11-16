import React from "react"
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


function Footer() {
    return (
        <ul className="footer">
            <li >
            <a href="https://github.com/Ayushparui">
                <AiFillGithub />
            </a>
            </li>
            <li>
            <a href="https://twitter.com/Ayushparui">
                <AiFillTwitterSquare />
            </a>
            </li>
            <li>
            <a href="https://www.facebook.com/ayush.lee.90/">
                <AiFillFacebook />
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/">
                <AiFillInstagram />
            </a>
            </li>
        </ul>
    )
}

export default Footer