export interface IToken {
    success: boolean
    expires_at: string
    request_token: string
}

export interface ISession {
    session_id: string
    success: boolean
}
export interface IAccountAvatar {
    hash: string
}


export interface IAccountReducer {
    account: IAccount,
    isLoading: boolean
    error: string
}
export interface IAccount {
    avatar: {
        gravatar: IAccountAvatar
        tmdb: {
            avatar_path: string
        }
    }
    id: string
    iso_639_1: string
    iso_3166_1: string
    name: string
    include_adult: boolean
    username: string
}
