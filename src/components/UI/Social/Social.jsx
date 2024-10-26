import PropTypes from 'prop-types';
import './Social.css'

export const Social = ({link,icon}) => {
  return (
    <a href={link}><i className={icon}></i></a>
  )
}
// Validación de las props
Social.propTypes = {
    link: PropTypes.node, // 'node' es cualquier cosa que React puede renderizar
    icon: PropTypes.node,
  };
