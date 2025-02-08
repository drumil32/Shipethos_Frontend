import React from 'react'

const Button = ({content , onClick , style}) => {
  return (
    <button className={`bg-[#2f8fc9] rounded-md w-fit font-bold p-2 text-white ${style}`} onClick={onClick}>{content}</button>
  )
}

export default Button