import { atom } from "recoil";
import Mouse from './assets/images/Mouse.png'
import Speaker from './assets/images/Modern Portable Speaker in Natural Light-Photoroom-Photoroom.png'
import Earpods from './assets/images/Earpods.png'
import Headphones from './assets/images/Headphones .png'
import PortableGamingDevice from './assets/images/Portable Gaming Device.png'
import VintageGame from './assets/images/Vintage Handheld Game.png'
import Mic from './assets/images/Sleek Modern Handheld Microphone .png'

export const WishlistState = atom({
  key: "wishlistState",
  default: [
    {
      id: 1,
      name: "Gaming Console",
      price: 3500.0,
      image: PortableGamingDevice,
      rating: 4.2,
      reviews: 2500,
      oldPrice: 12000.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Ear Pods",
      price: 3300.0,
      image: Earpods,
      rating: 4.2,
      reviews: 2500,
      oldPrice: 12000.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Headphone",
      price: 1500.0,
      image: Headphones,
      rating: 4.2,
      reviews: 2500,
      oldPrice: 12000.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Radio Speaker",
      price: 6200.0,
      image: Speaker,
      rating: 4,
      reviews: 1000,
      oldPrice: 350.0,
      quantity: 1,
    },
    {
      id: 5,
      name: "Vintage Games",
      price: 2000.0,
      image: VintageGame,
      rating: 4.2,
      reviews: 2500,
      oldPrice: 12000.0,
      quantity: 1,
    },
    {
      id: 6,
      name: "Microphone",
      price: 999.0,
      image: Mic,
      rating: 4.2,
      reviews: 2500,
      oldPrice: 12000.0,
      quantity: 1,
    }
  ],
});
