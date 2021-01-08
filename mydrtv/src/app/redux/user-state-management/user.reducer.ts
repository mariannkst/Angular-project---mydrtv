import * as UserActions from './user.actions';
import {UserModel} from '../../models/user.model';

const initialState = new UserModel(null, null, null, null, null, null);

export function userReducer(
    state = initialState,
    action: UserActions.UserActions) {
    switch (action.type) {
        case UserActions.LOG_IN:
            return {
                ...state,
                ...action.payload
            };
        case UserActions.GET_USERNAME:
            return {
              ...state,
              ...action.payload
            };
        default:
            return state;
    }
}
