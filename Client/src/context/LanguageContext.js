import React, { createContext, useState } from 'react'


export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
    const localStorage =JSON.parse(window.localStorage.getItem("language"))
    const [language, setLanguage] = useState(localStorage)
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
