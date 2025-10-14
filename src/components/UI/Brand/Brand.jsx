import brand from '../../../assets/brand.png';
import { Link } from 'react-router-dom';
import './Brand.css'

export const Brand = ({link}) => {
  return (
    <Link to={link} className="brand">
      <img src={brand} alt="marca" />
    </Link>
  )
}
