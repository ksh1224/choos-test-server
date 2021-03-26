import { objectType } from '@nexus/schema';

export const Goal = objectType({
  name: 'Goal',
  definition(t) {
    t.model.percent();
    t.model.createdAt();
    t.field('user', { type: 'User', nullable: true });
    t.field('mission', { type: 'Mission', nullable: true });
  },
});
