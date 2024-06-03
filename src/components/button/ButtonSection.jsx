import React from 'react';

import arrow from '../../images/arrow.svg';
import bell from '../../images/bell.svg';
import LargePrimaryButton from './Large Primary Button';
import MediumButton from './MediumButton';
import SmallButton from './SmallButton';

function ButtonSection() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "20px",
          marginBottom: "10px",
        }}
      >
        <LargePrimaryButton primaryColor="#b6e7cf" icon={arrow} />
        <MediumButton title="medium" />
        <SmallButton title="small" />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
        <LargePrimaryButton primaryColor="#f2a5a5" icon={bell} />
        <MediumButton title="medium" background="#f88686" />
        <SmallButton title="small" background="#f88686" />
      </div>
    </>
  );
}

export default ButtonSection;
