import { intArg, mutationField } from "@nexus/schema";

export const missionMutationField = mutationField((t) => {});

export const missionAdminMutationField = mutationField((t) => {
  t.field('createMission', {
    type: "Mission",
    description: "미션 생성",
    args: {
      mission: 'missionCreateInput',
    },
    resolve: async (_, { mission }, ctx) => {
      const {
        title, discription, reward, startAt, endAt, conditionIds,
      } = mission!;

      return await ctx.prisma.mission.create({
        data: {
          title,
          discription,
          reward,
          startAt,
          endAt,
          conditions: {
            connect: (
              conditionIds
                ? [...conditionIds?.reduce((pre: {id: number}[], conditionId) => {
                  if (conditionId) return [...pre, { id: conditionId }];
                  return pre;
                }, [])]
                : undefined
            ),
          },
        },
      });
    },
  });

  t.field('updagteMission', {
    type: "Mission",
    description: "미션 업데이트",
    args: {
      mission: 'missionUpdateInput',
    },
    resolve: async (_, { mission }, ctx) => {
      const {
        id, title, discription, reward, startAt, endAt, conditionIds,
      } = mission!;

      return await ctx.prisma.mission.update({
        where: { id },
        data: {
          title,
          discription,
          reward,
          startAt,
          endAt,
          conditions: {
            connect: (
              conditionIds
                ? [...conditionIds?.reduce((pre: {id: number}[], conditionId) => {
                  if (conditionId) return [...pre, { id: conditionId }];
                  return pre;
                }, [])]
                : undefined
            ),
          },
        },
      });
    },
  });

  t.field('selectWinner', {
    type: "Mission",
    description: "당첨자 지정",
    args: {
      missionId: intArg({ required: true }),
      userId: intArg({ required: true }),
    },
    resolve: async (_, { missionId, userId }, ctx) => await ctx.prisma.mission.update({
      where: { id: missionId },
      data: {
        winner: { connect: { id: userId } },
      },
    }),
  });
});
