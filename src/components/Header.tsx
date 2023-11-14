import Image from "next/image";
import gndtyLogo from "@/images/gndty-yapı-logo.png"
import {BiGlobe} from 'react-icons/bi'
import { IoMenu } from "react-icons/io5";
import {MdOutlineArrowDropDown} from 'react-icons/md'






export default function Header() {
  return (
    <div >
      <div className="container mx-auto h-[100px] flex items-center justify-between px-16 ">
        <a href="">
          <Image
              src={gndtyLogo}
              alt="Gndty Logo"
              width={120}
              priority
            />
        </a>

        <nav className="hidden lg:flex lg:gap-x-8 xl:gap-x-12 text-base font-semibold ml-2">
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100">    
            Kurumsal
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100">        
            Faaliyet Alanları
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100">
            Projeler
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100">
            İnsan Kaynakları
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100">
            Haberler
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100">
            İletişim
          </a>
        </nav>

        <a href="" className="hidden lg:flex items-center gap-x-2 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 ml-2">
          <BiGlobe size={20}/>
          TR
          <MdOutlineArrowDropDown/>
        </a>
        <a href="" className="lg:hidden flex items-center gap-x-2 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 ml-2">
          <IoMenu size={40}/>
        </a>
      </div>
    </div>
    
  )
}
