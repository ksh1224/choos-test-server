import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const WorkOut = objectType({
  name: 'WorkOut',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.missionType();
    t.model.reps();
    t.model.time();
    t.model.set();
    t.model.rest();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.field('user', { type: 'User', nullable: true });
  },
});
