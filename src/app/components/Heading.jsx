import Image from 'next/image'
import React from 'react'

function Heading() {
  return (
    <div className="flex items-center justify-center">
      <p className='text-[64px] text-[#00494D] text-center tracking-widest'>Diverésify</p>
      <Image src="/assets/diveresify.png" className='object-contain' width={100} height={100}/>
    </div>
  )
}

export default Heading