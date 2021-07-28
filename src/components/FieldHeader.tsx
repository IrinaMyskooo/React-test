import React from 'react';

type Props = {
  name: string;
};

const FieldHeader: React.FC<Props> = ({ name }) => {
  return <h4 className="field-header">{name}</h4>;
};

export default React.memo(FieldHeader);
