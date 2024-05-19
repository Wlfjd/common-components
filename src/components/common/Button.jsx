import React from 'react';

import styled from 'styled-components';

function Button({ children, onClick, ...props }) {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  background: "#02aba8",
  color: "white",
  border: "none",
  padding: "10px",
  borderradius: "8px",
  fontWeight: "normal",
  fontSize: "1rem",
};

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderradius};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;
