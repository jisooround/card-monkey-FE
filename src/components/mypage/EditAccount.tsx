import { useState, useEffect } from "react";
import styled from "styled-components";
import getTokenApi from "../../api/monkeyGetToken";

type Props = {};

export const EditAccount = (props: Props) => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  console.log(userId);
  useEffect(() => {
    const { userId } = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserId(userId);
  }, []);

  const withdrawal = async () => {
    const res = await getTokenApi.withdrawal(userId);
    console.log(res);
  };
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  return (
    <div className="myaccount">
      <div className="user-name">{userInfo.name}님의 정보 수정</div>
      <Form className="inputWrap">
        <div className="group">
          <div className="inputTitle">현재 비밀번호</div>
          <input
            type="password"
            placeholder="현재 비밀번호"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <div className="inputTitle">비밀번호</div>
          <input
            type="password"
            placeholder="새 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <div className="inputTitle">비밀번호 확인</div>
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </div>
        {password !== checkPassword ? (
          <div className="wrong">비밀번호가 일치하지 않습니다.</div>
        ) : null}
        <button
          type="submit"
          disabled={
            password !== checkPassword || checkPassword === "" ? true : false
          }
        >
          비밀번호 변경하기
        </button>
      </Form>
      <div className="delete" onClick={() => withdrawal()}>
        회원탈퇴하기
      </div>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    background-color: white;
    border: none;
    font-weight: 700;
    align-self: flex-end;
    cursor: pointer;
  }
  .wrong {
    margin-bottom: 10px;
    font-size: 12px;
    color: red;
    align-self: flex-end;
  }
`;
