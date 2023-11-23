import Image from "next/image";
import gndtyLogo from "@/images/gndty-yapı-logo.png"
import {BiGlobe} from 'react-icons/bi'
import { IoMenu } from "react-icons/io5";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { useState, useEffect } from "react";






export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
      console.log(window.scrollY);

    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${sticky ? 'sticky' : ""}`}>
      <div className="container mx-auto h-[100px] flex items-center justify-between px-16">
        <a href="">
          <Image
              src={gndtyLogo}
              alt="Gndty Logo"
              width={120}
              priority
            />
        </a>

        <nav className="hidden lg:flex lg:gap-x-8 xl:gap-x-12 text-base font-semibold ml-2">
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 sticky-color">    
            Kurumsal
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 sticky-color">        
            Faaliyet Alanları
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 sticky-color">
            Projeler
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 sticky-color">
            İnsan Kaynakları
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 sticky-color">
            Haberler
          </a>
          <a href="" className="flex items-center gap-x-3 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 sticky-color">
            İletişim
          </a>
        </nav>

        <a href="" className="hidden lg:flex items-center gap-x-2 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 ml-2 sticky-color">
          <BiGlobe size={20}/>
          TR
          <MdOutlineArrowDropDown/>
        </a>

        {/* <div className="menu lg:hidden">
          <span>mess</span>
          <span>srs</span>
          <span>dsd</span>
        </div> */}

        
        
        <a className="lg:hidden flex items-center gap-x-2 text-primary-brand-color transition-all text-opacity-80 hover:text-opacity-100 ml-2 sticky-color"
        onClick={()=> {
          setMenuOpen(!menuOpen)
        }}>
          <IoMenu size={40}/>
        </a>
      </div>

        
      <menu className={menuOpen ? "open w-full lg:w-auto z-20 bg-white lg:bg-transparent p-6 lg:p-0 shadow-[0_0px_20px_rgba(0,0,0,0.15)] lg:shadow-none " : ""}>
          <ul >
            <li className="text-left mb-3 lg:mb-0 ">
              <a href="" className="text-sm font-bold 2xl:px-4 xl:px-3 px-1 block transition ease-in-out hover:text-b-yellow pb-4">
                KURUMSAL
              </a>
              <a href="" className="text-sm font-bold 2xl:px-4 xl:px-3 px-1 block transition ease-in-out hover:text-b-yellow pb-4">
                FAALİYET ALANLARI
              </a>
              <a href="" className="text-sm font-bold 2xl:px-4 xl:px-3 px-1 block transition ease-in-out hover:text-b-yellow pb-4">
                PROJELER
              </a>
              <a href="" className="text-sm font-bold 2xl:px-4 xl:px-3 px-1 block transition ease-in-out hover:text-b-yellow pb-4">
                İNSAN KAYNAKLARI
              </a>
              <a href="" className="text-sm font-bold 2xl:px-4 xl:px-3 px-1 block transition ease-in-out hover:text-b-yellow pb-4">
                HABERLER
              </a>
              <a href="" className="text-sm font-bold 2xl:px-4 xl:px-3 px-1 block transition ease-in-out hover:text-b-yellow pb-4">
                İLETİŞİM
              </a>
              <a href="" className="text-sm flex font-bold 2xl:px-4 xl:px-3 px-1  transition ease-in-out hover:text-b-yellow ">
              <BiGlobe size={20}/>
                TR
              <MdOutlineArrowDropDown/>
              </a>
            </li>
          </ul>
        </menu>
    </div>
    
  )
}
