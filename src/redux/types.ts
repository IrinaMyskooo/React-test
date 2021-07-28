export const SET_TEXT_FIELD_VALUE = 'SET_TEXT_FIELD_VALUE' as const;
export const SET_NUMBER_FIELD_VALUE = 'SET_NUMBER_FIELD_VALUE' as const;
export const ADD_FORM = 'ADD_FORM' as const;

export type Field =
  | {
      type: 'text';
      id: string;
      name: string;
      value: string;
    }
  | {
      type: 'number';
      id: string;
      name: string;
      value: number;
    };

export type SetTextFieldValue = {
  type: typeof SET_TEXT_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: string;
    formIndex: number | string;
  };
};

export type SetNumberFieldValue = {
  type: typeof SET_NUMBER_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: number;
    formIndex: number | string;
  };
};

export type addForm = {
  type: typeof ADD_FORM;
  payload: {
    fields: Field;
    fieldId: number;
  };
};

export type Action = SetTextFieldValue | SetNumberFieldValue | addForm;
