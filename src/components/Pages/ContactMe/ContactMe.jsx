import './ContactMe.css'

export const ContactMe = () => {
  return (
    <>
    <section className="boxContact">
      <section className="contact">
        <div className="formulario">
            <h2>Contact me</h2>
            <form id="frm-email">
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
    </>
    
  )
}
