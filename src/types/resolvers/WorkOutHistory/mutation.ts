import { intArg, mutationField } from "@nexus/schema";
import { getUserId } from "~/utils/auth";

export const workOutHistoryMutationField = mutationField((t) => {
  t.field('createWorkOutHistory', {
    type: "WorkOutHistory",
    description: "운동 히스토리 생성",
    args: {
      workOutHistory: 'createWorkOutHistoryInput',
    },
    resolve: async (_, { workOutHistory }, ctx) => {
      const { workOutId, workOutDate } = workOutHistory!;
      const userId = getUserId(ctx);
      return await ctx.prisma.workOutHistory.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          workOut: {
            connect: {
              id: workOutId,
            },
          },
          workOutDate,
        },
      });
    },
  });
});
