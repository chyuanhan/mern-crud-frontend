import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'
import './MainNavigation.css'

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawerHandler = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to='/'>Odiya</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation