import skills from '../../../assets/skills.png';
import { Background } from '../../UI/Background/Background';
import { Header } from '../../Layouts/Header/Header';
import { Footer } from '../../Layouts/Footer/Footer';
import './MySkills.css'

export const MySkills = () => {
  return (
    <Background>
      <Header/>
        <section className="boxSkills">
          <section className="Skills">
            <img src={skills} alt="skills" />
          </section>
        </section>
      <Footer/>
    </Background>
  )
}
