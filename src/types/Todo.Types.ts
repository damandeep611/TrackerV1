export interface Todo {
  _id: string;
  tag: string;
  title: string;
  description: string;
  date: Date;
  duration: string;
  progress: number;
}