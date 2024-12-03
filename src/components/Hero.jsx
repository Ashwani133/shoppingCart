import '../assets/hero.css'
import orangeCart from '../assets/images/orangeCart-Photoroom.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import hero from '../assets/images/hero.png'
import Headphones from '../assets/images/Headphones .png'
import Game from '../assets/images/Vintage Handheld Game.png'
import Console from '../assets/images/Portable Gaming Device.png'
import Earpods from '../assets/images/Earpods.png'
import Mic from '../assets/images/Sleek Modern Handheld Microphone .png'
import hero1 from '../assets/images/Contemplative City Night.jpeg'
import hero2 from '../assets/images/Stylized Character with Red Electric Guitar.jpeg'
import hero3 from '../assets/images/Joyful Pose with Headphones.jpeg'
import hero4 from '../assets/images/Modern Digital Communication.jpeg'
import { useEffect, useState } from 'react';




export function Hero(){
    const[showImage,setShowImage] = useState(false)

    useEffect(()=>{
        let id = setInterval(()=>{
            setShowImage(prev => !prev)
        },2000)

        return ()=> clearInterval(id)
    },2000)

    return <div className='w-[90%]'>
        <div className='flex justify-between items-center'>
        <div className='text-black '>
            <div className='lg:text-6xl md:text-6xl font-cinzel font-semibold tracking-tight tt-1'>shop smart</div>
            <div className='lg:text-6xl md:text-6xl font-cinzel font-semibold tracking-tight text-left tt-2'>& live <span className='text-secondary font-ptSerif font-medium uppercase'>fashionably</span></div>
            <div className='lg:text-6xl md:text-6xl font-medium tracking-tight text-secondary font-ptSerif uppercase tt-3'> better <span className='text-black font-cinzel font-semibold'>everyday</span></div>
            <Link to='/wishlist'><button className='px-16 py-4 bg-[hsl(18.12_99.02%_60%)] text-xl font-bold text-white rounded mt-10 shadow-xl active:scale-95 font-ptSerif uppercase tracking-widest'>Shop now</button></Link>
            <img src={Headphones} alt="image" className='absolute w-[12%] top-24 opacity-0 tt-icon1'/>
            <img src={Game} alt="" className='absolute w-[12%] bottom-20 right-20 opacity-0 tt-icon2'/>
        </div>
        <div className='w-[40%] tt-img relative'>
            <img src={hero} alt="image" className=''/>
            <img src={hero1} alt="" className={`absolute bottom-4 left-28 w-[48%] h-[91%] rounded-xl ${showImage?'heroImageUnhide':'heroImageHide'}`}/>
        </div>
        </div>
    </div>
}