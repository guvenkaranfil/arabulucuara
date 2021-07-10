export interface Banner {
  id: number;
  title: string;
  image: string;
  clickUri?: {
    path?: string;
    value?: string;
  };
}

export interface SiteNew {
  title: string;
  content: string;
  createdOn: Date;
  uri: string;
}

export interface NewlyJoinedUser {
  name: string;
  createdOn: Date;
  image?: string;
}

export interface NewlyOperation {
  time: Date;
  user: string;
  operationName: string;
}

export interface NewlyPublishedArticle {
  id: number;
  title: string;
}
