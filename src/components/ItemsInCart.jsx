import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export function ItemsInCart({image,name,quantity}){
    return <div className="flex items-center shadow-xl">
    <div className='max-h-[15%] max-w-[15%]'><img src={image} alt="" className=''/></div>
    <div className='flex items-center justify-between w-[100%] p-4'>
    <div>
        <div>{name}</div>
        <div><button className="p-1 bg-gray-500"><FontAwesomeIcon icon={faPlus} /></button><span className='p-1'>{quantity}</span><button className="p-1 bg-gray-500"><FontAwesomeIcon icon={faMinus} /></button></div>
    </div>
    <div>
        total price
    </div>
    </div>
</div>
}