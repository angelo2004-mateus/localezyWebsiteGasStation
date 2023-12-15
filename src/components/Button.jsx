import React from 'react'

const Button = ({ content, className, link, propLink}) => {
  return (
    <a href={link} target={'_' + propLink}>
    <button className={`${className} rounded text-[18px] font-normal underline  bg-[#ff150c] px-[1rem] py-[.5rem]`}>
      {content}
    </button>
    </a> 
  )
}

export default Button
