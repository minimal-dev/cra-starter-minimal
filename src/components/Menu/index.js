import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import cn from 'classnames'

import MENU from './constants'

const Menu = ({ variant }) => {
  return (
    <Nav className={cn({ [`nav--${variant}`]: variant })} as="ul">
      {MENU.map(({ name, link }) => (
        <Nav.Item as="li" key={name}>
          <Nav.Link href={`/${link}`}>{name}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}

Menu.defaultProps = {
  variant: '',
}

Menu.propTypes = {
  variant: PropTypes.string,
}

export default Menu
