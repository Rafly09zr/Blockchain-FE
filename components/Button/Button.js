// components/Button.js
import React from 'react'

export const Button = ({ children, variant, onClick, disabled = false }) => {
  let buttonClass =
    'bg-light-green-200 text-base text-neutral-700 px-[24px] py-[8px] rounded-[200px] focus:outline-none transition duration-300 hover:bg-light-green-300'

  // Mengatur kelas CSS sesuai dengan properti variant yang diterima
  if (variant === 'secondary') {
    buttonClass =
      'bg-neutral-300 text-base text-neutral-700 px-[24px] py-[8px] rounded-[200px] focus:outline-none transition duration-300 hover:bg-neutral-400'
  } else if (variant === 'tertiary') {
    buttonClass =
      'bg-red-200 text-base text-neutral-700 px-[24px] py-[8px] rounded-[200px] focus:outline-none transition duration-300 hover:bg-red-300'
  }
  if (disabled)
    buttonClass =
      'bg-neutral-200 text-base text-neutral-700 px-[24px] py-[8px] rounded-[200px] focus:outline-none transition duration-300 cursor-not-allowed '

  return (
    <button
      type="button"
      className={buttonClass}
      style={{ marginLeft: '16px' }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
