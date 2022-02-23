import { atom } from "recoil";

const cartQtyState = atom({
    key:'cartQtyState',
    default : 0,
});

export default cartQtyState;