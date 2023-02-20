import React, { useEffect, useState } from "react";
import getTokenApi from "../../api/monkeyGetToken";
import { CardType, Empty } from "../../pages/MainPage";
import { MyCards } from "../ui/MyCard";

export const CardLists = () => {
  const [myCard, setMyCard] = useState<Array<CardType>>();
  const [section, setSection] = useState("all");

  useEffect(() => {
    getMyCard();
  }, []);

  const changeSection = (event: any) => {
    setSection(event.target.className);
    console.log(section);
  };

  const getMyCard = async () => {
    const data = await getTokenApi.cardList();
    setMyCard(data);
  };

  return (
    <div className="myaccount">
      <div className="user-name">소재헌님의 카드</div>
      <div className="cards">
        <span
          className="all"
          id={section === "all" ? "primary" : "basic"}
          onClick={changeSection}
        >
          전체카드
        </span>
        <span
          className="credit"
          id={section === "credit" ? "primary" : "basic"}
          onClick={changeSection}
        >
          신용카드
        </span>
        <span
          className="check"
          id={section === "check" ? "primary" : "basic"}
          onClick={changeSection}
        >
          체크카드
        </span>
      </div>
      <div className="list">
        {Array.isArray(myCard) ? (
          myCard.map((data) => (
            <div key={data.id}>
              <MyCards card={data} />
              <div className="cancle">카드 신청 취소</div>
            </div>
          ))
        ) : (
          <Empty>나의 카드 정보가 없습니다.</Empty>
        )}
      </div>
    </div>
  );
};
