import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const WeeklyAccTime = objectType({
  name: 'WeeklyAccTime',
  definition(t) {
    t.model.userId();
    t.model.createdAt();
    t.model.accTime();
  },
});
