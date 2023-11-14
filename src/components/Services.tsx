import { useState, useEffect} from "react"
import cardsData from '@/api/cards.json'
import { motion } from "framer-motion"
export default function Services() {
  

    type cardType = {
        id: number;
        image: string;
        title: string;
        description: string;
        // length: number;

    }[]

 const [cards, setCards] = useState<cardType>([])

 useEffect(() => {
   setCards(cardsData);
 }, [])

 const container = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
 }

 const item = {
  hidden: {
    opacity: 0,
    translateY: 20
  },
  visible: {
    opacity: 1,
    translateY: 0
  }
 }



  return (
    <div className=" bg-gray-50 py-11">
    <div className="items-center text-center text-sm sm:text-xl lg:text-[19px] font-extrabold text-primary-brand-color tracking-[0.82em]">
            <h1>HİZMETLERİMİZ</h1>
        </div>
    <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true}}
     className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 mt-10 md:mx-32 ">       
      {cards.length && cards.map(card => (
        <motion.div
        variants={item}
        className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center">
          <img className="w-[150px] h-[150px] mb-6" src={card.image}/>
          <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
          <p className="mt-2 text-sm text-gray-700">{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
    </div>
  )
}
