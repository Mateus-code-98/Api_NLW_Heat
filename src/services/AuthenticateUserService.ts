import axios from "axios";
import { User } from './../database/models/index';
import { sign } from 'jsonwebtoken';

interface IAccessTokenResponse {
    access_token: String;
}

interface IUserResponse {
    avatar_url: string;
    login: string;
    id: number;
    name: string;
}

export const AuthenticateUserService = async (code: string) => {
    const url = "https://github.com/login/oauth/access_token"

    const { data } = await axios.post<IAccessTokenResponse>(url, null, {
        params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
        },
        headers: {
            Accept: "application/json"
        }
    })

    const response = await axios.get<IUserResponse>("https://api.github.com/user", {
        headers: {
            authorization: `Bearer ${data.access_token}`
        }
    })

    const { avatar_url, id, login, name } = response.data

    let user = await User.findOne({ where: { github_id: id } })

    if (!user) user = await User.create({ github_id: id, login, avatar_url, name })

    const token = sign(
        {
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id
            }
        },
        process.env.JWT_SECRET as string,
        {
            subject: user.id,
            expiresIn: process.env.JWT_EXPIRESIN
        }
    )

    return { token, user }
}