import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import getTokenApi from "../api/monkeyGetToken";
import CardDetail from "../components/Detail/CardDetail";
import NotFound from "./NotFound";

type Props = {};

const Detail = (props: Props) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({} as CardInfo);
  const { pathname } = useLocation();

  const getLocation = () => {
    const splitUrl = pathname?.split("/") ?? null;
    const location = splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : "";
    return location;
  };

  useEffect(() => {
    const location = getLocation();
    const getCardInfo = async () => {
      const data = await getTokenApi.cardDetail(location);
      setCardInfo(data);
    };
    getCardInfo();
  }, [pathname]);

  if (cardInfo === undefined) return <NotFound />;

  return (
    <Wrapper>{cardInfo && <CardDetail card={cardInfo}></CardDetail>}</Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: var(--margin-bottom);
`;

export default Detail;
