import React from 'react'
import { Input } from "@material-tailwind/react";
import { Icon } from '@iconify/react';

function FormComponent() {
  return (
    <div className="form-container flex-grow overflow-y-scroll overflow-x-hidden 
      bg-[#E3EBED] rounded-tr-[40px] rounded-tl-[40px] pl-[75px] pr-[60px] py-[100px]">
        <div className='flex'>
          <div className='w-[25%] py-[20px] border-r-[2px] border-[#00494D]'>
            <p className='font-[500] text-[#5e7a7d] text-[24px] uppercase'>About me</p>
          </div>
          <div className='flex flex-col gap-[30px] w-[75%] py-[20px] px-[50px] pl-[70px]'>
            <Input variant="standard" label="Name" />
            <Input variant="standard" label="Phone number" />
            <Input variant="standard" label="Email address" />
            <div className='flex flex-row items-center gap-[30px]'>
              <Input color='red-[#900]' variant="standard" label="Link 1" />
              <div className='bg-[#00494D] hover:bg-[#c5e4e7] hover:text-[black] rounded-[999px] p-[2px]
                flex items-center justify-center transition-all duration-[200ms]'>
                <Icon className="text-white hover:text-[#00494D] mx-[8px]  transition-all duration-[200ms]" icon="material-symbols:add" height={25}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FormComponent