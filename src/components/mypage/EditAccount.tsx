import React, { useState } from "react";

type Props = {};

export const EditAccount = (props: Props) => {
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="myaccount">
      <div className="user-name">소재헌님의 정보 수정</div>
      <form className="inputWrap">
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
          />
        </div>
      </form>
    </div>
  );
};
