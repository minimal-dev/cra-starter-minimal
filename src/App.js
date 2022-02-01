import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import './styles/app.scss'

import RouteURL from '~routes'
import Homepage from '~containers/Homepage'
import SVGPreview from '~containers/SVGPreview'

import Layout from './components/Layout'

const App = () => {
  const { pathname } = useLocation()

  // Restore scroll on location change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Layout>
      <Routes>
        <Route path={RouteURL.HOMEPAGE} element={<Homepage />} />
        {process.env.REACT_APP_VERCEL_ENV !== 'production' && (
          <Route path="/___svg" element={<SVGPreview />} />
        )}
        {/* Fallback for non-existent routes */}
        <Route path="*" element={<Navigate to={RouteURL.HOMEPAGE} replace />} />
      </Routes>
    </Layout>
  )
}

export default App
