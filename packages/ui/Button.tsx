'use client'

import * as React from 'react'

export const Button = () => {
  return (
    <button
      className='bg-gray-800 text-gray-100 px-2 transition hover:bg-gray-700'
      onClick={() => alert('mandarino')}
    >
      Learn
    </button>
  )
}
