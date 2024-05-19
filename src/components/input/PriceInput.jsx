import React, { useState } from 'react';

import Input from '../common/Input';

function PriceInput() {
  const [price, setPrice] = useState(0);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    const valueToString = value.replace(/,/g, "");
    const newValue = parseInt(valueToString).toLocaleString();
    setPrice(newValue);
  };

  return (
    <Input label="price" type="text" value={price} onChange={onChangeHandler} />
  );
}
export default PriceInput;
