import { combineReducers, createStore } from 'redux';

import CustomerInfoReducer from './Reducer/CustomeInfoReducer';

const CombineReducer = combineReducers(
    {
        BankingStore: CustomerInfoReducer,
    }
);

export default CombineReducer;