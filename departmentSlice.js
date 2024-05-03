import { apiSlice } from './apiSlice'

export const departmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    studentFee: builder.mutation({
      query: (data) => ({
        url: '/api/dept/studentFee',
        method: 'POST',
        body: data,
      }),
    }),

    repairs: builder.mutation({
      query: (data) => ({
        url: '/api/dept/adminMsg',
        method: 'POST',
        body: data,
      }),
    }),

    approveRepairs: builder.mutation({
      query: (id) => ({
        url: `/api/dept/adminMsg/${id}`,
        method: 'PATCH',
      }),
    }),

    messages: builder.query({
      query: () => ({
        url: '/api/dept/adminMsg',
      }),
    }),
  }),
})

export const {
  useStudentFeeMutation,
  useRepairsMutation,
  useMessagesQuery,
  useApproveRepairsMutation,
} = departmentApiSlice
