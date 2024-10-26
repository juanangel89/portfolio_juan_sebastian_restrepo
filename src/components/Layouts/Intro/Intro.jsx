//rafc
import { Photo } from "../../UI/Photo/Photo"
import './Intro.css'

export const Intro = () => {
  return (
    <>
    <section className="intro">
      <section className="perfil">
        <Photo/>
        <h1>Welcome! <br/>Hi, my name is Juan Sebastian Restrepo Angel and this is my portfolio</h1>
      </section>
      <section className="about">
        <p>
          Hi, in this page you found about me and another things I do,
          enjoy and if you want to ask me something, go a head. <br />
          Also you will learn about advertising, programming and design.
          I’m from Colombia, I studied advertising and architecture draw, I
          like the art, architecture, culture, philosophy, science and other
          topics. I want to study a lot I don’t want to stop.
        </p>
      </section>
    </section>
    </>
  )
}
