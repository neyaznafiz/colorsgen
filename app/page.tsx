'use client'

import React, { useState, useEffect } from "react"
import Values from "values.js"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface PaletteColor {
  hex: string
  name: string
  isDark: boolean
  contrast: "AA" | "AAA" | "FAIL"
}

export default function AIColors() {
  const [prompt, setPrompt] = useState("")
  const [palette, setPalette] = useState<PaletteColor[]>([])
  const [baseColor, setBaseColor] = useState("#3b82f6")

  const calculateContrast = (rgb: [number, number, number]) => {
    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
    if (luminance > 0.5) return "AAA"
    if (luminance > 0.3) return "AA"
    return "FAIL"
  }

  const generatePalette = (colorHex: string) => {
    try {
      const v = new Values(colorHex)
      // We'll take a few shades to form a "palette"
      const colors = [
        v.tint(40),
        v.tint(20),
        v,
        v.shade(20),
        v.shade(40),
      ]

      const newPalette: PaletteColor[] = colors.map((c, i) => {
        const hex = c.hexString()
        const rgb = c.rgb
        const isDark = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) < 128
        return {
          hex,
          name: i === 2 ? 'Primary' : i < 2 ? `Tint ${2-i}` : `Shade ${i-2}`,
          isDark,
          contrast: calculateContrast(rgb)
        }
      })
      setPalette(newPalette)
      setBaseColor(colorHex)
    } catch (e) {
      toast.error("Invalid color or prompt format")
    }
  }

  // Initial palette
  useEffect(() => {
    generatePalette("#758566")
  }, [])

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple logic: if it starts with # use it, otherwise use a random hash of the prompt for a "seed"
    if (prompt.startsWith("#")) {
      generatePalette(prompt)
    } else {
      // Just demo: generate a color based on prompt length/characters
      const charAvg = prompt.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
      generatePalette(`hsl(${charAvg}, 70%, 50%)`)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Search Header */}
      <section className="bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
        <h2 className="text-2xl font-bold mb-2">Create yours colors with AI</h2>
        <p className="text-stone-500 mb-8">Describe the palette you want or enter a hex code to generate shades.</p>
        
        <form onSubmit={handleGenerate} className="flex flex-col lg:flex-row gap-4">
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. 'A professional blue brand palette' or '#6366f1'"
            className="flex-1 px-6 py-4 rounded-2xl bg-stone-50 border border-stone-100 focus:border-[var(--color-primary)] focus:bg-white outline-none transition-all text-stone-900"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
          >
            Generate Palette
          </button>
        </form>
      </section>

      {/* Main Content: Palette + Mockup Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        
        {/* Palette Display */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-bold text-lg">Palette Preview</h3>
            <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">5 Colors Generated</span>
          </div>
          
          <div className="space-y-3">
            {palette.map((color, i) => (
              <div 
                key={i}
                onClick={() => {
                  navigator.clipboard.writeText(color.hex)
                  toast.success(`Copied ${color.hex}`)
                }}
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer hover:shadow-md transition-all border border-transparent hover:border-stone-100"
              >
                <div 
                  className="w-16 h-16 rounded-xl shadow-inner shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1">
                  <p className="font-bold text-stone-900">{color.name}</p>
                  <p className="text-stone-400 text-sm font-mono tracking-tighter uppercase">{color.hex}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-lg text-[10px] font-black tracking-widest border
                    ${color.contrast === 'FAIL' ? 'text-red-500 border-red-100 bg-red-50' : 'text-green-600 border-green-100 bg-green-50'}
                  `}>
                    {color.contrast}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Mockup Preview */}
        <section className="space-y-6">
           <div className="flex items-center justify-between px-2">
            <h3 className="font-bold text-lg">Real-world Preview</h3>
            <span className="text-stone-400 text-xs font-bold tracking-widest uppercase">Live UI Injection</span>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 h-full min-h-[500px] max-h-[540px] flex flex-col perspective-1000 overflow-hidden">
            <div className="flex-1 bg-stone-50 rounded-2xl border border-stone-200 shadow-inner flex overflow-hidden scale-95 origin-top translate-y-4 transition-all">
              {/* Mini Sidebar */}
              <div className="w-16 h-full flex flex-col items-center py-6 gap-4 border-r border-stone-200" style={{ backgroundColor: palette[4]?.hex || '#000', opacity: 0.1 }} />
              
              {/* Mini Content */}
              <div className="flex-1 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 rounded-lg bg-stone-200" />
                  <div className="h-10 w-10 rounded-full" style={{ backgroundColor: palette[2]?.hex }} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-2xl p-4 space-y-2 border border-stone-200 bg-white shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-2">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: palette[2]?.hex }} />
                    </div>
                    <div className="h-3 w-1/2 bg-stone-100 rounded" />
                    <div className="h-6 w-3/4 bg-stone-200 rounded" />
                  </div>
                  <div className="h-24 rounded-2xl p-4 space-y-2 border border-stone-200 bg-white shadow-sm overflow-hidden relative">
                    <div className="h-3 w-1/2 bg-stone-100 rounded" />
                    <div className="h-6 w-3/4 bg-stone-200 rounded" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-full bg-stone-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-stone-200 rounded opacity-50" />
                </div>

                <div className="pt-4 space-y-4">
                  <button className="w-full py-4 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95" style={{ backgroundColor: palette[2]?.hex }}>
                    Primary Action
                  </button>
                  <button className="w-full py-4 border-2 font-bold rounded-xl transition-colors" style={{ borderColor: palette[2]?.hex, color: palette[2]?.hex }}>
                    Secondary button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ToastContainer position="bottom-right" hideProgressBar toastClassName="toast-custom shadow-xl border border-stone-100" />
    </div>
  )
}
