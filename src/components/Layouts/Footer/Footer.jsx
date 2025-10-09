import { Social } from "../../UI/Social/Social";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <p className="foot">
          Email: juansrangel89@gmail.com <br />
          {/* Program: ADSO 2878263 <br /> */}
          Cell phone number: 3186283663
        </p>
      </section>
      <section className="social">
        <ul>
          <Social
            link="https://www.linkedin.com/in/juan-sebastian-restrepo-angel/"
            icon="bx bxl-linkedin-square"/>
          <Social
            link="https://wa.me/3186283663"
            icon="bx bxl-whatsapp"/>
          <Social
            link="https://www.instagram.com/juansrangel89/"
            icon="bx bxl-instagram-alt"/>
          <Social
            link="https://www.facebook.com/juanangel89?mibextid=ZbWKwL"
            icon="bx bxl-facebook-square"/>
        </ul>
      </section>
    </footer>
  );
};
