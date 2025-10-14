import "./Footer.css";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { 
    link: "https://www.linkedin.com/in/juan-sebastian-restrepo-angel/", 
    IconComponent: FaLinkedin,
    color: "#0A66C2",
    label: "LinkedIn"
  },
  { 
    link: "https://wa.me/3186283663", 
    IconComponent: FaWhatsapp, 
    color: "#25D366",
    label: "WhatsApp"
  },
  { 
    link: "https://www.instagram.com/juansrangel89/", 
    IconComponent: FaInstagram, 
    color: "#C13584",
    label: "Instagram"
  },
  { 
    link: "https://www.facebook.com/juanangel89?mibextid=ZbWKwL", 
    IconComponent: FaFacebook, 
    color: "#1877F2",
    label: "Facebook"
  }
];

export const Footer = () => {
  return (
    <footer className="footer-bar"> 
      
      {/* 1. Contacto (Izquierda) */}
      <div className="footer-contact">
        <p>
          <span className="contact-label">Email:</span> 
          <a href="mailto:juansrangel89@gmail.com" aria-label="Enviar correo a juansrangel89@gmail.com">
            juansrangel89@gmail.com
          </a>
        </p>
        <p>
          <span className="contact-label">Phone:</span> 
          <a href="tel:+573186283663" aria-label="Llamar al 3186283663">
            +57 318 628 3663
          </a>
        </p>
      </div>
      
      {/* 2. Redes Sociales (Centro) */}
      <div className="footer-social-icons">
        <ul>
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index} className="social-icon-item"> 
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visitar mi perfil de ${item.label}`}
                style={{ '--social-color': item.color }} 
              >
                <item.IconComponent size={28} className="social-icon"/>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Copyright (Derecha) */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Juan S. Restrepo. Todos los derechos reservados.</p>
      </div>
      
    </footer>
  );
};