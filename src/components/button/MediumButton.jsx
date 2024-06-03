import React from 'react';

import Button from '../common/Button';

function MediumButton({ title, background, onClick }) {
  return (
    <Button
      padding="15px 30px"
      border="none"
      fontWeight={600}
      fontSize="14px"
      background={background}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default MediumButton;
