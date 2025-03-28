import React from 'react'

type PropsType = {
  name: string,
  placeholder: string,
  value: string,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputBox = ({name, placeholder, value, handleInputChange}: PropsType) => {
  return (
    <input
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handleInputChange}
    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
/>
  )
}

export default InputBox
