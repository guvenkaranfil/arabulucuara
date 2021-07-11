export interface Article {
  id: number;
  title: string;
  body?: string;
  path?: string;
  createdOn: Date;
  createdBy: string;
}
