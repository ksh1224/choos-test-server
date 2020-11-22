import { inputObjectType } from "@nexus/schema";

export const userCreateInputType = inputObjectType({
  name: 'userCreateInput',
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

export const userUpdateInputType = inputObjectType({
  name: 'userUpdateInput',
  definition(t) {
    t.string('password');
    t.string('name');
    t.string('photoURL');
    t.date('birthday');
    t.gender('gender');
  },
});
