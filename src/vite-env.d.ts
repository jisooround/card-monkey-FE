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
  benefit: string;
  company: string;
  id: number;
  image: string;
  name: string;
  type: string;
}
