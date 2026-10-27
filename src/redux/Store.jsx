import { configureStore } from "@reduxjs/toolkit";
import cartOper from '../Features/cart/CartSlice'
export default configureStore({
   reducer:{
     cart:cartOper
   }
})