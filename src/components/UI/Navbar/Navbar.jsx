import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css'

export const Navbar = ({link,text}) => {
  return (
    
      <Link className="navbar-item" to={link}>{text}</Link>
   
  
  )
}
// Validación de las props
Navbar.propTypes = {
    text: PropTypes.node, // 'node' es cualquier cosa que React puede renderizar
    link: PropTypes.node,
  };