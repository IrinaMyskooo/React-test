import { combineReducers } from 'redux';
import fields, {FormState as FieldsState} from './fields'


export type GlobalState = {
    fields: FieldsState
};

export default combineReducers({
  fields
});
