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

export interface mainContaintButton{
  id: string;
  height: number;
  weidth:number;
  txt:string;
}


export interface mainContaintPost{
  id: string;
  title:string;
  writer:string;
  content:string;
}


// export type Post ={
//   id: string,
//   title: string,
//   caltion: string,
//   discription: string,
//   image: string,
// }
// export interface Posts {
//   post: Post[];
// }
