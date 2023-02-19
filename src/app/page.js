"use client"

import { Inter } from '@next/font/google'
import { Input } from '@material-tailwind/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-72">
      <Input label="Username" />
    </div>
  )
}
