import React, { useState, useEffect } from "react";
import getTokenApi from "../api/monkeyGetToken";
import styled from "styled-components";
import Card from "../components/ui/Card";
import FavorCard from "../components/favor/FavorCard";

type Props = {
  favorList: object;
};

const Favor = (props: Props) => {
  const [favorList, setFavorList] = useState([]);
  const getFavorList = async () => {
    const data = await getTokenApi.myFavor();
    console.log(data);
    setFavorList(data);
  };
  useEffect(() => {
    getFavorList();
  }, []);

  return (
    <Wrapper>
      {favorList.map((favorCard) => (
        <FavorCard favorcard={favorCard} key={favorCard.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 425px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

// const cardImage = new Image();
// cardImage.src = card.image;

// const CardImageWrapper = styled.div<{ cardImage: HTMLImageElement }>`
//   margin-right: 20px;
//   width: 110px;
//   position: relative;
//   img {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//     width: ${(props) =>
//       props.cardImage.width > props.cardImage.height ? "110px" : "75px"};
//   }
//   .circle {
//     width: 110px;
//     height: 110px;
//     border-radius: 50%;
//     background-color: var(--color-lightgray);
//   }
// `;

export default Favor;
