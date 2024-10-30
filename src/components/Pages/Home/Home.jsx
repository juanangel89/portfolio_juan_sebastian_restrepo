//rafc
import { Header } from "../../Layouts/Header/Header"
import { Intro } from "../../Layouts/Intro/Intro"
import {Projects} from "../../Layouts/Projects/Projects"
import { Footer } from "../../Layouts/Footer/Footer.jsx"
import { Background } from "../../UI/Background/Background.jsx"
import { ContactMe } from "../ContactMe/ContactMe.jsx"
import { MySkills } from "../MySkills/MySkills.jsx"
export const Home = () => {
  return (
    <>
        <Background>
        <Header />
        <Intro />
        <Projects/>
        <MySkills/>
        <ContactMe/>
        <Footer />
        </Background>

    </>

  )
}
