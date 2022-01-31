import React from 'react'
import { Container } from 'react-bootstrap'

import HeaderNavMenu from '~components/HeaderNavMenu'

import * as style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <Container className={style.header}>
        <HeaderNavMenu className={style.navMenu} />
      </Container>
    </header>
  )
}

export default Header
