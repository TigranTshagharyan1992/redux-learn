import {configureStore, combineReducers, createAction, createReducer} from "@reduxjs/toolkit";

// action creators

export const addCash = createAction("ADD_CASH");
export const getCash = createAction("GET_CASH");
export const addCustomer = createAction("ADD_CUSTOMER");
export const removeCustomer = createAction("REMOVE_CUSTOMER");
export const addApiCustomers = createAction("ADD_API_CUSTOMERS");


// reducers

const cashReducer = createReducer({cash: 50000},{
    [addCash]: function (state,action) {
        state.cash = state.cash + action.payload;
    },
    [getCash]: function (state,action) {
        state.cash = state.cash - action.payload
    },
});

const customerReducer = createReducer({customers: []} , {
    [addCustomer]: function (state,action) {
        state.customers = [...state.customers, action.payload]
    },
    [removeCustomer]: function (state,action) {
        state.customers = state.customers.filter(customer => customer.id !== action.payload)
    },
    [addApiCustomers]: function (state,action) {
        state.customers = [...state.customers, ...action.payload]
    }
});
const rootReducer = combineReducers({
    cashReducer, customerReducer
})


export const  store = configureStore({
    reducer: rootReducer,
})