import Menu from "@/ui/Menu";
import {RiGlobalLine} from 'react-icons/ri'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
export default function Footer() {

  const menus = [
    {
      title: 'Kurumsal',
      items: [
        {
          title: 'Yönetim Kurulu'
        },
        {
          title: 'Yönetim Sistemi'
        },       
        {
          title: 'Kişisel Verilerin Korunması'
        },
        {
          title: 'Üyelikler'
        },
        
      ]
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Sıkça Sorulan Sorular'
        },
        {
          title: 'Kişisel Verilerin Korunması'
        },       
        {
          title: 'Gizlilik Politikası'
        },
        {
          title: 'Çerez Politikası'
        }
      ]
    },
    {
      title: 'Faaliyet Alanları',
      items: [
        {
          title: 'Barajlar ve Su Kaynakları'
        },
        {
          title: 'Binalar'
        },       
        {
          title: 'Enerji'
        },
        {
          title: 'Ulaşım'
        }
      ]
    }
  ]

  return (
    <div className="bg-primary-brand-color">
      <div className="container mx-auto px-4 md:px-32">
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className=" text-lg text-white">
                Mobil Uygulamamızı İndirin!
              </h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
            </nav>
          </section>
          {menus.map((menu,index)=> <Menu key={index} {...menu}/>)}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-200 mt-10 py-6">
          <div className="text-xs text-white flex gap-x-8">
           &copy; 2023 Bilal Keleş
           <a href="#" className="text-white">Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className="flex gap-x-3">
            <a className="w-8 rounded-lg text-white transition-colors hover:bg-white hover:bg-opacity-10 hover:text-brand-color flex items-center justify-center">
              <FaFacebook size={21}/>
            </a>
            <a className="w-8 rounded-lg text-white transition-colors hover:bg-white hover:bg-opacity-10 hover:text-brand-color flex items-center justify-center">
              <FaTwitter size={21}/>
            </a>
            <a className="w-8 rounded-lg text-white transition-colors hover:bg-white hover:bg-opacity-10 hover:text-brand-color flex items-center justify-center">
              <FaInstagram size={21}/>
            </a>
            <a className="h-8 transition-colors hover:bg-white hover:bg-opacity-10 hover:text-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-white border border-gray-100">
              <RiGlobalLine size={18}/>
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
