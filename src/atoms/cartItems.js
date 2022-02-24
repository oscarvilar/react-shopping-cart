import { atom } from "recoil";

const cartItems = atom({
    key: 'cartItems',
    default: [],
});

export default cartItems;