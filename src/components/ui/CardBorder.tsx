import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {};

const CardBorder = (props: PropsWithChildren) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-gray);
  border-radius: 14px;
`;

export default CardBorder;
