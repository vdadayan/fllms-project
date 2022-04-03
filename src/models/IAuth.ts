export interface IToken {
    success: boolean
    expires_at: string
    request_token: string
}

export interface ISession {
    session_id: string
    success: boolean
}
