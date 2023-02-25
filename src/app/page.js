"use client"

import { Inter } from '@next/font/google'
import './movingBorder.scss'
import Heading from './components/Heading'
import CreateButton from './components/CreateButton'
import FormComponent from './components/FormComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-full m-auto max-w-[64rem] pt-[30px] gap-[20px] relative'>
      <Heading />
      <FormComponent />
      <CreateButton />
    </div>
  )
}
