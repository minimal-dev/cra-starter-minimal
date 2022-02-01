import React from 'react'

import SEO from '~components/SEO'
import SVGSprite from './components/SVGSprite'

import * as style from './SVGPreview.module.scss'

/**
 * SVGPreview component
 */
const SVGPreview = () => {
  return (
    <div className={style.svgPreview}>
      <SEO title="SVG Preview" />
      <SVGSprite className={style.table} />
    </div>
  )
}

export default SVGPreview
