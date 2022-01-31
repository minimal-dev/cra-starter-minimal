import React from 'react'

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 351.6 406"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1="51.99"
      y1="79.19"
      x2="299.81"
      y2="327"
    >
      <stop offset=".09" stopColor="#21daba" />
      <stop offset=".85" stopColor="#8c52ff" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M252.8 247.45v-88.91l-77-44.45-77 44.45v88.91l77 44.46z"
    />
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1="51.45"
      y1="78.64"
      x2="432.65"
      y2="459.85"
    >
      <stop offset="0" stopColor="#21daba" />
      <stop offset=".72" stopColor="#695aff" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="m175.8 0-77 44.46v55.19l77-44.45 128 73.9v147.8l-128 73.9-128-73.9v-203L0 101.5v203L175.8 406l175.8-101.5v-203z"
    />
    <path
      opacity=".2"
      d="m175.8 291.91 77-44.46-77.24-44.8-76.76 44.8 77 44.46"
    />
    <path
      opacity=".2"
      d="m175.8 350.8-128-73.9L0 304.5l175.56 101.36L351.6 304.5l-47.8-27.6-128 73.9"
    />
    <path
      opacity=".05"
      d="M0 101.5v203l47.77-27.68V73.92zm175.8-46.3V0l-77 44.46v55.19m0 58.89v88.72l77-44.61v-88.56"
    />
  </svg>
)

export default Logo
