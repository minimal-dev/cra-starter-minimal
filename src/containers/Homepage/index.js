import React from 'react'
import { Container } from 'react-bootstrap'

import Icon from '~components/Icon'
import * as style from './Homepage.module.scss'

const Homepage = () => {
  return (
    <Container className={style.container}>
      <div>Hello World!</div>
      <Icon name="icon-telegram" size={64} />
    </Container>
  )
}

export default Homepage
