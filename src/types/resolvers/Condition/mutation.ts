import { intArg, mutationField } from "@nexus/schema";
import { ApolloError } from "apollo-server-express";

export const conditionMutationField = mutationField((t) => {
  t.field('createCondition', {
    type: "Condition",
    description: "조건 추가",
    args: {
      mission: "conditionInput",
    },
    resolve: async (_, { mission }, ctx) => {
      const { missionType, value } = mission!;
      const condition = ctx.prisma.condition.findFirst({
        where: {
          missionType,
          value,
        },
      });
      if (!condition) {
        return await ctx.prisma.condition.create({
          data: {
            missionType,
            value,
          },
        });
      }
      throw new ApolloError('조건이 존재합니다.', 'ErrorCondition', {
        parameter: 'condition',
      });
    },
  });
});
