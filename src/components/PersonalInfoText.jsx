import React from 'react'

const PersonalInfoText = ({label, value}) => {
  return (
    <div className="">
        <h3 className='mb-1 text-2xl font-medium text-light_gray'>{label}</h3>
        <p className='text-2xl font-medium'>{value}</p>
  </div>
  )
}

export default PersonalInfoText
