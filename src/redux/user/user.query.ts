import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { IReduxUserParams,IReduxUserResponse,IReduxUser} from './user.d'

const baseUrl = "https://api.github.com/";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: retry(
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
    getUsersByUsername: builder.query({
      query: (arg) => ({
        url: `search/users`,
        method: "GET",
        params: arg.params,
      }),
      transformResponse: (response:any) => {
        return  response.items
        }
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersByUsernameQuery,
} = userApi;
