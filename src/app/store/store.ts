export const CHANGE_SIGN_IN = 'CHANGE_SIGN_IN';

export interface IAppState {
    signedIn: boolean;
}

export const INITIAL_STATE: IAppState = {
    signedIn: null
};

export function rootReducer(state, action) {
    switch (action.type) {
        case CHANGE_SIGN_IN: return Object.assign({}, state, {
            signedIn: action.signedIn
        });
    }
    return state;
}
