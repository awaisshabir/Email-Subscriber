import React from 'react'

function Input(props) {
    let placeholder = props.placeholder;
    let type=props.type;
  return (
    <input type={type} placeholder={placeholder}
    className='p-2 px-4 text-center text-white bg-zinc-800 border
     border-zinc-600 placeholder:text-center 
     placeholder:text-xs md:text-left placeholder:md:text-left focus:outline-none'
    />
  )
}

export default Input