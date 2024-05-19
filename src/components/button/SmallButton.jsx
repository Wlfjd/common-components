import React from 'react';

import Button from '../common/Button';

function SmallButton({ title, onClick, background }) {
  return (
    <Button
      border="none"
      padding="10px 20px"
      fontSize="12px"
      fontWeight={600}
      background={background}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default SmallButton;
