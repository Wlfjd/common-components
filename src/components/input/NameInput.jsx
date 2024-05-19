import React, { useState } from 'react';

import Input from '../common/Input';

function NameInput({}) {
  const [name, setName] = useState("");
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <Input label="name" type="text" value={name} onChange={onChangeHandler} />
  );
}

export default NameInput;
