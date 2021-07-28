import React, { useCallback } from 'react';
import FieldHeader from './FieldHeader';
import { setTextFieldValue } from '../redux/actions';
import { useDispatch } from 'react-redux';

type Props = {
  fieldId: string;
  fieldName: string;
  value: string;
};

const TextField: React.FC<Props> = ({ fieldId, fieldName, value }) => {
  const dispatch = useDispatch();

  const setValue = useCallback(
    e => {
      dispatch(setTextFieldValue({ fieldId, value: e.target.value }));
    },
    [dispatch]
  );

  return (
    <div className="fields-container">
      <FieldHeader name={fieldName} />
      <input className="field" onChange={setValue} value={value} />
    </div>
  );
};

export default TextField;
