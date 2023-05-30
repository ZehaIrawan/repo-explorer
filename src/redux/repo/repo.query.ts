import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { IReduxRepoData, IReduxRepoParams} from './repo.d'

const baseUrl = "https://api.github.com/";

// Define a service using a base URL and expected endpoints
export const repoApi = createApi({
  reducerPath: "repoApi",
    baseQuery:  retry(
    fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
    const token =  import.meta.env.VITE_GITHUB_TOKEN;

        if(token){
          headers.set("Authorization", `Bearer ${token}`);
        }
          return headers;
        },
    }),
    { maxRetries: 3 },
  ),
  endpoints: (builder) => ({
    getReposByUsername: builder.query<IReduxRepoData[],IReduxRepoParams>({
      query: (arg:any) => ({
        url: `users/${arg.username}/repos`,
        method: "GET",
        params: arg.params,
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
useGetReposByUsernameQuery
} = repoApi;
