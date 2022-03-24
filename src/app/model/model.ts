export interface User {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: string;
  status: Status;
}

export enum Status {
  Active = 'Active',
  Deleted = 'Deleted',
  Inactive = 'Inactive',
}
