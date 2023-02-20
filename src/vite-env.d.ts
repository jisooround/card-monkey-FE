/// <reference types="vite/client" />

interface FavorCard {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
  liked: boolean;
  likeCount: number;
}

interface CardInfo {
  benefit: string[];
  company: string;
  id: number;
  image: string;
  name: string;
  type: string;
}

interface getReview {
  id: number;
  message: string[];
}

interface BenefitProps {
  item: string;
}

interface signType {
  userId: string;
  password: string;
  name: string;
}

interface loginType {
  userId: string;
  password: string;
}
