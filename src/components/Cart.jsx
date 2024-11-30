import { useRecoilValue } from 'recoil'
import VintageGame from '../assets/images/Vintage Handheld Game.png'
import { CartItemState } from '../store/CartItemState'
import { ItemsInCart } from './ItemsInCart'
export function Cart(){
    const cartItemState = useRecoilValue(CartItemState)
    return <div className="h-[100vh] sticky top-0 z-100 relative flex justify-center items-center">
    <div className="h-[85%] w-[85%] bg-custom-gradient shadow-[0px_10px_30px_5px_hsl(214.29_17.41%_40%)] rounded-lg p-10">
        <div className="font-dancingScript text-primary text-2xl font-extrabold cursor-pointer">Amazing cart</div>
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