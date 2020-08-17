import { LOGGEDINCUSTOMER } from '../../ActionType';

const initial_state={
    isAuthenticate:false,
    customerInfo:[],
    showLoader:false
}

const CustomerInfoReducer = (state = initial_state, action) => {
    switch (action.type) {
        case LOGGEDINCUSTOMER:
            return ({ ...state, isAuthenticate: action.payload, showLoader: false });
            break;
    }
    return state;
}


export default CustomerInfoReducer;
