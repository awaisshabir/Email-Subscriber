import React from 'react'

function Button(props) {
    let value = props.value;
  return (
    <button className='px-5 py-3 text-xs rounded-md text-zinc-800
            bg-[#DC9300] hover:bg-lime-700 hover:text-white duration-500'>
              {value}
            </button>
  )
}

export default Button