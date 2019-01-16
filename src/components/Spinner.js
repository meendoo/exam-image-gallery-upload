// Spinner taken from - https://loading.io/css/
import React from 'react'
import './spinner.scss'

export default function Spinner() {
  return (
    <div className="spinner-wrapper">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}