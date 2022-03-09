import React, { useState } from "react"
import Hamburger from "../Hamburger/Hamburger"
import { GlobalStyles, Primary } from "./Layout.styles"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleoverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleoverlayMenu={handleoverlayMenu} />
      <Primary>{children}</Primary>
    </>
  )
}

export default Layout
