import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid #b9b9b9;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

function Input({ label, value, onChange, type }) {
  return (
    <InputContainer>
      {label}:
      <StyledInput type={type} value={value} onChange={onChange} />
    </InputContainer>
  );
}

export default Input;
