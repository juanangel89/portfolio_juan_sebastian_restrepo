// Header.jsx
import { useState,useEffect } from 'react'; // Importa useState
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

        // 1. Hook useEffect para manejar el scroll
    useEffect(() => {
        
        // Función para cerrar el menú
        const closeMenuOnScroll = () => {
            // Solo intentamos cerrar si el menú está abierto
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // 2. Añadir el escuchador de eventos 'scroll'
        // Esto se ejecutará cada vez que la página se desplace
        window.addEventListener('scroll', closeMenuOnScroll);

        // 3. Función de limpieza
        // Es crucial remover el escuchador cuando el componente se desmonta
        // o cuando isMenuOpen cambie (aunque en este caso es mejor desmontar).
        return () => {
            window.removeEventListener('scroll', closeMenuOnScroll);
        };
        
    }, [isMenuOpen]); 

    return (
        <header>
            <Brand/>

            {/* BOTÓN HAMBURGUESA: Solo visible en pantallas pequeñas */}
            <button className="menu-toggle" onClick={toggleMenu}>
                {/* Ícono de la hamburguesa */}
                <FaBars className='toggle-icon' /> 
            </button>

            {/* La clase 'open' se añade solo si isMenuOpen es true */}
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}> 
                <ul className="navbar-list">
                    <Navbar link='/' text='Home'/>
                    <Navbar link='/MyProjects' text='Projects'/>
                    {/* <Navbar link='/MySkills' text='Skills'/> */}
                    <Navbar link='/ContactMe' text='Contact'/>
                </ul>
            </nav>
        </header>
    )
}