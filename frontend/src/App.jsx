import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  
  return (
    <>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
