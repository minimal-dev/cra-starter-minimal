import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import classNames from 'classnames'

import { TOP_NAV_ITEMS } from './constants'
import * as style from './HeaderNavMenu.module.scss'

const HeaderNavMenu = (props) => {
  const { className, ...rest } = props

  return (
    <Nav
      defaultActiveKey={TOP_NAV_ITEMS[0].href}
      variant="white"
      className={classNames(style.headerNavMenu, className)}
      {...rest}
    >
      {TOP_NAV_ITEMS.map(({ text, href }) => (
        <Nav.Link
          key={text}
          eventKey={href}
          to={href}
          as={Link}
          className={style.navLink}
        >
          {text}
        </Nav.Link>
      ))}
    </Nav>
  )
}

HeaderNavMenu.defaultProps = {
  className: '',
}

HeaderNavMenu.propTypes = {
  className: PropTypes.string,
}

export default HeaderNavMenu
