
import PropTypes from 'prop-types';
import edtravel from '../../../assets/edtravel.png';
import juanshop from '../../../assets/juanshop.png';
import vino from '../../../assets/vino.jpg';
import atlas from '../../../assets/atlas.png';
import calculetric from '../../../assets/calculetricpage.png';
import shop from '../../../assets/tienda.png';
import horas_extras from '../../../assets/horas_extras.png';
import petcare from '../../../assets/petcare.png';
import chat from '../../../assets/chat.png';
import biotic from '../../../assets/brandbiotic.png';
import educado from '../../../assets/brandeducado.png';
import './Project.css'


export const Project = ({classPro,name,tittle,link}) => {
     // Mapeo de nombres a imágenes
  const images = {
    edtravel: edtravel,
    juanshop: juanshop,
    vino: vino,
    atlas: atlas,
    calculetric: calculetric,
    tienda: shop,
    horas_extras: horas_extras,
    petcare: petcare,
    chat: chat,
    biotic: biotic,
    educado: educado,
  };
  // Selecciona la imagen en función del name, o usa una imagen por defecto si el name no coincide
  const imageSrc = images[name] || edtravel;

  return (
    <>
     <section className={classPro}>
    <p>{tittle}</p>
      <a href={link}
        ><img  src={imageSrc} alt={name} /></a>
  </section>
    </>
    
  )
}
// Validación de las props
Project.propTypes = {
    classPro: PropTypes.node, // 'node' es cualquier cosa que React puede renderizar
    name: PropTypes.node,
    tittle: PropTypes.node,
    link: PropTypes.node,
  };