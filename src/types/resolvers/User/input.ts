import { inputObjectType } from "@nexus/schema";

export const UserInputType = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.string('phoneNumber', {
      required: true,
    });
    t.string('password', {
      required: true,
    });
    t.string('name');
    t.string('photoURL');
    t.date('birthday');
    t.gender('gender');
  },
});

export const UserUpdateInputType = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('password');
    t.string('name');
    t.string('photoURL');
    t.date('birthday');
    t.gender('gender');
  },
});
