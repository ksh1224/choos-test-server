import { objectType } from '@nexus/schema';
import { sep } from 'path';

// export const Profile = objectType({
//   name: 'Profile',
//   definition(t) {
//     t.model.socialId();
//     t.model.authType();
//   },
// });

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.name();
    t.model.photoURL();
    t.model.birthday();
    t.model.gender();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.model.lastSignedIn();
    // t.model.profile();
  },
});
