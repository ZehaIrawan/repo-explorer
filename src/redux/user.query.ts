import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { getToken } from "../../utils/getToken";
// import { getCurrentTimestamp } from "../../utils/getCurrentTimestamp";

const baseUrl = "https://api.github.com/";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
    baseQuery: retry(
    fetchBaseQuery({
      baseUrl,
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
        // console.log(response, "response")
        return response.items;
      },
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersByUsernameQuery,
} = userApi;
