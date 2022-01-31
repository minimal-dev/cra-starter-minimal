import React from 'react'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'

import { LINKS } from './constants'
import * as style from './style.module.scss'

const Footer = () => {
  const fullYear = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <Container className={classNames('text-syne-14', style.footerInner)}>
        <div className={style.footerBottom}>
          <p>
            &copy; {fullYear} Blockasset. <span>All rights reserved</span>
          </p>
          <ul className={style.footerNav}>
            {LINKS.map(({ name, link }) => (
              <li className={style.footerNavItem} key={name}>
                <a
                  className={style.footerNavLink}
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
