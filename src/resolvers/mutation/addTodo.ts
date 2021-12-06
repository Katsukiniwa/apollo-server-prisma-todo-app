import {prisma} from '../../lib/prisma'
import {MutationResolvers} from '../../types/generated/graphql'

export const addTodo: MutationResolvers['addTodo'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id
  if (!userId) {
    console.error('Authorization Error')
    throw new Error('Authorization Error')
  }

  const todo = await prisma.todo.create({
    data: {
      title: args.input.title,
      status: 'pending',
      userId: userId
    },
    include: {
      user: true
    }
  })

  return todo
}
