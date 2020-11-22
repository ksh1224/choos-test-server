import { inputObjectType } from "@nexus/schema";
import { MissionType } from "@prisma/client";

export const workOutInputType = inputObjectType({
  name: 'workOutInput',
  definition(t) {
    t.missionType("missionType");
    t.string("name");
    t.int("reps");
    t.int("time");
    t.int("set");
    t.int("rest");
  },
});
