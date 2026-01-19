import { Project } from "../../UI/Project/Project"
import biotic from "../../../assets/manualbiotic.pdf"
import educado from "../../../assets/manualeducado.pdf"
import vino from '../../../assets/vino.jpg';

import './Projects.css'

export const Projects = ({ value }) => {
const descriptionProjects = {
  chocobone: "Brand creation and website development. \n\nWordPress \nPhotoshop \nIllustrator",
  biotic: "Brand creation, corporate identity, service portfolio development, and niche market research.\n\n Illustrator \nPhotoshop",
  educado: "Brand creation for educational games, corporate identity, and its application across different topics. \n\n Illustrator \nPhotoshop",
  vino: 'Creation of a render for wine shop ambiance.\n\n 3Ds Max',
  calculetric: "Development of an application for electrical engineering projects, including user login, project creation, calculations, and project data storage. \n\nReact - Vercel \nSpring Boot - Railway \nMySQL",
  horas_extras: "Application that calculates an employee’s overtime hours for a week based on total hours worked.\n\nPython",
  tienda: "Development of an application that allows users to create a grocery list based on a budget, with user login\n\nReact -Vercel \nFirebase",
  petcare: "Pet care video game. \n\nReact – Vercel",
  chat: "Real-time chat application. \n\n Express js - Railway \n Next js - Vercel \nTailwind \nSocket.io",
  juanshop: "Application that consumes an API. \n\nJavaScript - Vercel \nHTML \nCSS",
  atlas: "Website creation.  \n\nJavaScript - Vercel \nHTML \nCSS",
  edtravel: "Website creation.  \n\nJavaScript - Vercel \nHTML \nCSS",
};

  return (
    <section className="projects">

      {/* Si value es 'design', muestra este div */}
      {value === 'design' && (
        <>
          <Project classPro='program' name='chocobone' tittle='Brand and Page - Choco Bone' description={descriptionProjects.chocobone} link={'https://chocobonechocolate.free.nf/'} />
          <Project classPro='program' name='biotic' tittle='Brand - Biotic' description={descriptionProjects.biotic} link={biotic} />
          <Project classPro='program' name='educado'  description={descriptionProjects.educado} tittle='Brand - Educado' link={educado} />
          <Project classPro='render' name='vino'  description={descriptionProjects.vino} tittle='Render - wine shop' link={vino} />
        </>
      )}

      {/* Si value es 'software', muestra este div */}
      {value === 'developments' && (
        <>
          <Project classPro='program' name='calculetric'  description={descriptionProjects.calculetric} tittle='App - CalculEtric' link='https://calculetric.vercel.app/' />
          <Project classPro='program' name='horas_extras'  description={descriptionProjects.horas_extras} tittle='App - Horas extras' link='https://github.com/juanangel89/horas_extras/tree/main' />
          <Project classPro='program' name='tienda'  description={descriptionProjects.tienda} tittle='App - Market List' link='https://marke-list.vercel.app/' />
          <Project classPro='program' name='petcare'  description={descriptionProjects.petcare} tittle='Game - Pet care' link='https://tamagochi-gold.vercel.app/' />
          <Project classPro='program' name='chat'  description={descriptionProjects.chat} tittle='Chat - Real time chat' link='https://realtime-temporal-chat.vercel.app/' />
          <Project classPro='program' name='chocobone'  description={descriptionProjects.chocobone} tittle='Brand and Page - Choco Bone' link={'https://chocobonechocolate.free.nf/'} />
          <Project classPro='program' name='juanshop'  description={descriptionProjects.juanshop} tittle='API - Page Juan Shop' link='https://shop-api-iota.vercel.app/index.html' />
          <Project classPro='program' name='atlas'  description={descriptionProjects.atlas} tittle='Page - Atlas' link='https://proyecto-atlas-ashy.vercel.app/' />
          <Project classPro='program' name='edtravel'  description={descriptionProjects.edtravel} tittle='Page - Ed-Travel' link='https://ediwn-entregable-kfnmqn1p2-juanangels-projects.vercel.app/' />
        </>
      )}

    </section>
  )
}

