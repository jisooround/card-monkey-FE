import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import CardDetail from "../components/Detail/CardDetail";

type Props = {};

const Detail = (props: Props) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({} as CardInfo);
  const { id } = useParams();

  useEffect(() => {
    const getCardInfo = async () => {
      const data = await getTokenApi.cardDetail(id);
      setCardInfo(data);
    };
    getCardInfo();
  }, [id]);

  return (
    <Wrapper>{cardInfo && <CardDetail card={cardInfo}></CardDetail>}</Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: var(--margin-bottom);
`;

export default Detail;
