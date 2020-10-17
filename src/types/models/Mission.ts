import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const Mission = objectType({
  name: 'Mission',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.missionType();
    t.model.workOutId();
    t.model.WorkOut();
    t.model.userId();
  },
});
