import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { SiSurveymonkey } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useParams } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";

type Props = {
  scroll: boolean;
};

const Navbar = (props: Props) => {
  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname === "/search") return null;
  if (pathname === "/login") return null;
  return (
    <Wrap>
      <ul>
        <li>
          <Link to={"/"}>
            <div className={pathname === "/" ? "icon" : "basic"}>
              <AiOutlineHome />
              <p>홈</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/suggest"}>
            <div className={pathname === "/suggest" ? "icon" : "basic"}>
              <SiSurveymonkey />
              <p>몽키추천</p>
            </div>
          </Link>
        </li>{" "}
        <li>
          <Link to={"/favor"}>
            <div className={pathname === "/favor" ? "icon" : "basic"}>
              <AiFillHeart />
              <p>관심상품</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/mypage"}>
            <div className={pathname === "/mypage" ? "icon" : "basic"}>
              <CgProfile />
              <p>마이페이지</p>
            </div>
          </Link>
        </li>
      </ul>
      {props.scroll ? (
        <BtnTop
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="background"></div>
          <SlArrowUp size={30} className={"svg"} />
        </BtnTop>
      ) : (
        ""
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 500px;
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  padding-top: 10px;
  border-top: 1px solid var(--color-lightgray);
  background-color: var(--color-white);
  cursor: pointer;
  ul {
    display: flex;
    li {
      width: 25%;
      text-align: center;
      cursor: pointer;
      a {
        text-decoration: none;
      }
      .icon {
        width: 100%;
        font-size: 20px;
        margin-bottom: 5px;
        color: var(--color-primary);
        p {
          font-size: 12px;
          font-weight: 600;
        }
      }
      .basic {
        width: 100%;
        font-size: 20px;
        margin-bottom: 5px;
        color: var(--color-gray);
        &:hover {
          color: var(--color-primary);
        }
        p {
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;

const BtnTop = styled.div`
  position: absolute;
  right: 38px;
  bottom: 80px;
  height: 50px;
  width: 50px;
  transition: 0.5s;
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  color: var(--color-primary);
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export default Navbar;
