import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: function(state, action) {
            state.push({...action.payload, quantity: 1})
        },
        remove: function (state, action){
            const index = state.findIndex((item)=> item.id === action.payload);
            if(index != -1){
                state.splice(index, 1)
            }

        },
        increaseQuantity: function(state, action){

            console.log("increase", action, state[0]);
            const index = state.findIndex((item)=> item.id === action.payload)
            console.log("index ", index);
            if(index != -1){
                state[index].quantity += 1
            }
        },
        decreaseQuantity: function (state, action){
            console.log("descrease", action, state);

            const index = state.findIndex((item)=> item.id === action.payload)
            if(index != -1){
                if(state[index].quantity > 1){
                    state[index].quantity -= 1;
                }
            }
        },
        clearCart: function (state, action) {
            action.payload = []
            state = []
        }

    }
})

export const {add, remove, increaseQuantity, decreaseQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer