/// <reference types="vite/client" />

interface Card {
  id: number;
  name: string;
  company: string;
  image: string;
  type: string;
  benefit?: string;
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
  benefit: Array<string>;
}

interface loginType {
  userId: string;
  password: string;
}
