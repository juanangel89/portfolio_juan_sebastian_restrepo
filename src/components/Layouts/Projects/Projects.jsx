import { Project } from "../../UI/Project/Project"
import  biotic  from "../../../assets/manualbiotic.pdf"
import  educado  from "../../../assets/manualeducado.pdf"

import './Projects.css'

export const Projects = () => {
  return (
    <section className="projects">
      <Project classPro='program' name='calculetric' tittle='App - CalculEtric' link='https://calculetric.vercel.app/'/>
      <Project classPro='program' name='biotic' tittle='Brand - Biotic' link={biotic}/>
      <Project classPro='program' name='educado' tittle='Brand - Educado' link={educado}/>
      <Project classPro='program' name='horas_extras' tittle='App - Horas extras' link='https://github.com/juanangel89/horas_extras/tree/main'/>
      <Project classPro='program' name='tienda' tittle='App - Market List' link='https://marke-list.vercel.app/'/>
      <Project classPro='program' name='petcare' tittle='Game - Pet care' link='https://tamagochi-gold.vercel.app/'/>
      <Project classPro='program' name='chat' tittle='Chat - Real time chat' link='https://realtime-temporal-chat.vercel.app/'/>
      <Project classPro='program' name='juanshop' tittle='API - Page Juan Shop' link='https://shop-api-iota.vercel.app/index.html'/>
      <Project classPro='program' name='atlas' tittle='Page - Atlas' link='https://proyecto-atlas-ashy.vercel.app/'/>
      <Project classPro='program' name='edtravel' tittle='Page - Ed-Travel' link='https://ediwn-entregable-kfnmqn1p2-juanangels-projects.vercel.app/'/>
      <Project classPro='render' name='vino' tittle='Render - wine shop' link=''/>
  </section>
  )
}
