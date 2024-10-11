import React from 'react'
import BlurImage from './BlurImage'

type Props = {
  images: string[]
}
// Helper function to chunk the images array
const chunkArray = (array, chunkSize) => {
  const result = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

export default function MasonryGallery({ images }: Props) {
  const imageChunks = chunkArray(images, Math.ceil(images.length / 3))
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
      {imageChunks.map((chunk, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {chunk.map((src, imageIndex) => (
            <div key={imageIndex} className="relative aspect-square">
              <BlurImage className="h-auto w-full object-cover rounded-lg" src={src} alt={`Image ${imageIndex + 1}`} fill />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
