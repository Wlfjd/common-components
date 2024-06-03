import React from 'react';

import ButtonSection from './components/button/ButtonSection';
import SectionWrapper from './components/common/SectionWrapper';
import SelectBox from './components/common/SelectBox';
import InputForm from './components/input/InputForm';
import ModalElement from './components/modal/ModalElement';

function App() {
  return (
    <>
      <SectionWrapper title="Button">
        <ButtonSection />
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
