import '../assets/hero.css'
import {Link} from 'react-router-dom'
import hero from '../assets/images/hero.png'
import Headphones from '../assets/images/Headphones .png'
import Game from '../assets/images/Vintage Handheld Game.png'
import hero1 from '../assets/images/Contemplative City Night.jpeg'
import { useEffect, useState } from 'react';




export function Hero(){
    const[showImage,setShowImage] = useState(false)

    useEffect(()=>{
        let id = setInterval(()=>{
            setShowImage(prev => !prev)
        },2000)

        return ()=> clearInterval(id)
    },[])

    return <div className='w-[90%]'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div className='text-black text-center md:text-left'>
            <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-cinzel font-semibold tracking-tight tt-1'>shop smart</div>
            <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-cinzel font-semibold tracking-tight text-left tt-2'>& live <span className='text-secondary font-ptSerif font-medium uppercase'>fashionably</span></div>
            <div className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium tracking-tight text-secondary font-ptSerif uppercase tt-3'> better <span className='text-black font-cinzel font-semibold'>everyday</span></div>
            <Link to='/wishlist'><button className='px-10 sm:px-12 md:px-16 py-2 sm:py-3 md:py-4 bg-[hsl(18.12_99.02%_60%)] text-lg sm:text-xl font-bold text-white rounded mt-6 md:mt-10 shadow-xl active:scale-95 font-ptSerif uppercase tracking-widest'>Shop now</button></Link>
            <img src={Headphones} alt="image" className='absolute w-[12%] top-24 opacity-0 tt-icon1'/>
            <img src={Game} alt="" className='absolute w-[12%] bottom-20 right-20 opacity-0 tt-icon2'/>
        </div>
        <div className='w-[100%] lg:w-[40%] tt-img relative mt-6 md:mt-0'>
            <img src={hero} alt="image" className=''/>
            <img src={hero1} alt="" className={`absolute bottom-2 left-16  md:left-40 md:bottom-6 lg:bottom-4 lg:left-16 xl:bottom-4 xl:left-28 w-[48%] h-[91%] rounded-xl ${showImage?'heroImageUnhide':'heroImageHide'}`}/>
        </div>
        </div>
    </div>
}