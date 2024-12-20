import Gallery from '@/components/ui/gallery'
import { getImages } from '@/lib/server-actions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  other: {
    'Cache-Control': 'public, max-age=31536000, must-revalidate',
  },
}

export default async function CardGroup() {
  const fetchImages = await getImages()

  return (
    <div className="container mx-auto px-4 py-8">
      <Gallery images={fetchImages} />
    </div>
  )
}
