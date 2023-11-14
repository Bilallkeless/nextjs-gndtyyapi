import Image from "next/image";
import institutionalImage from "@/images/institutional-image.jpg";
import { motion } from "framer-motion"

export default function Institutional() {
  return (
    <motion.div
    initial={{opacity:0, translateX:'-100%'}} whileInView={{ opacity: 1, translateX:0}} viewport={{ once: true}} transition={{duration: 1}}
     className="container mx-auto home-neden h-sec-6 mt-20  h-auto lg:px-16 ">
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="m-auto px-16 lg:px-0">
          <h1 className="lg:text-5xl sm:text-3xl text-3xl font-light text-brand-color">
            Mühendislik ve Müşavirlik
          </h1>
          <h2 className="lg:text-5xl sm:text-3xl text-3xl font-extrabold text-brand-color">
            Sektöründe 23. Yıl
          </h2>
          <p className=" lg:text-xl text-lg font-light lg:max-w-[32.375rem] my-5">
            Gndty Yapı A.Ş. 2000 yılında kurulmuş, çok disiplinli, bağımsız bir
            mühendislik ve müşavirlik firmasıdır.
          </p>
          <p className=" text-base font-light lg:max-w-[32.375rem] mb-9">
            Kuruluşundan günümüze kadar yurt içi ve yurt dışında, çeşitli
            mühendislik branşlarında, 700'ü aşkın proje üzerinde çalışan Gndty
            Yapı, bu hizmetlerin bir kısmını Türk ve yabancı mühendislik ve
            müşavirlik firmaları ile müştereken gerçekleştirmiştir.
          </p>
          <button className="bg-brand-color text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-color h-12 w-52 flex items-center justify-center text-sm font-semibold mb-10 lg:mb-0">
            Bizi Tanıyın
          </button>
        </div>
        <div className="w-full h-auto p-5 lg:p-5 shadow-[4px_4px_16px_rgba(149,149,149,0.25)] lg:shadow-[24px_4px_96px_rgba(149,149,149,0.25)] lg:relative lg:after:content-[''] lg:after:absolute lg:after:w-32 lg:after:h-32 lg:after:bg-brand-color lg:after:right-0 after:top-0 after:z-10">
          <Image
            className="w-full h-[455] object-cover lg:z-20 lg:relative"
            src={institutionalImage}
            alt="Gndty Yapı Bizi Tanıyın"
          />
        </div>
      </div>
      
    </motion.div>
  );
}
