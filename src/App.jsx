

import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Pages/Home/Home"
import { MySkills } from "./components/Pages/MySkills/MySkills"
import { MyProjects } from "./components/Pages/MyProjects/MyProjects"
import { ContactMe } from "./components/Pages/ContactMe/ContactMe"



export const App =() => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/MySkills' element={<MySkills/>} />
      <Route path='/MyProjects' element={<MyProjects/>} />
      <Route path='/ContactMe' element={<ContactMe/>} />
    </Routes>
      {/* <Home /> */}
      
    </>
  )
}


