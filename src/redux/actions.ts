import {
  SET_TEXT_FIELD_VALUE,
  SET_NUMBER_FIELD_VALUE,
  SetTextFieldValue,
  SetNumberFieldValue,
  ADD_FORM,
  addForm
} from './types';

export const setTextFieldValue = (
  payload: SetTextFieldValue['payload']
): SetTextFieldValue => ({
  type: SET_TEXT_FIELD_VALUE,
  payload
});

export const setNumberFieldValue = (
  payload: SetNumberFieldValue['payload']
): SetNumberFieldValue => ({
  type: SET_NUMBER_FIELD_VALUE,
  payload
});

export const addForms = (payload: addForm['payload']): addForm => ({
  type: ADD_FORM,
  payload
});
