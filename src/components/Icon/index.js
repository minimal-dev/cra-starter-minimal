import React from 'react'
import PropTypes from 'prop-types'
import sprite from './icons.svg'

// eslint-disable-next-line no-shadow
const param = (param) => (typeof param === 'object' ? param : [param, param])

const Icon = React.forwardRef(
  ({ name, size, viewbox, isFromInlineDefs, ...rest }, ref) => {
    const sizes = param(size)
    const vbox = viewbox ? param(viewbox) : sizes
    return (
      <svg
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        width={sizes[0]}
        height={sizes[1]}
        viewBox={`0 0 ${vbox[0]} ${vbox[1]}`}
        ref={ref}
        fill="currentColor"
      >
        <use xlinkHref={`${isFromInlineDefs ? '' : sprite}#${name}`} />
      </svg>
    )
  }
)

Icon.defaultProps = {
  size: [24, 24],
  isFromInlineDefs: false,
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  // eslint-disable-next-line react/require-default-props
  viewbox: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  isFromInlineDefs: PropTypes.bool,
}

export default Icon
