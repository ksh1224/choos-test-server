import { objectType } from '@nexus/schema';

export const WorkOutHistory = objectType({
  name: 'WorkOutHistory',
  definition(t) {
    t.model.workOutDate();
    t.field('user', { type: 'User', nullable: true });
    t.field('workOut', { type: 'WorkOut', nullable: true });
  },
});
