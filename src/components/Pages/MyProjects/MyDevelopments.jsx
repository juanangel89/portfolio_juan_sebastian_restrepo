import { Header } from "../../Layouts/Header/Header";

import { Footer } from "../../Layouts/Footer/Footer.jsx";
import { Background } from "../../UI/Background/Background.jsx";
import { Projects } from "../../Layouts/Projects/Projects.jsx";

export const MyDevelopments = () => {
  return (
    <>
      {/* <Background> */}
        <Header />
          <Projects value={'developments'}/>
        <Footer />
      {/* </Background> */}
    </>
  );
};
