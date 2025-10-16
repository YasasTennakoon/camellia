import { useState } from "react"

type LanguageSwitcherProps = {
    className?: string
}
const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const [lang, setLang] = useState('en')
    return (
        <label className={`relative inline-block ${className}`}>
            <span className="sr-only">Select language</span>
            <select
                value={lang}
                onChange={(e) => (setLang(e.target.value))}
                className="appearance-none rounded-md border bg-white/80 text-gray-800 text-xs md:text-sm pl-3 pr-8 py-1.5"
            >
                <option value="en">English</option>
                <option value="si">සිංහල</option>
                <option value="ta">தமிழ்</option>
            </select>

            <svg
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            >
                <path d="M5.25 7.5l4.5 4.5 4.5-4.5" />
            </svg>
        </label>
    )
}

export { LanguageSwitcher }