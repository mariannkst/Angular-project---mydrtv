import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const LOG_IN = 'LOG_IN';
export const GET_USERNAME = 'GET_USERNAME';

export class SaveUserInfo implements Action {
    // what does it do tho?
    readonly type = SAVE_USER_INFO;

    constructor(public payload: UserModel) {
    }
}

export class LogIn implements Action {
    readonly type = LOG_IN;

    constructor(public payload: { _id: string; Email: string; Gender: string; History: any[]; Name: string; Password: string }) {
    }
}

export class GetUsername implements Action {
    readonly type = GET_USERNAME;

    constructor(public payload: { Name: string }) {
    }
}

export type UserActions = SaveUserInfo | LogIn | GetUsername;
