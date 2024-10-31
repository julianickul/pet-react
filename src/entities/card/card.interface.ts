interface IPerson {
  name: string;
  about: string;
  avatar: string;
  _id: string;
  cohort: string;
}
export interface ICard {
  likes: IPerson[];
  _id: string;
  name: string
  link: string
  owner: IPerson;
  createdAt: string;
}
