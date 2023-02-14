import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import getTokenApi from "../api/monkeyGetToken";
import CardDetail from "../components/Detail/CardDetail";

export type CardInfo = {
  benefit: string[];
  company: string;
  id: number;
  image: string;
  name: string;
};

type Props = {};

const Detail = (props: Props) => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);
  const { pathname } = useLocation();
  useEffect(() => {
    const splitUrl = pathname?.split("/") ?? null;
    const location = splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : "";
    const getCardInfo = async () => {
      const data = await getTokenApi.cardDetail(location);
      console.log(data);
      setCardInfo(data);
    };
    getCardInfo();
  }, [pathname]);

  return (
    <div>
      <CardDetail card={cardInfo}></CardDetail>
    </div>
  );
};

export default Detail;
