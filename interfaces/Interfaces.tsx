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
  // setFilteredData: React.Dispatch<SetStateAction<filttredDataType>>;
  // setPostList: React.Dispatch<SetStateAction<[]>>;
};


export interface buttonItem extends ProcchodButtonProps {
  id: string;
  height: number;
  weidth: number;
  title: string;
  
}

export interface mainContaintPostType {
  id: string;
  title: string;
  writer: string;
  content: string;
}

export interface postObjectType{
    _id: string;
    category: string;
    cat_id: string;
    writer: string;
    writer_id: string;
    title:string;
    content: string;
    rating: number;
    audio: string;
    status: boolean;
    uploaded_by: string;
    __v: number;
}

export interface filttredDataType{
  status: string;
  object:[postObjectType];
}


export interface LoogedInUser {
  status: string;
  name: string;
  phone: string;
  uuid: string;
}