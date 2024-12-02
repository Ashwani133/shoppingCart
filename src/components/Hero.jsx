import '../assets/hero.css'
import orangeCart from '../assets/images/orangeCart-Photoroom.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import hero from '../assets/images/hero.png'


export function Hero(){
    return <div className='w-[90%]'>
        <div className='flex justify-between items-center'>
        <div className='text-black '>
            <div className='lg:text-6xl md:text-6xl font-cinzel font-semibold tracking-tight tt-1'>shop smart</div>
            <div className='lg:text-6xl md:text-6xl font-cinzel font-semibold tracking-tight text-left tt-2'>& live <span className='text-secondary font-ptSerif font-medium uppercase'>fashionably</span></div>
            <div className='lg:text-6xl md:text-6xl font-medium tracking-tight text-secondary font-ptSerif uppercase tt-3'> better <span className='text-black font-cinzel font-semibold'>everyday</span></div>
            <Link to='/wishlist'><button className='px-16 py-4 bg-[hsl(18.12_99.02%_60%)] text-xl font-bold text-white rounded mt-10 shadow-xl active:scale-95 font-ptSerif uppercase tracking-widest'>Shop now</button></Link>
        </div>
        <div className='w-[40%] tt-img'><img src={hero} alt="" /></div>
        </div>
    </div>
}