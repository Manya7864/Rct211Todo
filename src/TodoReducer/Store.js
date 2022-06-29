import { legacy_createStore, combineReducers } from 'redux';
import { todoReducer } from '../TodoReducer/Todo.Reducer';
import { authReducer } from '../AuthReducer/Auth.Reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer);