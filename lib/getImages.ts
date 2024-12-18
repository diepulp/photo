export async function getImages(): Promise<string[]> {
  try {
    const galleryPath = path.join(process.cwd(), 'public/gallery')
    const files = fs.readdirSync(galleryPath)

    // Filter to include only image files
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif|webp|avif)$/.test(file))
    return images
  } catch (error) {
    console.error('Error reading gallery images:', error)
    return []
  }
}
