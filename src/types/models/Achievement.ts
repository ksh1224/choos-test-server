import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const Achievement = objectType({
  name: 'Achievement',
  definition(t) {
    t.model.id();
    t.model.percent();
    t.field('user', { type: 'User', nullable: false });
    t.field('mission', { type: 'Mission', nullable: false });
  },
});
