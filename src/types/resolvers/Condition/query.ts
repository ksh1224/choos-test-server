import { intArg, queryField } from "@nexus/schema";

export const conditionQueryField = queryField((t) => {
  t.connectionField('conditions', {
    type: "Condition",
    description: "조건 조회",
    additionalArgs: {
      mission: "conditionSearchInput",
    },
    async nodes(_, { mission }, ctx) {
      const { missionType, value } = mission!;
      return await ctx.prisma.condition.findMany({
        where: {
          missionType,
          value,
        },
      });
    },
  });
});
