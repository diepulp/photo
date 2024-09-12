import { SunIcon } from '@heroicons/react/24/outline'
import { Open_Sans } from 'next/font/google'
import { Card, CardFooter, Image, Button } from '@nextui-org/react'

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <SunIcon className="size-6 text-blue-500" />
      </div>
      <div className="m-3">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src="https://nextui.org/images/hero-card.jpeg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-black">Available soon.</p>
            <Button className="text-tiny text-white bg-grey/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Home
