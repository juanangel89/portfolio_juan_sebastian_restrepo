

import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./components/Pages/Home/Home"
import { MySkills } from "./components/Pages/MySkills/MySkills"
import { MyProjects } from "./components/Pages/MyProjects/MyProjects"
import { ContactMe } from "./components/Pages/ContactMe/ContactMe"
import { AnimatePresence } from 'framer-motion';
import { AnimatedPage } from './components/AnimatedPage';
import { Background } from './components/UI/Background/Background';
import {MyDevelopments} from "./components/Pages/MyProjects/MyDevelopments"
import {MyDesigns} from "./components/Pages/MyProjects/MyDesigns"


export const App = () => {

  const location = useLocation();
  return (
    <>
      <Background/>
        <AnimatePresence mode="wait"> {/* <-- Lo más importante para las transiciones */}
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            {/* <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} /> */}
            {/* <Route path="/MyProjects" element={<AnimatedPage><MyProjects /></AnimatedPage>} /> */}
            <Route path="/MyDevelopments" element={<AnimatedPage><MyDevelopments /></AnimatedPage>} />
            <Route path="/MyDesigns" element={<AnimatedPage><MyDesigns /></AnimatedPage>} />
            {/* <Route path="/MySkills" element={<AnimatedPage><MySkills /></AnimatedPage>} /> */}
            <Route path="/ContactMe" element={<AnimatedPage><ContactMe /></AnimatedPage>} />
            {/* ... otras rutas */}

          </Routes>
        </AnimatePresence>

      {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/MySkills' element={<MySkills/>} />
      <Route path='/MyProjects' element={<MyProjects/>} />
      <Route path='/ContactMe' element={<ContactMe/>} />
    </Routes> */}
      {/* <Home /> */}

    </>
  )
}


