import React from "react"
import { HambugerButton } from "./Hamburger.styles"
import HamburgerIcon from "../../images/menu-icon.svg"

const Hamburger = ({ handleoverlayMenu }) => {
  return (
    <HambugerButton onclick={handleoverlayMenu}>
      <img src={HamburgerIcon} alt="menu-hamburger" />
    </HambugerButton>
  )
}

export default Hamburger
