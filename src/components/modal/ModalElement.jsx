import React from 'react';

import LargePrimaryButton from '../button/Large Primary Button';
import MediumButton from '../button/MediumButton';
import Modal from './Modal';
import useToggle from './useToggle';

function ModalElement() {
  const { isOpen, toggle } = useToggle();
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <MediumButton title="Open Modal" onClick={toggle} />
      {isOpen && <Modal toggle={toggle} />}
      <LargePrimaryButton primaryColor="#f2a5a5" />
    </div>
  );
}

export default ModalElement;
