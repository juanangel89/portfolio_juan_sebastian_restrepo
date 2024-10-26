//rafc
import fondo from '../../../assets/fondo.jpg';
import './Background.css'
import PropTypes from 'prop-types';

export const Background = ({children}) => {
  return (
    <section className="fondo">
        <img  src={fondo} alt="fondo" />
        {children}
    </section>
  )
}
// Validación de las props
Background.propTypes = {
  children: PropTypes.node, // 'node' es cualquier cosa que React puede renderizar
};
