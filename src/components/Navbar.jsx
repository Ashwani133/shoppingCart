import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function Navbar(){
    return <div>
        <div className="flex justify-between items-center sticky top-0">
            <div className="font-dancingScript text-primary text-2xl font-extrabold hover:text-white hover:bg-[hsl(18.12_99.02%_60%)] hover:rounded cursor-pointer p-1">
                Amazing Cart
            </div>
            <div className="font-poppins md:flex gap-20 text-sm text-primary ">
                <p className='hover:bg-[hsl(18.12_99.02%_60%)] hover:rounded cursor-pointer p-1 active:scale-95'><Link to={'/'}>Home</Link></p>
                <p className='hover:bg-[hsl(18.12_99.02%_60%)] hover:rounded cursor-pointer p-1 active:scale-95'><Link to='/wishlist'>Wishlist</Link></p>
                <p className='hover:bg-[hsl(18.12_99.02%_60%)] hover:rounded cursor-pointer p-1 active:scale-95'><Link to='/cart'>Cart</Link></p>
            </div>
            <Link to='/cart'><div className='bg-[hsl(18.12_99.02%_60%)] p-1 hover:bg-gray-100 cursor-pointer active:scale-95'>
                <FontAwesomeIcon icon={faCartShopping} />
            </div></Link>
        </div>
    </div>
}