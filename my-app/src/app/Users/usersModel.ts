import { HttpParams } from "@angular/common/http";

export class UsersModel {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  userrole: string;
  _id: string;
  password: string;
  index: number;
}


export class userResponseModel {
  users: UsersModel[];
  success: boolean;
  msg: string;
}

export class userFilterModel {
  _id: string;
  userrole: string;
  username: string;
}
