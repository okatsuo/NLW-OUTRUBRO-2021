import { prisma } from '.prisma/client'
import prismaClient from '../prisma'

class UserProfileService {
  async handle(id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    return user
  }
}

export { UserProfileService }