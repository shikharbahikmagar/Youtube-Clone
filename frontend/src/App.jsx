import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"

import { MenuStateProvider } from "./contexts/navMenu"
import { useState } from "react"
import Feed from "./components/Sidebar/Sidebar"


function App() {
  const [menuState, setMenuState] = useState(false);

  const openState = () => {
    setMenuState(true);
  }

  const closeState = () => {
    setMenuState(false);
  }
  
  return (
    <MenuStateProvider value={{menuState, openState, closeState} }>
      <Header />
      <Feed />
      <Outlet />
      <Footer />
    </MenuStateProvider>
  )
}

export default App
