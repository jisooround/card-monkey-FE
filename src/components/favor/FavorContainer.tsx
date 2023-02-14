import React, { useEffect } from "react";
import getTokenApi from "../../api/monkeyGetToken";
import styled from "styled-components";
import Card from "../ui/Card";

type Props = {
  favorList: object;
};

const FavorContainer = (props: Props) => {
  const favorList = async () => {
    const data = await getTokenApi.myFavor();
    console.log(data);
  };
  useEffect(() => {
    favorList();
  }, []);

  return (
    <Wrapper>
      <Card>
        <FavorCard>
          <img src="https://api.card-gorilla.com:8080/storage/card/2330/card_img/24131/2330card.png" />
        </FavorCard>
      </Card>
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

const FavorCard = styled.div`
  img {
    height: 45px;
    margin-right: 30px;
    aspect-ratio: auto 1/1;
  }
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

export default FavorContainer;
