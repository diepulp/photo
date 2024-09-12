import React from 'react'
import Image from 'next/image'

export default function ImageGallery() {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          Save Changes
        </button>

        <Image src="/gc.jpg" alt="me-pic" width={300} height={300} className="filter grayscale " />

        <div className="p-1 m-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <Image
            src="/me-ying-yang.jpg"
            alt="me-pic"
            width={300}
            height={300}
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-150  hover:bg-indigo-500 duration-300 ..."
          />
        </div>
        <div className="group p-1 m-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/8">
          <Image
            src="/gc.jpg"
            alt="me-pic"
            width={300}
            height={300}
            className="object-cover w-full h-auto transition ease-in-out delay-150 duration-700 group-hover:grayscale hover:-translate-y-1 group-hover:scale-110"
          />
        </div>
        <div className="p-1 m-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/8">
          <Image
            src="/me-ying-yang.jpg"
            alt="me-pic"
            width={300}
            height={300}
            className="object-cover w-full h-auto transition ease-in-out delay-150 duration-700 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:scale-110"
          />
        </div>
        <div className="group filter group-hover:grayscale-0 p-1 m-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src="/me-ying-yang.jpg"
            alt="me-pic"
            width={300}
            height={300}
            className="object-cover w-full h-auto filter grayscale cursor-pointer "
          />
        </div>
        <div className="grayscale-0 group p-1 m-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 transition duration-150 ease-out hover:ease-in">
          <Image
            className="transition ease-in-out delay-150 duration-700 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:scale-110 "
            src="/me.jpg"
            layout="responsive"
            width="300"
            height="300"
            objectFit="cover"
            objectPosition="50%,50%"
            alt="Photo"
          />
        </div>
      </div>
      <div className="m-2">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <Image
            src="/me-ying-yang.jpg"
            alt="me-pic"
            width={300}
            height={300}
            className="object-cover w-full h-auto transition ease-in-out delay-150 duration-700 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:scale-110 "
          />
          <Image
            src="/me-ying-yang.jpg"
            alt="me-pic"
            width={300}
            height={300}
            className="object-cover w-full h-auto transition ease-in-out delay-150 duration-700 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="p-5 md:p-10">
        <ul className="flex flex-wrap">
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', height: 'auto', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
          <li className="grow h-[40vh]">
            <Image
              style={{ maxWidth: '100%', maxHeight: '100%', verticalAlign: 'bottom', objectFit: 'cover' }}
              width={250}
              height={240}
              src="/me-ying-yang.jpg"
              alt="me"
            />
          </li>
        </ul>
      </div>
    </>
  )
}
