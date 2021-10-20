import { User } from "../database/models"

export const ProfileUserService = async (userId: string) => {
    const user = await User.findByPk(userId)

    return user
}
