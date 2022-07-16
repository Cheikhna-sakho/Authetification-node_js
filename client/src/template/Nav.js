import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const navItems = token && [
        new Items("Accueil", function () { return navigate("/home") }),
        new Items("Profil", function () { return console.log("Profil"); }),
        new Items("Déconnexion", function () {
            localStorage.removeItem('token');
            return navigate("/")
        }),
    ]

    return (
        <nav>
            <ul className='nav-ul grid-col'>
                {navItems.map((item, i) => <li key={i} className='nav-item' onClick={item.handleClick}>{item.title}</li>)}
            </ul>
        </nav>
    )
}
export default Nav;