export interface User {
  id: string;
  role: "WAITER" | "ADMIN";
}

export interface IUser extends User {
  _id: string;
  name: string;
  email: string;
}
