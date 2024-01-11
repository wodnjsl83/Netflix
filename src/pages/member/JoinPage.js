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
                alert("핸드폰 번호를 입력해주세요.");
                setFormData({
                  ...formData,
                  m_phone: "",
                });
              }
            } else {
              alert("이메일을 다시 입력해주세요");
              setFormData({
                ...formData,
                m_email: "",
              });
            }
          } else {
            alert("비밀번호와 비밀번호 확인이 일치 하지않습니다");
            setFormData({
              ...formData,
              m_passch: "",
            });
          }
        } else {
          alert("8자리 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.");
          setFormData({
            ...formData,
            m_pass: "",
          });
        }
      } else {
        alert("이름을 입력해주세요.");
        setFormData({
          ...formData,
          m_name: "",
        });
      }
    } else {
      alert("아이디를 다시 입력해주세요");
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
      <h2>회원가입</h2>
      <div className="joinpg">
        <form onSubmit={onSubmit} className="formStyle">
          <ul>
            <li>
              * 아이디<label>(필수)</label>
            </li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="아이디는 최소 8자리이상 입력해주세요."
                name="m_id"
                value={formData.m_id}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>
              * 이름<label>(필수)</label>
            </li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="이름을 입력해주세요."
                name="m_name"
                value={formData.m_name}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>
              * 비밀번호<label>(필수)</label>
            </li>
            <li>
              <input
                className="inputBox"
                type="password"
                name="m_pass"
                value={formData.m_pass}
                onChange={onChange}
                placeholder="8자리 이상, 영문 대,소문자+숫자+특수문자 조합"
              />
            </li>
          </ul>
          <ul>
            <li>* 비밀번호 체크</li>
            <li>
              <input
                className="inputBox"
                type="password"
                name="m_passch"
                value={formData.m_passch}
                onChange={onChange}
                OnpwCh={OnpwCh}
                placeholder="비밀번호와 동일하게 입력해주세요."
              />
            </li>
          </ul>
          <ul>
            <li>
              * 이메일<label>(필수)</label>
            </li>
            <li>
              <input
                className="inputBox"
                type="text"
                placeholder="E-mail@.com 형식으로 맞게 입력해주세요."
                name="m_email"
                value={formData.m_email}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>
              * 전화번호<label>(필수)</label>
            </li>
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
            <li>* 주소</li>
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
                placeholder="상세주소"
                onChange={onChange}
              />
              <button className="postcode" type="button" onClick={openPostCode}>
                우편번호 찾기
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
            <button type="submit">가입</button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
