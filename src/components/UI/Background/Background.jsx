// src/components/UI/Background/Background.jsx

import fondo from '../../../assets/fondo.jpg';
import './Background.css'
// Ya no necesitamos PropTypes ni {children}

export const Background = () => {
  return (
    // ¡Solo renderiza la imagen!
    <section className="fondo">
        <img src={fondo} alt="fondo" />
    </section>
  )
}
// Ya no necesitas la validación de propTypes