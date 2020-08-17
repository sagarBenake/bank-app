// import axios from 'axios';
import {LOGGEDINCUSTOMER} from '../../ActionType';

export const updateAuthStatus = (val) => {
    return { type: LOGGEDINCUSTOMER, payload: val };
};


