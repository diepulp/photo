'use client'
import React, { Component } from 'react'
import Image from 'next/image'
import { useState } from 'react'

type Image = {
  image: string
  index: number
}
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const BlurImage = ({ image, index }: Image) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <div>
      <a href="#" className="group">
        <div className="relative aspect-w-1 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-5 xl:aspect-h-7">
          <Image
            alt={`Image ${index + 1}`}
            src={`/gallery/${image}`}
            fill
            className={cn(
              'duration-700 ease-in-out group-hover:opacity-75 object-cover',
              isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
            )}
            priority="false"
            qulity={50}
            onLoad={() => setLoading(false)}
          />
        </div>
      </a>
    </div>
  )
}

export default BlurImage