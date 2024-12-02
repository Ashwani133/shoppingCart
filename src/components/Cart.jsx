import { useRecoilValue } from 'recoil'
import VintageGame from '../assets/images/Vintage Handheld Game.png'
import { CartItemState } from '../store/CartItemState'
import { ItemsInCart } from './ItemsInCart'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Cart(){
    const cartItemState = useRecoilValue(CartItemState)
    const location = useLocation();


    return <div className="h-[100vh] sticky top-0 z-100 relative flex justify-center items-center">
    <div className="h-[85%] w-[85%] bg-custom-gradient shadow-[0px_10px_30px_5px_hsl(214.29_17.41%_40%)] rounded-lg p-10">
        <div className='flex justify-between'>
        <div className={`font-dancingScript text-primary text-2xl font-extrabold
        ${location.pathname === '/cart'?'hover:bg-[hsl(18.12_99.02%_60%)] rounded inline p-1 cursor-pointer':'cursor-text'}`}><Link className={`${location.pathname === '/cart'?'cursor-pointer':'cursor-text'}`} to='/'>Amazing cart</Link></div>
        <div className={`text-primary hover:bg-[hsl(18.12_99.02%_60%)] rounded p-1 cursor-pointer`}><Link to='/wishlist'>Wishlist</Link></div>
        </div>
        <p className='p-3 font-poppins text-primary tracking-tight font-bold'>Your shopping list</p>
        <div className="flex gap-5">
            <div className="flex-[3] rounded gap-3 overflow-auto max-h-[400px]">
                {cartItemState.map((item,index) => <ItemsInCart key={index} image={item.image} name={item.name} quantity={item.quantity} price={item.price} id={item.id}/>)}
            </div>
            <div className="flex-[1] p-4 bg-red-900 block rounded">Checkout</div>
        </div>
    </div>
</div>
}