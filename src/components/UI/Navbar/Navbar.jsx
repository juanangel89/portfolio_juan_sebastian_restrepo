import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css'

export const Navbar = ({link,text}) => {
  return (
    <li className="navbar-item">
      <Link to={link}>{text}</Link>
    {/* <a href={link}>{text}</a> */}
  </li>
  )
}
// Validación de las props
Navbar.propTypes = {
    text: PropTypes.node, // 'node' es cualquier cosa que React puede renderizar
    link: PropTypes.node,
  };