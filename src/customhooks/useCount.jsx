import React, { useState } from 'react'

export default function useCount(key,colorTheme) {

    let [theme,setTheme] = useState( localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : colorTheme)

    function updateTheme(value) {
        setTheme(value)
        localStorage.setItem(key,JSON.stringify(value))
    }

  return[theme,updateTheme]
}
