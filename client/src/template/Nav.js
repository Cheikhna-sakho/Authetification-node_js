import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const navItems = token ? [
        { title: "Accueil", handleClick: function () { return navigate("/home") } },
        { title: "Profil", handleClick: function(){return console.log("Profil");} },
        { title: "Déconnexion", handleClick: function () { 
            localStorage.removeItem('token');
            return navigate("/") } },
    ] : [{   title: "", handleClick: function(){}}];

    return (
        <nav>
            <ul className='nav-ul grid-col'>
                {navItems.map((item, i) => <li key={i} className='nav-item' onClick={item.handleClick}>{item.title}</li>)}
            </ul>
        </nav>
    )
}

export default Nav