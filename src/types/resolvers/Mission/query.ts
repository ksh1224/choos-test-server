import { intArg, queryField, stringArg } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from 'utils/auth';
import { ErrorString, ErrorVerified } from '~/utils/error';

export const missionQueryField = queryField((t) => {
  t.connectionField('missions', {
    type: 'Mission',
    description: '완료된 미션 리스트',
    async nodes(_, args, ctx) {
      return await ctx.prisma.mission.findMany({
        where: {
          NOT: {
            winner: undefined,
          },
        },
        orderBy: { id: 'desc' },
      });
    },
  });

  t.connectionField('incompleteMissions', {
    type: 'Mission',
    description: '미완료된 미션 리스트',
    async nodes(_, args, ctx) {
      const userId = getUserId(ctx);
      return await ctx.prisma.mission.findMany({
        where: {
          winner: undefined,
        },
        include: {
          goals: {
            where: {
              userId,
            },
          },
        },
        orderBy: { id: 'desc' },
      });
    },
  });

  t.field('targetMission', {
    type: 'Mission',
    description: '선택한 미션',
    args: { id: intArg(), winnerId: intArg() },
    resolve: async (_, { id }, ctx) => await ctx.prisma.mission.findOne({
      where: {
        id,
      },
    }),
  });
});
