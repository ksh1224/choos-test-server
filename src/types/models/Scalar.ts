import { asNexusMethod, scalarType } from '@nexus/schema';

import { GraphQLDate } from 'graphql-iso-date';

export enum AuthType {
  email = 'email',
  facebook = 'facebook',
  google = 'google',
  apple = 'apple',
}

export const Auth = scalarType({
  name: 'Auth',
  asNexusMethod: 'auth',
  parseValue(value: AuthType): AuthType | undefined {
    if (AuthType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export enum Gender {
  male = 'male',
  female = 'female',
}

export const gender = scalarType({
  name: 'Gender',
  asNexusMethod: 'gender',
  parseValue(value: Gender): Gender | undefined {
    if (Gender[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export enum MissionType {
  tabata = "tabata",
  static = "static",
  setreps = "setreps",
  maxreps = "maxreps",
  workOutTime = "workOutTime",
  totalCount = "totalCount",
  totalAccTime = "totalAccTime",
}

export const missionType = scalarType({
  name: 'MissionType',
  asNexusMethod: 'missionType',
  parseValue(value: MissionType): MissionType | undefined {
    if (MissionType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export enum WorkOutType {
  apply= 'apply',
  fail= 'fail',
  waiting= 'waiting',
  pass= 'pass',
  attending= 'attending',
  cancel= 'cancel',
}

export const workOutType = scalarType({
  name: 'WorkOutType',
  asNexusMethod: 'workOutType',
  parseValue(value: WorkOutType): WorkOutType | undefined {
    if (WorkOutType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export const GQLDate = asNexusMethod(GraphQLDate, "date", "Date");
