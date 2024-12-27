import { Box,  useColorModeValue} from "@chakra-ui/react"
import {Route, Routes } from "react-router-dom"

import Homepage from "./Pages/Homepage"
import Createpage from "./Pages/Createpage.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {

  return (
    <Box minH={"100vh"}bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/Create" element={<Createpage/>}></Route>
      </Routes>
    </Box>
    )
}

export default App