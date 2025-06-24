'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Brand = 'default' | 'dciel' | 'ciel' | 'faes'

interface ThemeContextType {
  theme: Theme
  brand: Brand
  setTheme: (theme: Theme) => void
  setBrand: (brand: Brand) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [brand, setBrand] = useState<Brand>('dciel')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedBrand = localStorage.getItem('brand') as Brand
    
    if (savedTheme) setTheme(savedTheme)
    if (savedBrand) setBrand(savedBrand)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    // Удаляем все классы тем
    root.classList.remove('dark', 'theme-dciel', 'theme-ciel', 'theme-faes')
    
    // Добавляем текущую тему
    if (theme === 'dark') {
      root.classList.add('dark')
    }
    
    // Добавляем текущий бренд
    if (brand !== 'default') {
      root.classList.add(`theme-${brand}`)
    }
    
    localStorage.setItem('theme', theme)
    localStorage.setItem('brand', brand)
  }, [theme, brand])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, brand, setTheme, setBrand, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 