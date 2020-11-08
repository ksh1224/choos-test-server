import { ApolloError } from "apollo-server-express";

export const ErrorString = {
  NotExistingUser: '해당하는 유저를 찾을 수 없습니다.',
  NotExistingToken: '해당하는 토큰를 찾을 수 없습니다.',
  IncorrectPhoneNumber: '옳바르지 않은 형식의 번호입니다.',
  IncorrectPassword: '옳바르지 않은 형식의 비밀번호입니다.',
  WrongPassword: '잘못된 비밀번호입니다.',
};

export const ErrorVerified = (message: string): ApolloError => new ApolloError(
  message,
  'ErrorVerified', {
    parameter: 'verified',
  },
);

export const ErrorPhoneNumber = (message: string): ApolloError => new ApolloError(
  message,
  'ErrorPhoneNumber', {
    parameter: 'phoneNumber',
  },
);

export const ErrorPassword = (message: string): ApolloError => new ApolloError(
  message,
  'ErrorPassword', {
    parameter: 'password',
  },
);
