import React from 'react'

type PropsType = {
  label : string,
  value: string
}

const PersonalInfoText = ({label, value} : PropsType) => {
  return (
    <div className="break-words whitespace-normal">
  <h3 className='mb-1 text-2xl font-medium text-light_gray'>{label}</h3>
  <p className='text-2xl font-medium text-pretty'>{value}</p>
</div>
  )
}

export default PersonalInfoText
