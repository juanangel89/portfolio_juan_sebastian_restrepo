import { Project } from "../../UI/Project/Project"

import './Projects.css'

export const Projects = () => {
  return (
    <section className="projects">
      <Project classPro='render' name='vino' tittle='Reder wine shop' link=''/>
      <Project classPro='program' name='juanshop' tittle='Page Juan Shop API' link='https://shop-api-iota.vercel.app/index.html'/>
      <Project classPro='program' name='atlas' tittle='Page Atlas' link='https://proyecto-atlas-ashy.vercel.app/'/>
      <Project classPro='program' name='edtravel' tittle='Page Ed-Travel' link='https://ediwn-entregable-kfnmqn1p2-juanangels-projects.vercel.app/'/>
  </section>
  )
}
