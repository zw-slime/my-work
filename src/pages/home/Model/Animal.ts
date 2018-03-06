export interface Animal {
  id: number;
  img: string;
  title: string;
  desc: string;
  detail: string;
  tag: string;
}

export type AnimalList = Array<{ title: string, content: Animal[] }>
