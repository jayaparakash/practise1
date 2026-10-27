import { createSlice } from "@reduxjs/toolkit";

let cartData = JSON.parse(localStorage.getItem('cartData')) || []

const cartSlice = createSlice({
        name:'cart',
        initialState:cartData,
        reducers:{
            ADD:(state,action)=>{
                let item = action.payload
                let existingItem = state.find(pro => pro.id == item.id)
                if (existingItem) {
                    existingItem.quantity += 1
                }else{
                    state.push(item)
                }
                localStorage.setItem('cartData',JSON.stringify(state))
            }
,
            REMOVE :(state,action)=>{
                let item = action.payload
                let filData = state.filter(d => d.id !== item)
                localStorage.setItem('cartData',JSON.stringify(filData))
                return filData
            }
,
            INC : (state,action)=>{
                let item = action.payload
                let existingItem = state.find(pro => pro.id == item)
                if (existingItem)existingItem.quantity+=1;
                localStorage.setItem('cartData',JSON.stringify(state))
            },

              DEC : (state,action)=>{
                let item = action.payload
                let existingItem = state.find(pro => pro.id == item)
                if (existingItem  &&  existingItem.quantity > 1)existingItem.quantity-=1;
                localStorage.setItem('cartData',JSON.stringify(state))
            }
        }
})

export const {ADD,REMOVE,INC,DEC}  = cartSlice.actions
export default cartSlice.reducer