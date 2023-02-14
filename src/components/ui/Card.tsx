import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {};

const Card = (props: PropsWithChildren) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-gray);
  border-radius: 14px;
  :hover {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  }
`;

export default Card;
