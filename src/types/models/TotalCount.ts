import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const TotalCount = objectType({
  name: 'TotalCount',
  definition(t) {
    t.model.userId();
    t.model.createdAt();
    t.model.deletedAt();
    t.model.count();
    t.field('user', { type: 'User', nullable: false });
  },
});
