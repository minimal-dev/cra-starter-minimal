import React from 'react'
import PropTypes from 'prop-types'

import Header from '~components/Header'
import Footer from '~components/Footer'

import * as style from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
