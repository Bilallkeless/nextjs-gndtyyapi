import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slider1 from '@/images/slider-image-1.jpg'
import slider2 from '@/images/slider-image-2.jpg'
import { motion } from "framer-motion"



export default function HeroSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  

  return (
    <motion.div
     initial={{opacity:0, translateY:30}} animate={{opacity:1, translateY:0}} transition={{duration: 1}}
      className="w-full relative h-[200px] md:h-[300px] lg:h-[550px] ">
       <Slider {...settings}>
        <div>
          <Image
            className="w-full h-[200px] md:h-[300px] lg:h-[550px] object-left  object-cover"
            src={slider1}
            alt="Gültepe Barajı"
          />  
        </div>
        <div>
        <Image
            className="w-full h-[200px] md:h-[300px] lg:h-[550px] object-left object-cover"
            src={slider2}
            alt="Bilal Keles Havalimanı"
          />
        </div>
      </Slider>
    </motion.div>
  )
}
