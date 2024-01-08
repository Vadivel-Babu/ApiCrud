import {Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Create from "./components/Create"
import Users from "./components/Users"
import Singleuser from "./components/Singleuser"
import Edit from "./components/Edit"


function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/:id" element={<Singleuser/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
     </Routes>  
    </>
  )
}

export default App
