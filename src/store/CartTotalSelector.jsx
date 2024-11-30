import { selector } from "recoil";
import { CartItemState } from "./CartItemState";


export const CartTotalSelector = selector({
    key:'cartTotalSelector',
    get:({get})=>{
        const cartItems = get(CartItemState)

        const total = cartItems.reduce((acc,item) => acc + item.price*item.quantity,0).toFixed(2);
        const itemCount = cartItems.reduce((acc,item) => acc + item.quantity,0)

        return {
            total,
            itemCount
        }
    }
})