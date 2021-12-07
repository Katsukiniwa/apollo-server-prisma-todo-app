import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const createUser: MutationResolvers['createUser'] = async (
  parent,
  args,
  context,
  info
) => {
  console.log(args.input)
  console.log(args.id)
  console.log('called createUser')
  
  // const userId = context.user?.id;
  // if (!userId) {
  //   throw new Error('Authentication Error.');
  // }

  // console.log(userId)

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: userId,
  //   },
  // });

  // if (user) {
  //   throw new Error('Already exists user.');
  // }

  // if (!args.input) {
  //   throw new Error('input undefined')
  // }

  const createdUser = await prisma.user.create({
    data: {
      id: args.id,
      name: args.input.name,
    },
  });
  console.log(createdUser)

  return createdUser;
};
