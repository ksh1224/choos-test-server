import { queryField, stringArg } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from '~/utils/auth';
import { ErrorString, ErrorVerified } from '~/utils/error';

export const workOutQueryField = queryField((t) => {
  t.connectionField("loadWorkOut",
    {
      type: "WorkOut",
      description: '내 운동 불러오기',
      async nodes(_, args, ctx) {
        const id = getUserId(ctx);
        const workOuts = await ctx.prisma.workOut.findMany({
          where: {
            user: {
              id,
            },
          },
          orderBy: { id: 'desc' },
        });
        return workOuts;
      },
    });
});
