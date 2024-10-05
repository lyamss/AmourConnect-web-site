'use client'

import React, { useEffect, useState } from 'react'

const colors = [
  'text-blue-500',
  'text-green-500',
  'text-yellow-300',
  'text-purple-500',
  'text-indigo-500',
  'text-teal-500'
]

export default function MulticolorText({ text }: { text: string }) {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <span className={`font-bold transition-colors duration-500 ${colors[colorIndex]}`}>
      {text}
    </span>
  )
}