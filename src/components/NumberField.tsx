import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import NumericInput from 'react-numeric-input';

import FieldHeader from './FieldHeader';
import { setNumberFieldValue } from '../redux/actions';

type Props = {
  fieldId: string;
  fieldName: string;
  value: number;
};

const NumberField: React.FC<Props> = ({ fieldId, fieldName, value }) => {
  const dispatch = useDispatch();

  const setValue = useCallback(
    newValue => {
      dispatch(setNumberFieldValue({ fieldId, value: newValue }));
    },
    [dispatch, fieldId]
  );

  return (
    <div className="fields-container">
      <FieldHeader name={fieldName} />
      <div>
        <NumericInput className="field" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default NumberField;
