import React from 'react';
import { Field } from '../redux/types';
import TextField from './TextField';
import NumberField from './NumberField';

type Props = {
  field: Field;
};

const FieldRenderer: React.FC<Props> = ({ field }) => {
  switch (field.type) {
    case 'text':
      return (
        <TextField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );

    case 'number':
      return (
        <NumberField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );

    default:
      throw new Error(`Unknown field type: ${field.type}`);
  }
};

export default FieldRenderer;
