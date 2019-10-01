export const typeDefs = ["type ReadBoardOneResponse {\n  ok: Boolean!\n  error: String\n  board: Board\n}\n\ntype Query {\n  ReadBoardOne: ReadBoardOneResponse!\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n}\n\ntype Board {\n  no: Int!\n  title: String!\n  body: String\n  file: String\n  create: Int!\n  createDate: String!\n  update: Int!\n  updateDate: String!\n}\n\ntype Chat {\n  id: Int!\n  messages: [Message]\n  participants: [User]\n  cratedAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  user: User!\n  cratedAt: String!\n  updatedAt: String\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  cratedAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLAt: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  driver: User!\n  passenger: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CompletePhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  CompletePhoneVerification(phoneNumber: String!, key: String!): CompletePhoneVerificationResponse!\n  SignIn(id: String!, password: String!): SignInResponse!\n  StartPhoneVerification(phoneNumber: String!): StartPhoneVerificationResponse!\n}\n\ntype User {\n  no: Int!\n  id: String!\n  name: String!\n  password: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype StartPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  cratedAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  ReadBoardOne: ReadBoardOneResponse;
  sayBye: string;
  sayHello: SayHelloResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface ReadBoardOneResponse {
  ok: boolean;
  error: string | null;
  board: Board | null;
}

export interface Board {
  no: number;
  title: string;
  body: string | null;
  file: string | null;
  create: number;
  createDate: string;
  update: number;
  updateDate: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface Mutation {
  CompletePhoneVerification: CompletePhoneVerificationResponse;
  SignIn: SignInResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
}

export interface CompletePhoneVerificationMutationArgs {
  phoneNumber: string;
  key: string;
}

export interface SignInMutationArgs {
  id: string;
  password: string;
}

export interface StartPhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface CompletePhoneVerificationResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface StartPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface Chat {
  id: number;
  messages: Array<Message> | null;
  participants: Array<User> | null;
  cratedAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  user: User;
  cratedAt: string;
  updatedAt: string | null;
}

export interface User {
  no: number;
  id: string;
  name: string;
  password: string | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  cratedAt: string;
  updatedAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAddress: string;
  dropOffLAt: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
  driver: User;
  passenger: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  cratedAt: string;
  updatedAt: string;
}
