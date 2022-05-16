import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as style from './SVGDefs.module.scss'

const SVGDefs = (props) => {
  const { className, ...rest } = props

  return (
    <svg
      {...rest}
      className={classNames(style.svgDefs, className)}
      aria-hidden="true"
      focusable="false"
      tabIndex={-1}
    >
      <symbol id="icon-logo" fill="none" viewBox="0 0 512 512">
        <path fill="#000" d="M0 0h512v512H0z" />
        <path
          d="M367.8 345.9V163c0-7.2 1-11.8 3.7-14.5 2.3-2.6 6.9-4 13.8-4h.7V142h-7.3c-3.3 0-6.6.3-10.5.3-4 .4-6.7.4-8 .4-3.3 0-7.2 0-11.9-.4-4.6 0-7.6-.3-8.6-.3l-81.3 192.6L171.2 142c-2 0-5.6.3-10.2.3h-21.6c-4.2 0-7.9-.3-10.5-.3h-5.6v2.6h2c9.2 0 16.5 5.7 21.8 16.6v161.5c0 27.8-10 41.7-29.4 41.7h-.7v2.6h7.3c1.3 0 5 0 10.5-.3 5.7-.4 10.3-.7 14.3-.7 3.6 0 8.2.3 13.8.7 5.7.3 9.3.3 11 .3h7.2v-2.6h-.3c-20.2 0-30-14-30-41.7V165.1L242.1 367h8c3 0 5.3-.3 7.2-.3 1.4 0 3.7.3 7 .3h8.6l-12.6-28 79.3-187.4v194.3c0 7.2-1.3 12.2-3.6 14.8-2.6 2.7-7.3 3.7-13.9 3.7h-.3v2.6h7.3c2.3 0 6.2 0 11.5-.3 5.3-.4 9.6-.7 13.2-.7 3.3 0 7.6.3 13 .7 5.2.3 9.2.3 11.8.3h7.3v-2.6h-.7c-6.9 0-11.5-1-13.8-3.7-2.7-2.6-3.7-7.6-3.7-14.8Z"
          fill="url(#a)"
        />
        <defs>
          <linearGradient
            id="a"
            x1="251.5"
            y1="142"
            x2="251.5"
            y2="367"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".1" stopColor="#0079FF" />
            <stop offset="1" stopColor="#FD0" />
          </linearGradient>
        </defs>
      </symbol>
    </svg>
  )
}

SVGDefs.defaultProps = {
  className: '',
}

SVGDefs.propTypes = {
  className: PropTypes.string,
}

export default SVGDefs
