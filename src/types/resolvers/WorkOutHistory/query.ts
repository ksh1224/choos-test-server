import { queryField, stringArg } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from '~/utils/auth';
import { ErrorString, ErrorVerified } from '~/utils/error';

export const workOutHistoryQueryField = queryField((t) => {
  t.connectionField("workOutHistorys",
    {
      type: "WorkOutHistory",
      additionalArgs: {
        workOutHistory: 'workOutHistorysInput',
      },
      description: '내 운동 불러오기',
      async nodes(_, { workOutHistory }, ctx) {
        const { startDate, endDate } = workOutHistory!;
        const id = getUserId(ctx);
        return await ctx.prisma.workOutHistory.findMany({
          where: {
            user: {
              id,
            },
            workOutDate: {
              gte: startDate,
              lte: endDate,
            },
          },
          orderBy: { workOutDate: 'desc' },
        });
      },
    });
});
