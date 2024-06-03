import React from 'react';

import SmallButton from '../button/SmallButton';

function Modal({ toggle }) {
  return (
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
            <SmallButton title="close" onClick={toggle} />
            <SmallButton
              title="confirm"
              onClick={() => alert("확인을 클릭하였습니다")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
