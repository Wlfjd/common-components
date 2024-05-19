import React from 'react';

import LargePrimaryButton from '../button/Large Primary Button';
import MediumButton from '../button/MediumButton';
import SmallButton from '../button/SmallButton';

function ModalElement() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <MediumButton title="Open Modal" />
      <div
        style={{
          position: "absolute",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "white",
            width: "60%",
            maxWidth: "500px",
            minHeight: "20%",
            margin: "0 auto",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "30px 20px",
              height: "100%",
              gap: "40px",
              flexDirection: "column",
              alignContent: "stretch",
            }}
          >
            <div>
              There are two close and confirm buttons, and the modal does not
              close when you click the outside area. When pressed the confirm
              button, the log will be shown on console.
            </div>
            <div style={{ display: "flex", alignSelf: "end", gap: "2%" }}>
              <SmallButton title="close" onClick={() => alert("1")} />
              <SmallButton title="confirm" />
            </div>
          </div>
        </div>
      </div>
      <LargePrimaryButton primaryColor="#f2a5a5" />
    </div>
  );
}

export default ModalElement;
