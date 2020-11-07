import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const Condition = objectType({
  name: 'Condition',
  definition(t) {
    t.model.id();
    t.model.missionType();
    t.model.value();
    t.list.field('missions', { type: 'Mission', nullable: true });
  },
});
