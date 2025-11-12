
import PropTypes from 'prop-types';
import edtravel from '../../../assets/edtravel.png';
import juanshop from '../../../assets/juanshop.png';
import vino from '../../../assets/vino.jpg';
import atlas from '../../../assets/atlas.png';
import calculetric from '../../../assets/calculetricpage.png';
import shop from '../../../assets/tienda.png';
import horas_extras from '../../../assets/horas_extras.png';
import petcare from '../../../assets/petcare.png';
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
    petcare: petcare
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
    {/* <section className="render">
    <p>Reder wine shop</p>
    <img  src={vino} alt="vino" />
  </section>
  <section className="program">
    <p>Page Juan Shop API</p>
      <a href="https://shop-api-iota.vercel.app/index.html"
        ><img  src={juanshop} alt="juanshop" /></a>
  </section>
  <section className="program">
    <p>Page Atlas</p>
      <a href="https://proyecto-atlas-ashy.vercel.app/"
        ><img  src={atlas} alt="atlas" /></a>
  </section>
  <section className="program">
    <p>Page Ed-Travel</p>
    <a href="https://ediwn-entregable-kfnmqn1p2-juanangels-projects.vercel.app/"
    ><img  src={edtravel} alt="edtravel" /></a>
  </section> */}
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