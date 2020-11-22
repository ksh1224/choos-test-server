import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const Goal = objectType({
  name: 'Goal',
  definition(t) {
    t.model.percent();
    t.model.createdAt();
    t.field('user', { type: 'User', nullable: true });
    t.field('mission', { type: 'Mission', nullable: true });
  },
});
