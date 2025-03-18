import React from 'react'

type PropsType = {
  message: string
}

const SuccessMessage = ({message}: PropsType) => {
  return (
   
        <div className="w-full py-4 rounded-md px-7 bg-alert_bg text-primary">
            <h2 className="text-[22px] font-medium">{message}</h2>
        </div>
   
  )
}

export default SuccessMessage
