import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { CartItemState } from '../store/CartItemState';
import { useRecoilState } from 'recoil';

export function ItemsInCart({image,name,quantity,price,id}){
    const[cartItemState, setcartItemState] = useRecoilState(CartItemState)

    function addItem(id){
        console.log(id)
        const itemFound = cartItemState.find(item => item.id == id)
        console.log(itemFound)
        setcartItemState(prev => prev.map(item => item.id == id? {...item,quantity:item.quantity+1}:item))
        console.log(cartItemState)
    }

    function removeItem(){
        setcartItemState(prev => prev.map(item => item.id == id? {...item,quantity:item.quantity-1}:item).filter(item => item.quantity>0))
    }

    return <div className="flex items-center shadow-xl">
    <div className='max-h-[15%] max-w-[15%]'><img src={image} alt="" className=''/></div>
    <div className='flex items-center justify-between w-[100%] p-4'>
    <div>
        <div className=''>{name}</div>
        <div><button onClick={() => removeItem(id)} className="p-1 bg-gray-500 active:scale-95"><FontAwesomeIcon icon={faMinus} /></button><span className='p-1 '>{quantity}</span><button onClick={() => addItem(id)} className="p-1 bg-gray-500 active:scale-95"><FontAwesomeIcon icon={faPlus} /></button></div>
    </div>
    <div className=''>
        <span className='p-1'><FontAwesomeIcon icon={faIndianRupeeSign} /></span>{quantity*price}
    </div>
    </div>
</div>
}