import { reducer as form } from 'redux-form';

const formPlugin = {
    formName: (state, action) => {
        ...reducer logic
        return newState;
    }
}

const rootReducer = combineReducers({
    ...other reducers,
    form: form.plugin(formPlugin)
});