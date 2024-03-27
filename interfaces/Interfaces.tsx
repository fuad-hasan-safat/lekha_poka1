import { SetStateAction } from 'react'
export interface LogoProps {
  icon: string;
  width: number;
  height: number;
  alt: string;
}

export interface starObject {
  star: number;
  width: number;
  height: number;
  alt: string;
}

export interface lekhaPokaProfileObj {
  image: string;
  id: string;
  title: string;
  writer: string;
  star: number;
}

export interface lekhokObj {
  image: string;
  id: string;
  writer: string;
  lifeCycle: string;
}

export interface ProcchodButtonProps  {
  selectedId: string;
  setSelectedId: React.Dispatch<SetStateAction<string>>;
};


export interface buttonItem extends ProcchodButtonProps {
  id: string;
  height: number;
  weidth: number;
  txt: string;
  
}

export interface mainContaintPost {
  id: string;
  title: string;
  writer: string;
  content: string;
}

export interface LoogedInUser {
  status: string;
  name: string;
  phone: string;
  uuid: string;
  // Other user properties
}