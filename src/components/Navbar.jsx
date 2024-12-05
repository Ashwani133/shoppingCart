import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export function Navbar(){
    const[navbar, setNavbar] = useState(false);
    function handleNavbar(){
        setNavbar(prev => !prev)
    }
    
    return <div className="md:flex justify-between items-center sticky top-0 text-black p-2">
            <div className="font-dancingScript text-2xl font-extrabold hidden md:block">
                Amazing Cart
            </div>
            <div className="font-poppins hidden md:flex gap-20 text-sm ">
                <p  className='cursor-pointer p-1 active:scale-95'><Link to={'/'}>HOME</Link></p>
                <p className='cursor-pointer p-1 active:scale-95'><Link to='/wishlist'>WISHLIST</Link></p>
                <p className='cursor-pointer p-1 active:scale-95'><Link to='/cart'>CART</Link></p>
            </div>
            <Link to='/cart'><div className='hidden md:block p-1 cursor-pointer active:scale-95'>
                <FontAwesomeIcon icon={faCartShopping} />
            </div></Link>
            <div onClick={handleNavbar} className='md:hidden flex justify-between p-2'>{navbar?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars} />}<div className='font-dancingScript text-xl font-extrabold'>Amazing Cart</div></div>
            {navbar && <div className='fixed'>
                <p className='cursor-pointer p-1 active:scale-95'><Link to={'/'}>HOME</Link></p>
                <p className='cursor-pointer p-1 active:scale-95'><Link to={'/wishlist'}>WISHLIST</Link></p>
                <p className='cursor-pointer p-1 active:scale-95'><Link to={'/cart'}>CART</Link></p>
                </div>}
        </div>
}