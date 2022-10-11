import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            let exists = state.items.find(item => item.id === newItem.id );
            state.totalQuantity++;
            if (!exists) {
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title});
            } else {
                exists.quantity+=1;
                exists.totalPrice+=newItem.price;
            }
            console.log(JSON.stringify(state.items))
        },
        removeItemFromCart(state, action) {
            const id = action.payload.id;
            state.totalQuantity--;
            console.log(JSON.stringify(state.items))

            let exists = state.items.find(item => {
                console.log('item: ' + JSON.stringify(item))
                console.log('item id: ' + item.id)
                console.log(' id: ' + id)
                console.log(' item id === id: ' + item.id === id)

                return item.id === id;
            } );
            console.log('exists : ' +JSON.stringify(exists))
            if (exists.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                exists.quantity-=1;
                exists.totalPrice-=exists.price;
            }

        }
    }

});

export const cartActions = cartSlice.actions;
export default cartSlice;