import '../assets/hero.css'
import {Link} from 'react-router-dom'
import hero from '../assets/images/hero (1).png'
import Headphones from '../assets/images/Headphones .png'
import Game from '../assets/images/Vintage Handheld Game.png'
import hero1 from '../assets/images/hero2.png'
import { useEffect, useState } from 'react';




export function Hero(){
    const[showImage,setShowImage] = useState(false)
    const[textColor, setTextColor] = useState('')

    useEffect(()=>{
        let id = setInterval(()=>{
            setShowImage(prev => !prev)
            setTextColor(prev ==='[hsl(18.12_99.02%_60%)]'?'blue-700':'[hsl(18.12_99.02%_60%)]')
        },2000)

        return ()=> clearInterval(id)
    },[])

    return <div>
        <div className='flex flex-col lg:flex-row justify-center md:justify-between items-center'>
        <div className='text-black text-center md:text-left'>
            <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-cinzel font-semibold tracking-tight tt-1'>shop smart</div>
            <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-cinzel font-semibold tracking-tight text-left tt-2'>& live <span className={`text-secondary font-ptSerif font-medium uppercase`}>fashionably</span></div>
            <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium tracking-tight text-secondary font-ptSerif uppercase tt-3'> better <span className='text-black font-cinzel font-semibold'>everyday</span></div>
            <Link to='/wishlist'><button className='px-10 sm:px-12 md:px-16 py-2 sm:py-3 md:py-4 bg-[hsl(18.12_99.02%_60%)] text-lg sm:text-xl font-bold text-white rounded mt-6 md:mt-10 shadow-xl active:scale-95 font-ptSerif uppercase tracking-widest'>Shop now</button></Link>
            <img src={Headphones} alt="image" className='absolute w-[12%] top-24 opacity-0 tt-icon1'/>
            <img src={Game} alt="" className='absolute w-[12%] bottom-20 right-20 opacity-0 tt-icon2 z-100'/>
        </div>
        <div className='relative w-[100%] sm:w-[40%] mt-6 md:mt-0 z-[-100]'>
            <img src={hero} alt="image" className='relative w-[80%]'/>
            {/* <img src={hero1} alt="" className={`absolute top-0 left-0 rounded-xl ${showImage?'heroImageUnhide':'heroImageHide'}`}/> */}
        </div>
        </div>
    </div>
}