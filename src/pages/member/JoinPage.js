import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../config/apiurl";
import { useNavigate } from "react-router-dom";
import "../css/JoinPage.css";
import PopupPostCode from "../../components/PopupPostCode";
import PopupDom from "../../components/PopupDom";

const JoinPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    m_id: "",
    m_name: "",
    m_pass: "",
    m_passch: "",
    m_email: "",
    m_phone: "",
    m_address1: "",
    m_address2: "",
  });
  //인풋에 값을 입력하면 name 값과 value 에 맞춰서 기본상태 (setForm 상태를 변환시켜줌)
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // 팝업창 상태관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  // 주소 넣기
  const onAddData = (data) => {
    console.log(data);
    setFormData({
      ...formData,
      m_address1: data.address,
    });
  };
  useEffect(() => {
    if (formData.m_phone.length === 11) {
      setFormData({
        ...formData,
        m_phone: formData.m_phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    } else if (formData.m_phone.length === 13) {
      setFormData({
        ...formData,
        m_phone: formData.m_phone
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [formData.m_phone]);

  const onSubmit = (e) => {
    e.preventDefault();
    //입력이 다 되었는지 체크
    const reg1 = /^[a-z0-9A-Z]{8,45}$/;
    const reg2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,45}$/;
    const reg4 =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (reg1.test(formData.m_id) && formData.m_id !== "") {
      console.log("ok");
      //비밀번호 확인
      if (formData.m_name !== "") {
        console.log("nameok");
        if (formData.m_password !== "" && reg2.test(formData.m_pass)) {
          console.log("passok");
          if (formData.m_pass === formData.m_passch) {
            console.log("passchok");
            if (reg4.test(formData.m_email)) {
              console.log("emailok");
              if (formData.m_phone.length === 13) {
                console.log("ok");

                if (formData.m_address1 !== "" && formData.m_address2 !== "") {
                  console.log("addressok");
                  addMember();
                } else {
                  setFormData({
                    ...formData,
                    m_address1: "",
                    m_address2: "",
                  });
                }
              } else {
                alert("Please enter your cell phone number.");
                setFormData({
                  ...formData,
                  m_phone: "",
                });
              }
            } else {
              alert("Please re-enter your email");
              setFormData({
                ...formData,
                m_email: "",
              });
            }
          } else {
            alert("Password and password verification don't match");
            setFormData({
              ...formData,
              m_passch: "",
            });
          }
        } else {
          alert(
            "Use at least 8 English uppercase, lowercase letters, numbers, and special characters."
          );
          setFormData({
            ...formData,
            m_pass: "",
          });
        }
      } else {
        alert("Please enter a name.");
        setFormData({
          ...formData,
          m_name: "",
        });
      }
    } else {
      alert("Please enter your ID again");
      setFormData({
        ...formData,
        m_id: "",
      });
    }
  };
  const addMember = () => {
    console.log("호출");
    axios
      .post(`${API_URL}/join`, formData)
      .then((res) => {
        navigate("/Login");
      })
      .catch((e) => {
        console.log("에러 발생");
        console.log(e);
      });
  };
  const OnpwCh = () => {
    const userPw = document.querySelector(".m_pass");
    const userpwCh = document.querySelector(".m_passch");
    const passInform = document.querySelector(".passInform");
    userpwCh.addEventListener("keyup", function () {
      if (userPw.value !== userpwCh.value) {
        passInform.innerHTML = "비밀번호가 일치하지 않습니다.";
        console.log("비밀번호가 일치하지 않습니다.");
      } else {
        passInform.innerHTML = "비밀번호가 일치합니다.";
        console.log("비밀번호가 일치합니다.");
      }
    });
  };
  return (
    <div className="join">
      <a href="/" className="hd-a">
        <img src="images/logo.png" />
      </a>
      <div className="joinpg">
        <form onSubmit={onSubmit} className="formStyle">
          <ul>
            <li>* ID</li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="Please enter at least eight digits."
                name="m_id"
                value={formData.m_id}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>* NAME</li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="Please enter name."
                name="m_name"
                value={formData.m_name}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>* PASSWORD</li>
            <li>
              <input
                className="inputBox"
                type="password"
                name="m_pass"
                value={formData.m_pass}
                onChange={onChange}
                placeholder="At least 8 digits, English case, case + number + special character combination"
              />
            </li>
          </ul>
          <ul>
            <li>* CHECK PASSWORD</li>
            <li>
              <input
                className="inputBox"
                type="password"
                name="m_passch"
                value={formData.m_passch}
                onChange={onChange}
                OnpwCh={OnpwCh}
                placeholder="Please enter the same password."
              />
            </li>
          </ul>
          <ul>
            <li>* E-MAIL</li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="Please enter the E-mail@.com format."
                name="m_email"
                value={formData.m_email}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>* PHONE NUMBER</li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="010-0000-0000"
                name="m_phone"
                value={formData.m_phone}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul className="address">
            <li>* ADDRESS</li>
            <li>
              <input
                type="text"
                name="m_address1"
                value={formData.m_address1}
                onChange={onChange}
              />
              <input
                type="text"
                name="m_address2"
                value={formData.m_address2}
                placeholder="Detailed address"
                onChange={onChange}
              />
              <button className="postcode" type="button" onClick={openPostCode}>
                FIND ZIP CODE
              </button>
              <div id="popupDom">
                {isPopupOpen && (
                  <PopupDom>
                    <PopupPostCode
                      onClose={closePostCode}
                      onAddData={onAddData}
                    />
                  </PopupDom>
                )}
              </div>
            </li>
          </ul>
          <ul className="joinbtn">
            <button type="submit">JOIN</button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
