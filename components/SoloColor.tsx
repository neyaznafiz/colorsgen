'use client'

import React, { useState, useEffect } from "react"
import { toast } from "react-toastify"
import HexFromRgb from "./utility"

interface SoloColorProps {
  index: number
  rgb: [number, number, number]
  weight: number
}

const SoloColor: React.FC<SoloColorProps> = ({ index, rgb, weight }) => {
  const [alert, setAlert] = useState<boolean>(false)
  const hex = HexFromRgb(...rgb).toUpperCase()
  const isDark = (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) < 128

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [alert])

  const handleClick = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
    toast.success(`Copied ${hex}`)
  }

  return (
    <article
      onClick={handleClick}
      className={`relative h-32 md:h-40 cursor-pointer overflow-hidden rounded-2xl flex items-center justify-center group transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:z-10 shadow-lg shadow-black/5
        ${isDark ? 'text-white/80 hover:text-white' : 'text-black/60 hover:text-black'}
      `}
      style={{ backgroundColor: `rgb(${rgb.join(",")})` }}
    >
      <div className="flex flex-col items-center justify-center p-4 transition-transform group-hover:scale-110">
        <span className="text-[10px] uppercase font-bold tracking-widest leading-none opacity-50 mb-1">{weight}%</span>
        <span className="text-sm font-black tracking-tight">{hex}</span>
      </div>
      
      {/* Subtle overlay for better visual division */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </article>
  )
}

export default SoloColor
