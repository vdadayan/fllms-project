import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ISession, IToken} from "../models/IAuth";
import {api_key} from "../api/api";


// export const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
//     endpoints: (build) => ({
//         getToken: build.query<IToken, string>({
//             query: () => ({
//                 url: '/authentication/token/new',
//                 params: {
//                     api_key: api_key
//                 }
//             })
//         }),
//         postSession: build.mutation<ISession, string>({
//             query: (token) => ({
//                 method: 'POST',
//                 url: '/authentication/session/new',
//                 params: {
//                     api_key: api_key
//                 },
//                 body: {
//                     request_token: token
//                 }
//             })
//         }),
//     })
// })
