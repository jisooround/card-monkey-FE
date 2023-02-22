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
interface selectedReview {
  message: string;
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

interface width {
  width: number;
  height: number;
}
interface Size {
  size: number;
}
