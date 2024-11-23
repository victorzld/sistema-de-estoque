'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, CloudRain } from 'lucide-react'

export default function ThemeToggle() {

    const [darkMode, setDarkMode] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setDarkMode(true), [])

    if (!darkMode) return (
        <CloudRain className="text-zinc-600 dark:text-slate-200/80 duration-300" />
    )

    if (resolvedTheme === 'dark') {
        return <Sun
            onClick={() => setTheme('light')}
            className="text-zinc-600 dark:text-slate-200/80 dark:hover:text-slate-100/80 hover:text-zinc-800 hover:scale-105 duration-300 cursor-pointer"
            size={20}
        />
    }

    if (resolvedTheme === 'light') {
        return <Moon
            className="text-zinc-600 dark:text-slate-200/80 dark:hover:text-slate-100/80 hover:text-zinc-800 hover:scale-105 duration-300 cursor-pointer"
            onClick={() => setTheme('dark')}
            size={20}
        />
    }
}