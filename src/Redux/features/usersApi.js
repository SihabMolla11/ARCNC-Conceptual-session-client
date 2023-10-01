import baseApi from "../baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: ({ email, userData }) => ({
                url: `users/${email}`,
                method: "PUT",
                body: userData,
            }),
            invalidatesTags: ['refetch'],
        }),
    }),
});

export const { useAddUserMutation } = userApi;