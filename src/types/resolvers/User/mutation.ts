import { mutationField, stringArg } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { Context } from 'context';
import { NexusGenRootTypes } from 'generated/nexus';
import { sign } from 'jsonwebtoken';

import {
  APP_SECRET, encryptCredential, getUserId, validateCredential, validatePassword, validatePhoneNumber,
} from '~/utils/auth';
import {
  ErrorPassword, ErrorPhoneNumber, ErrorVerified, ErrorString,
} from '~/utils/error';
import { AuthType, Gender } from '~/types/models/Scalar';

// interface SocialUserInput {
//   socialId: string;
//   authType: AuthType;
//   name: string;
//   phoneNumber: string;
//   birthday?: Date;
//   gender?: Gender;
// }

export const signUp = mutationField('signUp', {
  type: 'User',
  args: {
    user: 'UserCreateInput',
  },
  resolve: async (_, { user }, ctx) => {
    const {
      phoneNumber,
      password,
      name,
      photoURL,
      birthday,
      gender,
    } = user!;

    if (!phoneNumber) throw ErrorPhoneNumber(ErrorString.IncorrectPhoneNumber);
    if (!password) throw ErrorPassword(ErrorString.IncorrectPassword);

    const hashedPassword = await encryptCredential(password);
    const created = await ctx.prisma.user.create({
      data: {
        phoneNumber,
        password: hashedPassword,
        name,
        photoURL,
        birthday,
        gender,
      },
    });
    return created;
  },
});

export const userUpdate = mutationField('userUpdate', {
  type: 'User',
  args: {
    user: 'UserUpdateInput',
  },
  resolve: async (_, { user }, ctx) => {
    const {
      password,
      name,
      photoURL,
      birthday,
      gender,
    } = user!;

    const userId = getUserId(ctx);
    const data: typeof user = {};
    if (!!password && validatePassword(password)) throw ErrorPassword(ErrorString.IncorrectPassword);
    const hashedPassword = !!password && await encryptCredential(password);

    if (!userId) throw ErrorVerified(ErrorString.NotExistingToken);
    if (hashedPassword) data.password = hashedPassword;
    if (name) data.name = name;
    if (photoURL) data.photoURL = photoURL;
    if (birthday) data.birthday = birthday;
    if (gender) data.gender = gender;

    const created = await ctx.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
    return created;
  },
});

export const signInPhoneNumber = mutationField('signInPhoneNumber', {
  type: 'AuthPayload',
  args: {
    phoneNumber: stringArg({ nullable: true }),
    password: stringArg({ nullable: true }),
  },
  resolve: async (_, { phoneNumber, password }, ctx) => {
    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) throw ErrorPhoneNumber(ErrorString.IncorrectPhoneNumber);
    if (!password || !validatePassword(password)) throw ErrorPassword(ErrorString.IncorrectPassword);

    // const { pubsub } = ctx; // 구독시 필요함
    const user = await ctx.prisma.user.findOne({
      where: {
        phoneNumber,
      },
    });

    if (!user) throw ErrorVerified(ErrorString.NotExistingUser);

    const passwordValid = await validateCredential(password, user.password || '');
    if (!passwordValid) throw ErrorPassword(ErrorString.WrongPassword);

    ctx.prisma.user.update({
      where: {
        phoneNumber,
      },
      data: { lastSignedIn: new Date().toISOString() },
    });

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
});
