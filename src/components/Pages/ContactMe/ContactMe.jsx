import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { Background } from '../../UI/Background/Background'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react'; // Asegúrate de importar useEffect

import './ContactMe.css'

export const ContactMe = () => {

    useEffect(() => {
        // Configura el User ID aquí una sola vez
        emailjs.init('25IpPYD8l15Xx45uI'); 
    }, []);

    function enviarEmail(e){
        e.preventDefault();
        
        // Ahora solo necesitas 3 argumentos
        emailjs.sendForm('service_s9e6u0n', 'template_0z8kyfn', e.target)
            .then(res => {
                console.log("Email enviado:", res);
            }, (error) => {
                console.error("Error al enviar email:", error);
            });
    }
  return (
    <>
    {/* <Background> */}
    <Header/>
    <section className="boxContact">
      <section className="contact">
        <div className="formulario">
            <h2>Contact me</h2>
            <form id="frm-email" onSubmit={enviarEmail}>
                <div className="form-group">
                    <label htmlFor="nombre">Name:</label>
                <input type="text" id="username" name="username" required minLength="2" maxLength="50" pattern="[a-zA-Z\s]+" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Correo Electonico">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Message:</label>
                    <textarea id="msg" name="msg" required minLength="10" maxLength="500" placeholder="Write your message here..."></textarea>
                </div>
                <div className="button">
                    <input className="send" type="submit" value="Send"/>
                </div>
            </form>
        </div>
      </section>
    </section>
    <Footer/>
    {/* </Background> */}
    </>
    
  )
}
