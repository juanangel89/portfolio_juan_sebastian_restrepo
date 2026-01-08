//rafc
import { LogoExperience } from "../../UI/LogoExperience/LogoExperience"
import { Photo } from "../../UI/Photo/Photo"
import { Skills } from '../Skills/Skills.jsx'
import './Intro.css'


export const Intro = () => {
  return (
    <>
      <section className="intro">
        <section className="perfil">
          <Photo />

          <h1><i className='bx bx-code-alt'></i> Programmer <br /><br /><i className='bx bxs-megaphone'></i> Publicist<br /><br /> Welcome! <br /><br />Hi, my name is Juan Sebastian Restrepo Angel and this is my portfolio</h1>
        </section>
        <section className="about">
          <p>
I have experience in advertising, programming, and process automation. I am from Colombia, with academic training in both advertising and software development. I am passionate about art, architecture, culture, technology, and science—fields that strongly influence my creative and technical work. I believe in lifelong learning and I am constantly studying, experimenting, and improving my skills.
          </p>
        </section>
        <br />
        <br />
        <section className="experiencie">
          <div className="tittle-exp">
            <h2>Experience</h2>
          </div>
          <section className="list-exp">
            <LogoExperience logolink={'ibg'} name={'ibg'}>
              <h3>IBG<br /> Ivan Botero Gomez</h3>
            </LogoExperience>
            <LogoExperience logolink={'calculetric'} name={'calculetric'}>
              <h3>CalculEtric<br /> Application</h3>
            </LogoExperience>
            <LogoExperience logolink={'biotic'} name={'biotic'}>
              <h3>Biotic<br /> environmental services</h3>
            </LogoExperience>
            <LogoExperience logolink={'alberto'} name={'alberto'}>
              <h3>Alberto<br /> Engineering</h3>
            </LogoExperience>
          </section>
        </section>
        <section className="skills">
          <div className="tittle-skill">
            <h2>Skills</h2>
          </div>
          <Skills />
        </section>
      </section>
    </>
  )
}
