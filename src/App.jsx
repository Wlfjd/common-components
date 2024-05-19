import React from 'react';

import LargePrimaryButton from './components/button/Large Primary Button';
import MediumButton from './components/button/MediumButton';
import SmallButton from './components/button/SmallButton';
import SectionWrapper from './components/common/SectionWrapper';
import SelectBox from './components/common/SelectBox';
import InputForm from './components/input/InputForm';
import ModalElement from './components/modal/ModalElement';
import arrow from './images/arrow.svg';
import bell from './images/bell.svg';

function App() {
  return (
    <>
      <SectionWrapper title="Button">
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
      </SectionWrapper>
      <SectionWrapper title="Input">
        <InputForm />
      </SectionWrapper>
      <SectionWrapper title="Select">
        <SelectBox />
      </SectionWrapper>
      <SectionWrapper title="Modal">
        <ModalElement />
      </SectionWrapper>
    </>
  );
}

export default App;
