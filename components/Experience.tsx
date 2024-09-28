'use client'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -200,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-left md:flex-row max-w-full mx-auto items-center overflow-auto "
    >
      <h3 className="absolute left-0 right-0 mx-auto w-fit text-center text-sm sm:text-2xl top-24 tracking-[0.5rem] uppercase sm:tracking-[20px] text-gray-500 mb-5">
        Experience
      </h3>
      <div className="h-screen mt-72 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] flex space-x-5 overflow-x-scroll scroll-smooth p-10 snap-x snap-mandatory">
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
    </motion.div>
    //   <motion.div
    //     initial={{
    //       opacity: 0,
    //     }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{
    //       duration: 1.5,
    //     }}
    //     className="relative h-screen flex flex-col overflow-y-auto text-left
    //       md:flex-row max-w-full px-10 justify-start mx-auto items-center"
    //   >
    //     <h3 className="absolute top-24 overflow-y-auto uppercase tracking-[20px] text-gray-500 text-2xl">
    //       Experience
    //     </h3>
    //     <div className="mt-12 flex flex-col space-y-8 md:space-y-10">
    //       <ExpCard />
    //       <ExpCard />
    //       <ExpCard />
    //       <ExpCard />
    //     </div>
    //   </motion.div>
  )
}

export default Experience
