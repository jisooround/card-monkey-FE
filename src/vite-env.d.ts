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
  message: string[] | undefined;
}

interface State {
  id: number;
  message: string[];
  status: "idle" | "loading" | "failed";
}

interface Argument {
  id: number;
  selectedReview: string[];
}

interface BenefitProps {
  item: string;
}

interface signType {
  userId: string;
  password: string;
  name: string;
  benefit: Array<string>;
}

interface loginType {
  userId: string;
  password: string;
}

interface Button {
  color: string;
  background: string;
}
