import React from 'react'

const Button = ({ content, className, link, propLink}) => {
  return (
    <button className={`${className} rounded text-[18px] font-normal underline text-white bg-[#ED2A25] px-[1rem] py-[.5rem]`}>
       <a href={link} target={'_' + propLink}>{content}</a> 
    </button>
  )
}

export default Button
