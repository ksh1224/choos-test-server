import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const WeeklyCount = objectType({
  name: 'WeeklyCount',
  definition(t) {
    t.model.userId();
    t.model.createdAt();
    t.model.count();
  },
});
