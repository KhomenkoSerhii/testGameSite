import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../types';

const emptyStore = {
    Name: '',
    Id: '',
    Email: '',
}

const initStore = {
    ...emptyStore
};

export default function reducer(store = initStore, { type, payload }) {
    switch (type) {
        case SIGN_IN_SUCCESS: {
            return {
                ...store,
                ...payload
            };
        }

        case SIGN_OUT_SUCCESS: {
            return emptyStore
        }

        default:
            return store;
    }
}