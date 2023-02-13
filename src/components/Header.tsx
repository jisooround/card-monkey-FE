import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { FcWiFiLogo } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

type HeaderPropsType = {};

const Header = ({}: HeaderPropsType) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    searchParams.set("q", e.target.value);
    setSearchParams(searchParams);
  };

  const handleLogout = () => {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      navigate("/"); // 여기 수정
    }
  };

  return (
    <MonkeyHeader>
      {pathname !== "/search" ? (
        <NavContainer>
          <LogoWrapper onClick={() => navigate("/")}>
            <FcWiFiLogo />
          </LogoWrapper>
          <Icons>
            <SearchIconWrap>
              <AiOutlineSearch onClick={() => navigate("/search")} />
            </SearchIconWrap>
            <LogoutIconWrap onClick={handleLogout}>
              <TbLogout />
            </LogoutIconWrap>
          </Icons>
        </NavContainer>
      ) : (
        <SearchContainer>
          <SearchBar>
            <SearchClose
              onClick={() => {
                navigate("/");
                setSearchInput("");
              }}
            >
              <AiOutlineLeft />
            </SearchClose>
            <SearchInput>
              <input
                type="text"
                value={searchInput}
                ref={inputRef}
                onChange={handleInput}
                placeholder="검색어를 입력해 주세요"
                autoFocus
              />
              {searchInput.length === 0 ? (
                <AiOutlineSearch />
              ) : (
                <AiOutlineCloseCircle
                  onClick={() => {
                    setSearchInput("");
                    inputRef.current?.focus();
                  }}
                />
              )}
            </SearchInput>
          </SearchBar>
        </SearchContainer>
      )}
    </MonkeyHeader>
  );
};

const MonkeyHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
`;

const NavContainer = styled.div`
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
    cursor: pointer;
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
    color: var(--color-black);
  }
`;
const LogoutIconWrap = styled.div`
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: var(--color-black);
  }
`;

const SearchContainer = styled.div``;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
`;

const SearchClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 38px;
    height: 30px;
    cursor: pointer;
    color: var(--color-black);
  }
`;

const SearchInput = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 5px;
  align-items: center;
  margin: 0 14px 0 10px;
  background-color: #f9f9f9;
  border-radius: 22px;
  height: 30px;
  padding: 7px 11px 7px 16px;
  font-size: 0;

  input {
    height: 28px;
    border: none;
    outline: none;
    background-color: transparent;
    background: transparent;
    width: calc(100% - 28px);
    vertical-align: top;
    font-size: 14px;
  }

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: var(--color-gray);
  }
`;

export default Header;
