// Header.jsx
import { useState } from 'react'; // Importa useState
import { Navbar } from '../../UI/Navbar/Navbar'
import { Brand } from '../../UI/Brand/Brand'
// Importa un ícono de hamburguesa. Si usas 'react-icons', puedes usar FaBars
import { FaBars } from 'react-icons/fa'; // Asegúrate de tener instalado react-icons

import './Header.css'

export const Header = () => {
    // Estado para controlar si el menú móvil está visible
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar el estado (abrir/cerrar)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    

    return (
        <header>
            <Brand link='/'/>

            {/* BOTÓN HAMBURGUESA: Solo visible en pantallas pequeñas */}
            <button className="menu-toggle" onClick={toggleMenu}>
                {/* Ícono de la hamburguesa */}
                <FaBars className='toggle-icon' /> 
            </button>

            {/* La clase 'open' se añade solo si isMenuOpen es true */}
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}> 
                <ul className="navbar-list">
                    <Navbar link='/' text='Home'/>
                    <Navbar link='/MyDevelopments' text='Development'/>
                    <Navbar link='/MyDesigns' text='Design'/>
                    {/* <Navbar link='/MySkills' text='Skills'/> */}
                    <Navbar link='/ContactMe' text='Contact'/>
                </ul>
            </nav>
        </header>
    )
}