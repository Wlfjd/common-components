import React from 'react';

function SectionWrapper({ title, children }) {
  return (
    <div style={{ padding: "10px 16px " }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default SectionWrapper;
