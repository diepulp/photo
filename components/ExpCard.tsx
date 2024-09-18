import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
type Props = {}

function ExpCard({}: Props) {
  return (
    <Card
      className="border mt-5 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 overflow-auto
    w-[100px] md:w-[200px] xl:w-[50rem] xl:h-[30rem] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center  flex-shrink-0">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        
      </CardBody>
    </Card>
  )
}

export default ExpCard
