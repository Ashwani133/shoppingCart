import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { WishlistState } from '../items';
import { useRecoilValue, useRecoilState } from 'recoil';
import { CartItemState } from '../store/CartItemState';
import { Link, useLocation } from 'react-router-dom';
import '../assets/hero.css'



export function ProductCard({image,name,price,reviews,id}){
    const location = useLocation()
    const allItemList = useRecoilValue(WishlistState)
    const [cartItemState, setcartItemState] = useRecoilState(CartItemState)
    function handleAddToCartClick(id){
        const itemClicked = allItemList.find(item => item.id == id)
        // check if this item clicked is present in the cartItemState, if not then insert it with quantity key
        const itemListedInCart = cartItemState.find(item => item.id == id)
        if(itemListedInCart){
           setcartItemState(prev => prev.map(item => item.id == id? {...item,quantity:item.quantity+1}:item))
           console.log(cartItemState)
        }else{
            const newItem = { ...itemClicked, quantity: 1 };
            setcartItemState(prev => [...prev, newItem])
            console.log(cartItemState)
        }
    }



    return <div className="h-[100vh] sticky top-0 z-100 relative flex justify-center items-center bg-white">
        <div className="h-[85%] w-[85%] bg-black rounded-lg p-10">
            <div className='flex justify-between'>
                <p className={`font-dancingScript text-primary text-2xl font-extrabold ${location.pathname ==='/wishlist'?'p-1 rounded cursor-pointer active:scale-95':''}`}>
                <Link className={`${location.pathname === '/wishlist'?'cursor-pointer':'cursor-text'}`} to='/'>Amazing cart</Link>
                </p>
                <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className='bg-[hsl(18.12_99.02%_60%)] p-1 hover:bg-gray-100 cursor-pointer active:scale-95'/></Link>
                </div>
            <div className='md:flex justify-center items-center p-10'>
            <div className="flex-1 flex justify-center items-center flex-col fade">
                <p className="font-poppins text-2xl md:text-4xl lg:text-6xl tracking-tighter text-primary font-black">{name}</p>
                <div className="font-poppins mt-10 text-primary ">
                    <div className='flex justify-center items-center gap-2'>
                    <p>Price:</p>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    <p>{price}</p>
                    </div>
                    <p>Reviews: {reviews}</p>
                    </div>
                <button onClick={() => handleAddToCartClick(id)} className="p-2 px-10 bg-[hsl(18.12_99.02%_60%)] font-bold text-primary rounded lg:mt-20 md:mt-10 mt-5 active:scale-95">Add to cart</button>
            </div>
            <div className="flex-1 flex justify-center md:max-h-[100%] md:max-w-[100%] fade"><img src={image} alt="product image" className="w-full h-full max-w-[50%] max-h-[50%] md:max-w-[80%] md:max-h-[80%] lg:max-w-[75%] lg:max-h-[75%] object-contain lg:mt-20 md:mt-10 mt-20"/></div>
            </div>
        </div>
    </div>
}