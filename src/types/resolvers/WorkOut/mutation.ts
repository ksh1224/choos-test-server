import { intArg, mutationField } from "@nexus/schema";
import { getUserId } from "~/utils/auth";

export const workOutMutationField = mutationField((t) => {
  t.field('createWorkOut', {
    type: "WorkOut",
    description: "운동 생성",
    args: {
      workOut: "workOutInput",
    },
    resolve: async (_, { workOut }, ctx) => {
      const {
        missionType, name, reps, rest, set, time,
      } = workOut!;
      const userId = getUserId(ctx);

      return await ctx.prisma.workOut.create({
        data: {
          missionType,
          name,
          reps,
          rest,
          set,
          time,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    },
  });

  t.field('updateWorkOut', {
    type: "WorkOut",
    description: "운동 업데이트",
    args: {
      id: intArg({ required: true }),
      workOut: "workOutInput",
    },
    resolve: async (_, { id, workOut }, ctx) => {
      const {
        missionType, name, reps, rest, set, time,
      } = workOut!;
      return await ctx.prisma.workOut.update({
        where: {
          id,
        },
        data: {
          missionType,
          name,
          reps,
          rest,
          set,
          time,
        },
      });
    },
  });

  t.field('deleteWorkOut', {
    type: "WorkOut",
    description: "운동 삭제",
    args: {
      id: intArg({ required: true }),
    },
    resolve: async (_, { id }, ctx) => ctx.prisma.workOut.delete({
      where: {
        id,
      },
    }),
  });
});
