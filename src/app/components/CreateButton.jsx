import React from 'react'
import { Icon } from '@iconify/react'

function CreateButton() {
  return (
    <div className="buttonWrapper absolute z-10 bottom-[20px] right-[-5.5%]">
      <div className='createButton flex items-center justify-center p-[20px]
        rounded-full bg-[#00494D] hover:shadow-[10px_10px_10px_rgba(0,0,0,0.25)] 
        hover:bg-[#E3EBED] transition-all duration-[500ms] overflow-hidden'>
        <Icon icon="noto:magic-wand" height={60}/>
      </div>
    </div>
    
  )
}

export default CreateButton