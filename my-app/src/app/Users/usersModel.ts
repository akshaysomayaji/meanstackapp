export class UsersModel {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  userrole: string;
  _id: string;
  password: string;
}


export class userResponseModel {
  users: UsersModel[];
  success: boolean;
  msg: string;
}

export class userFilterModel {
  id: string;
  userrole: string;
  username: string;
}
