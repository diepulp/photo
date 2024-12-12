'use client'
import React, { Component } from 'react'
import Image from 'next/image'
import { useState } from 'react'

type Image = {
  image: string
  key: number
}
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const BlurImage = ({ image, index }: Image) => {
  const [isLoading, setLoading] = useState(true)
  // console.log('image in the blur image', image, index)
  return (
    <>
      <a href="#" className="group">
        <div className="relative aspect-w-5 aspect-h-7 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-5 xl:aspect-h-7">
          <Image
            alt={`Image ${index + 1}`}
            src={`/gallery/${image}`}
            fill
            sizes="(min-width: 1280px) calc(25vw - 89px), (min-width: 1040px) calc(33.18vw - 127px), (min-width: 640px) calc(50vw - 35px), calc(100vw - 44px)"
            className={cn('object-cover transition-opacity duration-300', !isLoaded ? 'opacity-0' : 'opacity-100')}
            // placeholder="blur"
            // blurDataURL={`/gallery/${image}`}
            qulity={50}
            onLoad={(e) => {
              setLoading(false)
            }}
          />
        </div>
      </a>
    </>
  )
}

export default BlurImage
