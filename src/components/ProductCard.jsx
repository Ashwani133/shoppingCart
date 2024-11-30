import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { WishlistState } from '../items';
import { useRecoilValue, useRecoilState } from 'recoil';
import { CartItemState } from '../store/CartItemState';


export function ProductCard({image,name,price,reviews,id}){
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



    return <div className="h-[100vh] sticky top-0 z-100 relative flex justify-center items-center">
        <div className="h-[85%] w-[85%] bg-custom-gradient shadow-[0px_10px_30px_5px_hsl(214.29_17.41%_40%)] shadow-[0px_10px_30px_5px_hsl(214.29_17.41%_40%)] rounded p-10">
            <div className='flex justify-between'>
                <p className='font-dancingScript text-primary text-2xl font-extrabold hover:bg-gray-900 cursor-pointer'>
                    Amazing cart
                </p>
                <FontAwesomeIcon icon={faCartShopping} className='bg-[hsl(18.12_99.02%_60%)] p-1 hover:bg-gray-100 cursor-pointer'/></div>
            <div className='md:flex justify-center items-center p-10'>
            <div className="flex-1 flex justify-center items-center flex-col">
                <p className="font-poppins text-2xl md:text-4xl lg:text-6xl tracking-tighter text-primary font-black">{name}</p>
                <div className="font-poppins mt-10 text-primary ">
                    <div className='flex justify-center items-center gap-2'>
                    <p>Price:</p>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    <p>{price}</p>
                    </div>
                    <p>Reviews: {reviews}</p>
                    </div>
                <button onClick={() => handleAddToCartClick(id)} className="p-2 px-10 bg-[hsl(18.12_99.02%_60%)] font-bold text-primary rounded hover:opacity-85 lg:mt-20 md:mt-10 mt-5">Add to cart</button>
            </div>
            <div className="flex-1 flex justify-center max-h-[100%] max-w-[100%]"><img src={image} alt="product image" className="w-full h-full max-w-[50%] max-h-[50%] md:max-w-[80%] md:max-h-[80%] lg:max-w-[75%] lg:max-h-[75%] object-contain lg:mt-20 md:mt-10 mt-20"/></div>
            </div>
        </div>
    </div>
}