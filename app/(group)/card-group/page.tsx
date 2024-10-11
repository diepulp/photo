import Experience from '../../../components/Experience'
import ExpCard from '../../../components/ExpCard'
import Gallery from '@/components/ui/Gallery'
import path from 'path'
import fs from 'fs'
import Image from 'next/image'

type Props = {
  images: string[]
}

async function getImages(): Promise<string[]> {
  try {
    const galleryPath = path.join(process.cwd(), 'public/gallery')
    const files = fs.readdirSync(galleryPath)

    // Filter to include only image files
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file))
    return images
  } catch (error) {
    console.error('Error reading gallery images:', error)
    return []
  }
}

export default async function CardGroup({ images }: Props) {
  images = await getImages()

  return (
    <>
      <Gallery images={images} />
    </>
  )
}
