import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    data: [],
    category: []
}

export const fetchProduct  = createAsyncThunk("/productFetch", async ()=>{
    try {
                    const res = await fetch("https://fakestoreapi.com/products");
                    const result = await res.json();
                    
                    console.log("fetch product...",result);
                  
                    return result
                

    
                } catch (error) {
                    toast.error("error in fetching product")
                }
})


export const fetchCategory  = createAsyncThunk("/categoryFetch", async ()=>{
    try {
                    const res = await fetch("https://fakestoreapi.com/products/categories");
                    const result = await res.json();
                    
                    console.log("fetch category..",result);
                  
                    return result
                
                // now displa toast of success
                            // toast.success('Success!',{position:'bottom-right'})
    
                } catch (error) {
                    toast.error("error in fetching product")
                }
})


const productSlice = createSlice({
    name: "product",
    initialState,
    // reducers: {
    //     fetchProduct: async function (state, action){
    //         try {
    //             const res = await fetch("https://fakestoreapi.com/products");
    //             const result = await res.json();
                
    //             console.log("fetch product...",result);
    //            state.push(result)
            
    //         // now displa toast of success
    //                     // toast.success('Success!',{position:'bottom-right'})

    //         } catch (error) {
    //             toast.error("error in fetching product")
    //         }
    //     }
    // }
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            console.log("builder product: ", action);
            state.data = action.payload
        })
        .addCase(fetchCategory.fulfilled, (state, action)=>{
            console.log("builder cateogy: ", action);
            state.category = action.payload
        })
    }
});


// export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer