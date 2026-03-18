import React from 'react'

const steps = [
  {
    title: "1. Generate with Prompt",
    description: "Describe the vibe or use-case for your palette. Our smart generation logic creates a balanced 5-color palette based on your description keywords or hexadecimal inputs.",
    icon: "🪄"
  },
  {
    title: "2. Live UI Injection",
    description: "Instantly preview your colors on a realistic dashboard mockup. See how your primary and background colors interact on buttons, cards, and navigation elements.",
    icon: "🖥️"
  },
  {
    title: "3. Accessibility Scoring",
    description: "Every color is automatically tested for contrast ratios. We show clear AA/AAA audit badges so you can ensure your design is inclusive and readable by everyone.",
    icon: "♿"
  },
  {
    title: "4. Shade Exploration",
    description: "Need more depth? Use the 'Color Shades' tool in the sidebar to generate a full range of tints and shades (from 10% to 100%) for any specific base color.",
    icon: "🎭"
  },
  {
    title: "5. One-Click Copy",
    description: "Click any color swatch to copy its HEX code instantly. All values are formatted and ready to be pasted directly into your design tools like Figma or VS Code.",
    icon: "📋"
  }
]

export default function HowToUse() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <header className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter mb-4 text-[#2d3436]">How to Use Colors</h2>
        <p className="text-black/60 text-lg max-w-2xl mx-auto font-medium">Follow these simple steps to master the palette generation workflow and build professional color systems from scratch.</p>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div 
            key={i}
            className="flex flex-col p-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl shadow-black/5 hover:scale-[1.02] transition-transform duration-300 border border-white/40"
          >
            <div className="text-4xl mb-6 bg-stone-100 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
              {step.icon}
            </div>
            <h3 className="text-xl font-black mb-3 text-stone-900">{step.title}</h3>
            <p className="text-stone-500 leading-relaxed text-sm font-medium">
              {step.description}
            </p>
          </div>
        ))}
        
        {/* Support Card */}
        <div className="flex flex-col p-10 bg-[var(--color-primary)] rounded-3xl shadow-xl shadow-black/20 text-white md:col-span-2 lg:col-span-1">
          <div className="text-4xl mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
            🚀
          </div>
          <h3 className="text-xl font-bold mb-3">Ready to start?</h3>
          <p className="text-white/60 leading-relaxed text-sm mb-8 font-medium">
            Master the art of color design with our AI-assisted tool. Start exploring now!
          </p>
          <a 
            href="/" 
            className="mt-auto px-6 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-stone-50 transition-colors"
          >
            Generate Colors
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t border-black/5 text-center text-xs text-black/40 font-black uppercase tracking-widest">
        Official Documentation • Color Palette Generator
      </footer>
    </div>
  )
}
