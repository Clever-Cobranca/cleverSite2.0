import Logo from '../../assets/Logo.png'
import Intagram from '../../assets/Instagram.png'
import Facebook from '../../assets/Facebook.png'
import Tiktok from '../../assets/Tiktok.png'
import Youtube from '../../assets/YouTube.png'
import Linkedin from '../../assets/Linkedin.png'
import WhatsApp from '../../assets/WhatsApp.png'

import '../../global.css'

export function Header(){
    return(
        <header className='mt-4 ml-16 mr-16'>
            <nav className='flex justify-between'>
                <div className='flex items-center gap-16'>
                    <img src={Logo}/>
                    <ul className='flex gap-8'>
                        <li className='list-none text-[22px] font-[Montserrat] opacity-50 hover:font-bold cursor-pointer'>Inicio</li>
                        <li className='list-none text-[22px] font-[Montserrat] opacity-50 hover:font-bold cursor-pointer'>A clever</li>
                        <li className='list-none text-[22px] font-[Montserrat] opacity-50 hover:font-bold cursor-pointer'>Nossas Soluções</li>
                        <li className='list-none text-[22px] font-[Montserrat] opacity-50 hover:font-bold cursor-pointer'>Blog</li>
                        <li className='list-none text-[22px] font-[Montserrat] opacity-50 hover:font-bold cursor-pointer'>Educação</li>
                    </ul>
                </div>

                <div className='flex items-center gap-8'>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Intagram}/></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Facebook}/></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Tiktok}/></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Youtube}/></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Linkedin}/></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={WhatsApp}/></a>
                </div>
            </nav>
        </header>
    );
}