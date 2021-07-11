export interface Announcement {
  id: number;
  title: string;
  createdDate: Date;
}

export interface AnnouncementDetail {
  id: number;
  title: string;
  body?: string;
  path?: string;
  createdOn: Date;
  createdBy: string;
}
