import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "../pages/css/JoinPage.css";

const PopupPostCode = (props) => {
  const [visible, setVisible] = useState(true);
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    setVisible(false);
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    props.onAddData(data);
    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "60%",
    left: "53%",
    transform: "translate(-60%,-53%)",
    width: "100%",
    maxWidth: "400px",
    height: "500px",
    padding: "7px",
    border: "2px solid #666",
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      <button
        style={{ display: visible ? "block" : "none" }}
        onClick={() => {
          props.onClose();
        }}
        className="postCode_btn"
      >
        CLOSE X
      </button>
    </div>
  );
};

export default PopupPostCode;
