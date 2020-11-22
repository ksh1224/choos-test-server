import { inputObjectType } from "@nexus/schema";

export const conditionInputType = inputObjectType({
  name: 'conditionInput',
  definition(t) {
    t.missionType('missionType', { required: true });
    t.int('value', { required: true });
  },
});

export const conditionSearchInputType = inputObjectType({
  name: 'conditionSearchInput',
  definition(t) {
    t.missionType('missionType');
    t.int('value');
  },
});
