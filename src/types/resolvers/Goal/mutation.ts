/* eslint-disable no-param-reassign */
import { intArg, mutationField, queryField } from "@nexus/schema";
import { ErrorVerified, ErrorString } from "~/utils/error";
import { getUserId } from "~/utils/auth";

export const goalMutationField = mutationField((t) => {
  t.field('createGoal', {
    type: "Goal",
    description: "달성률 추가",
    args: {
      userId: intArg(),
      missionId: intArg({ required: true }),
    },
    resolve: async (_, { userId, missionId }, ctx) => {
      if (!userId) userId = getUserId(ctx);
      if (!userId) throw ErrorVerified(ErrorString.NotExistingToken);
      return await ctx.prisma.goal.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          mission: {
            connect: {
              id: missionId,
            },
          },
          percent: 0,
        },
      });
    },
  });

  t.field('updateGoal', {
    type: 'Goal',
    description: "달성률 업데이트",
    nullable: false,
    args: {
      userId: intArg(),
      missionId: intArg({ required: true }),
      percent: intArg({ required: true }),
    },
    resolve: async (_, { userId, missionId, percent }, ctx) => {
      if (!userId) userId = getUserId(ctx);
      if (!userId) throw ErrorVerified(ErrorString.NotExistingToken);
      return await ctx.prisma.goal.update({
        where: {
          userId_missionId: {
            userId,
            missionId,
          },
        },
        data: {
          percent: percent || 0,
        },
      });
    },
  });
});
