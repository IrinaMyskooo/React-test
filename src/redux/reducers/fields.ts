import {
  Action,
  SET_TEXT_FIELD_VALUE,
  SET_NUMBER_FIELD_VALUE,
  ADD_FORM,
  Field
} from '../types';

export type FormState = Field[];

export const initialState: FormState[] = [
  [
    {
      type: 'text',
      id: `title`,
      name: `Title`,
      value: 'some title'
    },
    {
      type: 'text',
      id: `description`,
      name: `Description`,
      value: 'some description'
    },
    {
      type: 'text',
      id: `notes`,
      name: `Notes`,
      value: 'some notes'
    },
    {
      type: 'number',
      id: `budget`,
      name: `Budget`,
      value: 40
    }
  ]
];

/* istanbul ignore next */
const reducer = (state: FormState[] = initialState, action: Action) => {
  switch (action.type) {
    case ADD_FORM:
      const {fieldId} = action.payload;
      return [fieldId, ...state, action.payload];
    case SET_NUMBER_FIELD_VALUE:
    case SET_TEXT_FIELD_VALUE: {
      const { formIndex, fieldId, value } = action.payload;

      const newState = [...state];
      newState[formIndex] = newState[formIndex].map(field => {
        if (field.id === fieldId) {
          return {
            ...field,
            value
          };
        }
        return field;
      });

      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
