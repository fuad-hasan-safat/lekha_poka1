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

export type Post ={
  id: string,
  title: string,
  caltion: string,
  discription: string,
  image: string,
}
export interface Posts {
  post: Post[];
}
