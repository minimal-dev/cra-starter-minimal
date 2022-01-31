import React from 'react'
import classNames from 'classnames'

import Logo from './Logo'
import * as style from './LogoWithCircleBackground.module.scss'

// eslint-disable-next-line react/prop-types
const LogoWithCircleBackground = ({ width, height, className, ...rest }) => (
  <div
    className={classNames(style.circleBg, className)}
    {...rest}
    style={{ width, height }}
  >
    <Logo width="54%" />
  </div>
)

export default LogoWithCircleBackground
