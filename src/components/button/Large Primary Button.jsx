import React from 'react';

import Button from '../common/Button';

function LargePrimaryButton({ primaryColor, icon }) {
  const onClickHandler = () => {
    alert("Make Buttons");
  };

  return (
    <Button
      border={`3px solid ${primaryColor}`}
      background="none"
      color="black"
      padding="15px 30px"
      fontSize="14px"
      fontWeight="800"
      onClick={onClickHandler}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        Large Primary Button
        <img src={icon} alt={icon} />
      </div>
    </Button>
  );
}

export default LargePrimaryButton;
