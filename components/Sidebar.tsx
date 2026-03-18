'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()

  const links = [
    { title: 'AI Palette', icon: '✨', path: '/' },
    { title: 'Color Shades', icon: '🎨', path: '/color-shades' },
    { title: 'How to use', icon: '📖', path: '/how-to-use' },
  ]

  return (
    <aside className="w-full md:w-64 md:fixed md:h-screen  backdrop-blur-xl border-r border-black/5 p-8 flex flex-col z-30">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 rounded-2xl bg-[#2d3436] flex items-center justify-center text-white font-black text-xs shadow-lg shadow-black/10">
          AC
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg leading-tight tracking-tight">Colors</span>
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">v2.0</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5">
        {links.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 font-bold
                ${isActive 
                  ? 'bg-[var(--color-secondary)] text-white shadow-xl shadow-black/10' 
                  : 'bg-white text-stone-500 hover:bg-[var(--color-secondary)] hover:text-white'}
              `}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-sm">{link.title}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-[var(--color-secondary)]">
        <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest px-2">
          Made by Ashcroft
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
