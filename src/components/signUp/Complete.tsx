import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Complete = (props: Props) => {
  return (
    <div>
      Complete
      <Link to={"/login"}>
        <div>로그인 하러가기</div>
      </Link>
    </div>
  );
};

export default Complete;
