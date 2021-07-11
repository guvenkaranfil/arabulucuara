export interface DataBankCategory {
  id: number;
  name: string;
}

export interface DataBankSubCategory {
  id: number;
  title: string;
  body?: string;
  path?: string;
  createdOn: Date;
  createdBy: string;
}
