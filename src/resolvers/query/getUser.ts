import { prisma } from '../../../src/lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (
  parent,
  args,
  context,
  info
) => {
  console.log('called getUser')
  console.log(context)
  const user = await prisma.user.findUnique({
    where: {
      id: context.user?.id,
    },
  });
  return user;
};
