import { useRecoilValue } from 'recoil'
import VintageGame from '../assets/images/Vintage Handheld Game.png'
import { CartItemState } from '../store/CartItemState'
import { ItemsInCart } from './ItemsInCart'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartTotalSelector } from '../store/CartTotalSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

export function Cart(){
    const cartItemState = useRecoilValue(CartItemState)
    const{total, itemCount} = useRecoilValue(CartTotalSelector)
    const location = useLocation();


    return <div className="h-[100vh] sticky top-0 z-100 relative flex justify-center items-center">
    <div className="h-[85%] w-[85%] bg-[hsl(18.12_99.02%_60%)] shadow-[0px_10px_30px_5px_hsl(214.29_17.41%_40%)] rounded-lg p-10">
        <div className='flex justify-between'>
        <div className={`font-dancingScript text-primary text-2xl font-extrabold
        ${location.pathname === '/cart'?'hover:bg-[hsl(18.12_99.02%_60%)] rounded inline p-1 cursor-pointer active:scale-95':'cursor-text'}`}><Link className={`${location.pathname === '/cart'?'cursor-pointer':'cursor-text'}`} to='/'>Amazing cart</Link></div>
        <div className={`text-primary hover:bg-[hsl(18.12_99.02%_60%)] rounded p-1 cursor-pointer active:scale-95 flex justify-center items-center`}><Link to='/wishlist'>Wishlist</Link></div>
        </div>
        <p className='p-3 font-poppins text-primary tracking-tight font-bold'>Your shopping list</p>
        <div className="flex gap-5">
            <div className="flex-[3] rounded gap-3 overflow-auto max-h-[400px]">
                {cartItemState.map((item,index) => <ItemsInCart key={index} image={item.image} name={item.name} quantity={item.quantity} price={item.price} id={item.id}/>)}
            </div>
            <div className="flex-[1] p-4 shadow-xl block rounded text-primary">
                <div className='font-bold'>Order Summary</div>
                <div className='flex justify-between p-2'>
                <div>items({itemCount}):</div>
                <div><FontAwesomeIcon icon={faIndianRupeeSign} className='mr-1'/>{total}</div>
                </div>
                <div className='flex justify-between p-2 font-semibold'>
                    <div>Order Total</div>
                    <div><FontAwesomeIcon icon={faIndianRupeeSign} className='mr-1'/>{total}</div>
                </div>
                <div className='flex justify-center'>
                <button className='p-2 px-10 bg-[hsl(18.12_99.02%_60%)] font-bold text-primary rounded opacity-85 hover:opacity-100 mt-4 shadow-xl active:scale-95'>Proceed to Buy</button>
                </div>
            </div>
        </div>
    </div>
</div>
}