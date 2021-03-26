import { inputObjectType } from "@nexus/schema";
import { MissionType } from "@prisma/client";

export const createWorkOutHistoryInputType = inputObjectType({
  name: 'createWorkOutHistoryInput',
  definition(t) {
    t.int('workOutId', { required: true });
    t.date('workOutDate', { required: true });
  },
});
export const workOutHistorysInputType = inputObjectType({
  name: 'workOutHistorysInput',
  definition(t) {
    t.date('startDate', { required: true });
    t.date('endDate', { required: true });
  },
});
