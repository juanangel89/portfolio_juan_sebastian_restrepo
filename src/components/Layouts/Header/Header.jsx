//rafc
import { Navbar } from '../../UI/Navbar/Navbar'
import { Brand } from '../../UI/Brand/Brand'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <Brand/>
      <nav className="navbar">
        <ul className="navbar-list">
          <Navbar link='/' text='Home'/>
          <Navbar link='/MyProjects' text='Projects'/>
          <Navbar link='/MySkills' text='Skills'/>
          <Navbar link='/ContactMe' text='Contact'/>
        </ul>
      </nav>
    </header>
  )
}


