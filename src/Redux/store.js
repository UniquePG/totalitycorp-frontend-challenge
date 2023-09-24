import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice"
import ProductSliceReducer from "./productSlice"
import UserSliceReducer from "./UserSlice"

const store = configureStore({
    reducer: {
        cart: CartSliceReducer,
        product: ProductSliceReducer,
        user: UserSliceReducer
    },
})

export default store;