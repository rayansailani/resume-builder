"use client"

import { Inter } from '@next/font/google'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import './movingBorder.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-full m-auto max-w-[64rem] pt-[30px] gap-[20px] relative' >
      <div className="flex items-center justify-center">
        <p className='text-[64px] text-[#00494D] text-center'>diverésify </p>
        <Image src="/assets/diveresify.png" className='object-contain' width={100} height={100}/>
      </div>
      <div className="form-container flex-grow max-h-full overflow-y-scroll overflow-x-hidden p-5 bg-[#E3EBED] rounded-tr-[40px] rounded-tl-[40px]">
      </div>
      <div className='flex items-center justify-center absolute z-10 p-[20px] rounded-full bottom-[20px] 
          right-[-5%] bg-[#00494D] shadow-[10px_10px_10px_rgba(0,0,0,0.25)] transition-all duration-[700ms] hover:scale-[110%]'>
          <Icon icon="noto:magic-wand" height={60}/>
        </div>
    </div>
  )
}
