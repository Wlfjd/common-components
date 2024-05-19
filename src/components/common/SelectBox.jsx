import React, { useState } from 'react';

import styled from 'styled-components';

const StSelectBox = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  background: #eeeeee;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const StOptionBox = styled.div`
  border: 1px solid #cacaca;
  background-color: #ffffff;
  border-radius: 10px;
`;

const StTitle = styled.div`
  border-bottom: ${(props) => props.borderBottom};
  padding: 10px 16px;
`;

const OPTIONS = [
  { id: 0, title: "one" },
  { id: 1, title: "two" },
  { id: 2, title: "three" },
  { id: 3, title: "four" },
  { id: 4, title: "five" },
];

function SelectBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleOptionOpenStatus = () => {
    setIsOpen((prev) => !prev);
  };

  const getTitleById = (id) => {
    const item = OPTIONS.find((item) => item.id === id);
    return item?.title || null;
  };

  const onSelectOption = (index) => {
    toggleOptionOpenStatus();
    const newOption = getTitleById(index);
    setSelectedOption(newOption);
  };

  return (
    <div style={{ display: "block", width: "fit-content" }}>
      <StSelectBox onClick={toggleOptionOpenStatus}>
        <div>{selectedOption || "선택하세요"}</div>
        <div>▼</div>
      </StSelectBox>
      {isOpen && (
        <StOptionBox>
          {OPTIONS.map((option, idx) => (
            <StTitle
              onClick={() => onSelectOption(idx)}
              borderBottom={`${
                idx === OPTIONS.length - 1 ? "" : "1px solid #cacaca"
              }`}
            >
              {option.title}
            </StTitle>
          ))}
        </StOptionBox>
      )}
    </div>
  );
}

export default SelectBox;
