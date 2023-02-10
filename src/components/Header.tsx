import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { FcWiFiLogo } from "react-icons/fc";
import { useNavigate } from "react-router";

type HeaderPropsType = {};

const Header = ({}: HeaderPropsType) => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleLogout = () => {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      navigate("/"); // 여기 수정
    }
  };

  const handleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  return (
    <MonkeyHeader>
      <NavContainer>
        <LogoWrapper onClick={() => navigate("/")}>
          <FcWiFiLogo />
        </LogoWrapper>
        <Icons>
          <SearchIconWrap>
            <AiOutlineSearch onClick={handleSearch} />
          </SearchIconWrap>
          <LogoutIconWrap onClick={handleLogout}>
            <TbLogout />
          </LogoutIconWrap>
        </Icons>
      </NavContainer>
      <SearchContainer>하이</SearchContainer>
    </MonkeyHeader>
  );
};

const MonkeyHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
`;

const NavContainer = styled.div`
  /* 상태에 따라 디스플레이 블록 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 60px;
    height: 60px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const SearchIconWrap = styled.div`
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const LogoutIconWrap = styled.div`
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  /* display: none; 여기 상태에 따라서 다르게 */
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  /* width: 100%; */
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  opacity: 0.8;
`;

export default Header;
