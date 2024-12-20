'use server'
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'

// Cache the getImages function
export const getImages = cache(async (): Promise<string[]> => {
  try {
    const galleryPath = path.join(process.cwd(), 'public/gallery')
    const files = fs.readdirSync(galleryPath)

    // Filter to include only image files and sort them
    const images = files
      .filter((file) => /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file))
      .sort((a, b) => {
        const statsA = fs.statSync(path.join(galleryPath, a))
        const statsB = fs.statSync(path.join(galleryPath, b))
        return statsB.mtime.getTime() - statsA.mtime.getTime()
      })

    return images
  } catch (error) {
    console.error('Error reading gallery images:', error)
    return []
  }
})
