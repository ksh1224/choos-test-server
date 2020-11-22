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
    t.model.phoneNumber();
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
    t.model.totalAccTime();
    t.model.totalCount();
    t.list.field('workOuts', { type: 'WorkOut', nullable: true });
    t.list.field('missions', { type: 'Mission', nullable: true });
    t.list.field('goals', { type: 'Goal', nullable: true });
  },
});
