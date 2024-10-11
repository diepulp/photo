import React from 'react'
import Image from 'next/image'
import BlurImage from '@/components/ui/BlurImage'


type Props = {
  images: string[]
}


function cn(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Gallery({ images }: Props) {
  console.log('images', images)
  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images?.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <BlurImage image={image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
// <>
//   <div className="relative grid grid-cols-1  gap-4 justify-self-auto w-full h-full">
//     <div className="grid gap-4">
//       <div className="object-fit">
//         <Image
//           className="h-auto w-full rounded-lg object-cover"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
//           alt=""
//           fill={true}
//           objectFit="fill"
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full  object-cover rounded-lg "
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
//           alt=""
//           fill
//         />
//       </div>
//     </div>
//     <div className="grid gap-4">
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
//           alt=""
//           fill
//         />
//       </div>
//     </div>
//     <div className="grid gap-4">
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
//           alt=""
//           fill
//         />
//       </div>
//     </div>
//     <div className="grid md:grid-cols-4 gap-4">
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
//           alt=""
//           fill
//         />
//       </div>
//       <div>
//         <Image
//           className="h-auto w-full object-cover rounded-lg"
//           src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
//           alt=""
//           fill
//         />
//       </div>
//     </div>
//   </div>
// </>
