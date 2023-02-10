import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { SiSurveymonkey } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useParams } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Wrap>
      <ul>
        <li>
          <Link to={"/"}>
            <AiOutlineHome className={"icon"} id="main" />
            <p>홈</p>
          </Link>
        </li>
        <li>
          <Link to={"/suggest"}>
            <SiSurveymonkey className={"icon"} id="suggest" />
            <p>몽키추천</p>
          </Link>
        </li>{" "}
        <li>
          <Link to={"/favor"}>
            <AiFillHeart className={"icon"} id="favor" />
            <p>관심상품</p>
          </Link>
        </li>
        <li>
          <Link to={"/mypage"}>
            <CgProfile className={"icon"} id="mypage" />
            <p>마이페이지</p>{" "}
          </Link>
        </li>
      </ul>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 500px;
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  padding-top: 10px;
  border-top: 1px solid var(--color-lightgray);
  cursor: pointer;
  ul {
    display: flex;
    li {
      color: var(--color-gray);
      font-size: 12px;
      font-weight: 600;
      width: 25%;
      text-align: center;
      cursor: pointer;
      .icon {
        width: 100%;
        font-size: 20px;
        margin-bottom: 5px;
      }
      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

export default Navbar;
