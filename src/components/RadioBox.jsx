import React from 'react'

const RadioBox = ({checked, handleInputChange, name, value, title}) => {
  return (
    <label className="flex items-center p-4 border border-gray-200 cursor-pointer">
    <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleInputChange}
        className="w-4 h-4 text-green-500 focus:ring-green-500"
    />
    <span className="ml-2">{title}</span>
</label>
  )
}

export default RadioBox
