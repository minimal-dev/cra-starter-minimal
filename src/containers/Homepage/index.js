import React from 'react'
import { Container } from 'react-bootstrap'

import * as style from './Homepage.module.scss'

const Homepage = () => {
  return (
    <div className={style.pageWrapper}>
      <Container>Hello World!</Container>
    </div>
  )
}

export default Homepage
