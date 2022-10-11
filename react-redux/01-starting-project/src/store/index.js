import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";


const myStore = configureStore({
    reducer: {
        uiReducer: uiSlice.reducer,
        cartReducer: cartSlice.reducer
    }
});

export default myStore;