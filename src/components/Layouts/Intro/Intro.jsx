//rafc
import { LogoExperience } from "../../UI/LogoExperience/LogoExperience"
import { Photo } from "../../UI/Photo/Photo"
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
            I have experience in advertising, programming and process automation. <br />
            I'm from Colombia and studied advertising and programming. 
            I enjoy art, architecture, culture, technology, science, and other subjects. 
            I want to study hard and I don't want to stop.
          </p>
        </section>
        <br />
        <br />
        <section className="experiencie">
          <div className="tittle-exp">
            <h2>Experience</h2>
          </div>
          <section className="list-exp">
            <div className="exp-card">
              <h3>IBG<br /> Ivan Botero Gomez</h3>
              <LogoExperience logolink={'ibg'} name={'ibg'} />
            </div>
            <div className="exp-card">
              <h3>CalculEtric<br /> Application</h3>
              <LogoExperience logolink={'calculetric'} name={'calculetric'} />
            </div>
            <div className="exp-card">
              <h3>Biotic<br /> environmental services</h3>
              <LogoExperience logolink={'biotic'} name={'biotic'} />
            </div>
            <div className="exp-card">
              <h3>Alberto<br /> Engineering</h3>
              <LogoExperience logolink={'alberto'} name={'alberto'} />
            </div>

          </section>
        </section>
      </section>
    </>
  )
}
