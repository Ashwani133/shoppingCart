import orangeCart from '../assets/images/orangeCart-Photoroom.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
export function Hero(){
    return <div>
        <div className='absolute right-10 bottom-10 sm:right-16 sm:bottom-16 md:right-20 md:bottom-20 h-[40%] sm:h-[50%] md:h-[60%] w-[50%] sm:w-[60%] md:w-[60%] opacity-65'>
            <img src={orangeCart} alt="shopping cart" className='h-full w-full object-contain'/>
        </div>
        <div className='relative'>
        <div className="font-dancingScript text-4xl md:text-6xl font-black text-primary">Amazing</div>
        <div className="font-poppins md:text-9xl text-6xl font-black tracking-tighter text-primary">shopping cart</div>
        </div>
        <button className='p-2 px-10 bg-[hsl(18.12_99.02%_60%)] font-bold text-primary rounded opacity-85 hover:opacity-100 mt-4 shadow-xl'>Shop now</button>
        <div className='text-center mt-4'>
            <div><FontAwesomeIcon icon={faAnglesDown} /></div>
        </div>
    </div>
}