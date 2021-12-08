import React,{ useEffect, useState } from 'react'
import "./Navbar.css";

const Navbar = () => {

    const[show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return ()=> {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            />

            <img className="nav_avatar"
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt="Avatar"
            />
        </div>
    )
}

export default Navbar
