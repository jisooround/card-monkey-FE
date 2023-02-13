import React from "react";
import styled from "styled-components";

type Props = {};

const Login = (props: Props) => {
  return (
    <Container>
      <Inner>
        <h3>로그인</h3>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <h2>
          안녕하세요.
          <br />
          카드몽키입니다.
        </h2>
        <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
        <form action="">
          <label htmlFor="id">
            아이디
            <input type="text" id="id" />
          </label>
          <label htmlFor="pwd">
            비밀번호
            <input type="password" id="pwd" />
          </label>
        </form>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Inner = styled.div`
  margin: auto;
  width: var(--width-inner);
  min-height: 100vh;
  /* background-color: #f0f0f0; */
  h3 {
    padding-top: 72px;
    padding-bottom: 43px;
    font-size: 28px;
    font-weight: 300;
  }
  .logo {
    color: var(--color-black);
    width: 120px;
    height: 87px;
    border-radius: 20px;
    background-color: #dcdcdc;
  }
  h2 {
    color: var(--color-black);
    padding: 22px 0;
    font-size: 28px;
    line-height: 1.3;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: var(--color-black);
  }
  form {
    padding-top: 72px;
    width: 100%;
    label {
      width: 100%;
      display: flex;
      input {
        width: 80%;
      }
    }
  }
`;

export default Login;
