import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
        name: "toolkit",
        initialState: {
            cash: 50000,
            customers: []
        },
        reducers: {
            addCash(state,action) {
                state.cash = state.cash + action.payload;
            },
            getCash(state,action) {
                state.cash = state.cash - action.payload
            },
            addCustomer(state,action) {
                state.customers = [...state.customers, action.payload]
            },
            removeCustomer(state,action) {
                state.customers = state.customers.filter(customer => customer.id !== action.payload)
            },
            addApiCustomers(state,action) {
                state.customers = [...state.customers, ...action.payload]
            }
        }
});


const rootReducer = combineReducers({
    toolkitReducer: toolkitSlice.reducer
})
export const  store = configureStore({
    reducer: rootReducer,
})

export const {addCash,getCash,addCustomer,removeCustomer,addApiCustomers} = toolkitSlice.actions;