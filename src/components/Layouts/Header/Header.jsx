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
          <Navbar link='../../Pages/Home/Home' text='Home'/>
          <Navbar link='../../Pages/MyProjects/MyProjects' text='My projects'/>
          <Navbar link='' text='My skills'/>
          <Navbar link='' text='Contact'/>
        </ul>
      </nav>
    </header>
  )
}


