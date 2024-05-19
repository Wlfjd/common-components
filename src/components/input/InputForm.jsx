import React, { useState } from 'react';

import SmallButton from '../button/SmallButton';
import Input from '../common/Input';

function InputForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onPriceChangeHandler = (e) => {
    const { value } = e.target;
    const valueToString = value.replace(/,/g, "");
    const newValue = parseInt(valueToString).toLocaleString();
    setPrice(newValue);
  };

  const resetInputValue = () => {
    setName("");
    setPrice("");
  };

  const onSave = () => {
    alert(`name: ${name} price: ${price}`);
    resetInputValue();
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "baseline",
      }}
    >
      <Input
        label="name"
        type="text"
        value={name}
        onChange={onNameChangeHandler}
      />
      <Input
        label="price"
        type="text"
        value={price}
        onChange={onPriceChangeHandler}
      />
      <SmallButton title="save" onClick={onSave} />
    </div>
  );
}

export default InputForm;
