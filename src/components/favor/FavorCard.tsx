import React, { useState } from "react";
import styled from "styled-components";
import Card from "../ui/Card";

type Props = {
  favorCard: object;
  company: string;
  id: number;
  image: string;
  name: string;
};

const FavorCard = (props: Props) => {
  return (
    <Card>
      <Container>FavorCard</Container>
    </Card>
  );
};

const Container = styled.div`
  img {
    height: 45px;
    margin-right: 30px;
    aspect-ratio: auto 1/1;
  }
`;
export default FavorCard;
