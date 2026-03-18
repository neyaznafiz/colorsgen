'use client'

import React, { useState, FormEvent, useEffect } from "react"
import Values from "values.js"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SoloColor from "../../components/SoloColor"

interface ColorItem {
  rgb: [number, number, number]
  weight: number
}

export default function ColorShades() {
  const [color, setColor] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [ColorList, setColorList] = useState<ColorItem[]>([])

  useEffect(() => {
    try {
      const defaultColors = new Values("#667755").all(10)
      setColorList(defaultColors.map((c: any) => ({
        rgb: c.rgb,
        weight: c.weight
      })))
    } catch (e) {}
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setError(false)
      const colors = new Values(color).all(10)
      setColorList(colors.map((c: any) => ({
        rgb: c.rgb,
        weight: c.weight
      })))
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <section className="bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
        <h2 className="text-2xl font-bold mb-2">Color Generator</h2>
        <p className="text-stone-500 mb-8">Enter a hex code or name to generate a complete spectrum of tints and shades.</p>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
          <input 
            type="text" 
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#667755"
            className={`flex-1 px-6 py-4 rounded-2xl bg-stone-50 border transition-all text-stone-900 outline-none
              ${error ? 'border-red-500 focus:bg-red-50' : 'border-stone-100 focus:border-[var(--color-primary)] focus:bg-white'}
            `}
          />
          <button
            type="submit"
            className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-bold rounded-2xl transition-all shadow-lg active:scale-95"
          >
            Generate Spectrum
          </button>
        </form>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {ColorList.map((color, index) => (
          <SoloColor key={index} {...color} index={index} />
        ))}
      </section>

      <footer className="text-center text-black/40 text-xs font-black uppercase tracking-widest pt-10">
        Click a block to copy hex
      </footer>

      <ToastContainer position="bottom-right" hideProgressBar toastClassName="toast-custom shadow-xl border border-stone-100" />
    </div>
  )
}
