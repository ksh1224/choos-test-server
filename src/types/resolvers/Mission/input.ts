import { inputObjectType } from "@nexus/schema";

export const missionCreateInputType = inputObjectType({
  name: 'missionCreateInput',
  definition(t) {
    t.string('title', {
      required: true,
    });
    t.string('discription', {
      required: true,
    });
    t.string('reward');
    t.string('startAt');
    t.date('endAt');
    t.list.int("conditionIds");
  },
});

export const missionUpdateInputType = inputObjectType({
  name: 'missionUpdateInput',
  definition(t) {
    t.int('id', {
      required: true,
    });
    t.string('title');
    t.string('discription');
    t.string('reward');
    t.string('startAt');
    t.date('endAt');
    t.list.int("conditionIds");
  },
});
