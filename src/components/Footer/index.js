// noinspection JSUnresolvedVariable

import React from 'react'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'

import logo from '~img/Blockasset_Logo_ColorW.svg'
import Menu from '../Menu'
import Icon from '../Icon'
import Social from '../Social'
import { CONTACTS, LINKS } from './constants'
import * as style from './style.module.scss'

// eslint-disable-next-line react/prop-types
const Footer = ({ siteTitle }) => {
  const fullYear = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <Container className={classNames('text-syne-14', style.footerInner)}>
        <div className={style.footerTop}>
          <div className={style.footerBox}>
            <div>
              <img width="147" height="41" src={logo} alt={siteTitle} />
            </div>
            <p className={style.footerDescr}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>
            <Social variant="footer" />
          </div>
          <div className={style.navMenu}>
            <div className={style.footerBox}>
              <div
                className={classNames('text-syne-18-bold', style.footerTitle)}
              >
                Navigation
              </div>
              <Menu variant="footer" />
            </div>
          </div>
          <div className={style.footerBox}>
            <div className={classNames('text-syne-18-bold', style.footerTitle)}>
              Contact
            </div>
            <ul className={style.footerContacts}>
              {CONTACTS.map(({ pic, text, link }) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={pic}>
                  <a
                    className={style.footerContactsLink}
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                  >
                    <Icon name={pic} size={24} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
