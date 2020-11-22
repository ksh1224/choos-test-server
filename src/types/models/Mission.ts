import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const Mission = objectType({
  name: 'Mission',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.discription();
    t.model.reward();
    t.model.startAt();
    t.model.endAt();
    t.field('winner', { type: 'User', nullable: true });
    t.list.field('goals', { type: 'Goal', nullable: true });
    t.list.field('conditions', { type: 'Condition', nullable: true });
  },
});
