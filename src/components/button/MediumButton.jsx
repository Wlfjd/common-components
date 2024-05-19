import React from 'react';

import Button from '../common/Button';

function MediumButton({ title, background }) {
  return (
    <Button
      padding="15px 30px"
      border="none"
      fontWeight={600}
      fontSize="14px"
      background={background}
    >
      {title}
    </Button>
  );
}

export default MediumButton;
