import React from 'react'
import { Icon } from '@iconify/react'

function CreateButton() {
  return (
    <div className='flex items-center justify-center absolute z-10 p-[20px]
        rounded-full bottom-[20px] right-[-5%] bg-[#00494D] shadow-[10px_10px_10px_rgba(0,0,0,0.25)] 
        transition-all duration-[700ms] hover:scale-[110%] border-2 border-[#26c0ab]'>
      <Icon icon="noto:magic-wand" height={60}/>
    </div>
  )
}

export default CreateButton