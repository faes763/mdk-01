'use client'

import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, brand, setBrand, toggleTheme } = useTheme()

  const brands = [
    { value: 'dciel' as const, label: 'DCIEL', description: 'Deep Blue Electric' },
    { value: 'ciel' as const, label: 'CIEL', description: 'Sky Blue Light' },
    { value: 'faes' as const, label: 'FAES', description: 'Mystical Purple' },
  ]

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-20 h-10 px-3 py-2 bg-background border border-input rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium transition-colors"
      >
        {theme === 'light' ? '🌙' : '☀️'} {theme}
      </button>

      {/* Brand Selector */}
      <div className="w-48 rounded-lg border bg-card text-card-foreground shadow-sm p-3">
        <div className="text-xs font-medium mb-2 text-muted-foreground">Бренд</div>
        <div className="grid gap-1">
          {brands.map((brandOption) => (
            <button
              key={brandOption.value}
              onClick={() => setBrand(brandOption.value)}
              className={`w-full text-left px-3 py-2 rounded-md text-xs h-12 transition-colors ${
                brand === brandOption.value 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <div className="flex flex-col">
                <div className="font-medium">{brandOption.label}</div>
                <div className="opacity-70">{brandOption.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 