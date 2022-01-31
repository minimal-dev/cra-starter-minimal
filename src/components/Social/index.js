import React from 'react'
import cn from 'classnames'

import Icon from '~components/Icon'

import SOCIAL_LINKS from './constants'
import * as s from './style.module.scss'

// eslint-disable-next-line react/prop-types
const Social = ({ variant }) => {
  return (
    <ul className={cn(s.social, { [s[variant]]: variant })}>
      {SOCIAL_LINKS.map(({ name, link }) => (
        <li key={name}>
          <a href={link} target="_blank" rel="noreferrer">
            <Icon name={name} size={24} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
