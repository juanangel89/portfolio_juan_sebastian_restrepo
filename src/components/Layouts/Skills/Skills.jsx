
import { FaStar, FaRegStar, FaJava, FaPhp, FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { TbBrandJavascript, TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { SiSpring, SiOdoo, SiAutocad, SiAutodeskrevit, SiAdobephotoshop, SiAdobeillustrator, SiMysql, SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import './Skills.css'

export const Skills = () => {
    return (
        <section className="list-skill">
            <fieldset className="group-tittle">
                <legend className="legend">Programming Language</legend>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <FaJava className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Java</h2>
                        <h3> <FaStar /><FaRegStar /><FaRegStar /></h3>
                        <h3>Backend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <FaPhp className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>PHP</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Backend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <FaPython className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Python</h2>
                        <h3> <FaStar /><FaRegStar /><FaRegStar /></h3>
                        <h3>Backend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <TbBrandJavascript className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>JavaScript</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Frontend</h3>
                    </div>
                </div>
            </fieldset>


            <fieldset className="group-tittle">
                <legend className="legend">frameworks and Libraries</legend>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiSpring className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Spring Boot</h2>
                        <h3> <FaStar /><FaRegStar /><FaRegStar /></h3>
                        <h3>Backend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <FaReact className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>React</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Frontend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiOdoo className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Odoo</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Backend</h3>
                    </div>
                </div>
            </fieldset>
                        <fieldset className="group-tittle">
                <legend className="legend">Database</legend>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiMysql className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>MySql</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>DB</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <FaDatabase className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Informix</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>DB</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiPostgresql className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Postgresql </h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>DB</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <DiMsqlServer className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>SqlServer </h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>DB</h3>
                    </div>
                </div>
            </fieldset>
            <fieldset className="group-tittle">
                <legend className="legend">Technology</legend>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <TbBrandCss3 className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>CSS</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Frontend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <TbBrandHtml5 className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>HTML</h2>
                        <h3> <FaStar /><FaStar /><FaStar /></h3>
                        <h3>Frontend</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiAutocad className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Autocad</h2>
                        <h3> <FaStar /><FaStar /><FaStar /></h3>
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiAutodeskrevit className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Revit</h2>
                        <h3> <FaStar /><FaRegStar /><FaRegStar /></h3>
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <h2 className="icon-skill">Dx</h2>
                    </div>
                    <div className="conainer-skill">
                        <h2>Dialux</h2>
                        <h3> <FaStar /><FaStar /><FaStar /></h3>
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiAdobephotoshop className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Photoshop</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="icon-skill-container">
                        <SiAdobeillustrator className="icon-skill" />
                    </div>
                    <div className="conainer-skill">
                        <h2>Illustrator</h2>
                        <h3> <FaStar /><FaStar /><FaRegStar /></h3>
                        <h3>Design</h3>
                    </div>
                </div>
            </fieldset>

        </section>

    )
}
