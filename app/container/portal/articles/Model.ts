export interface Article {
  id: number;
  title: string;
  body?: HTMLAreaElement;
  path?: string;
  createdOn: Date;
  createdBy: string;
}
