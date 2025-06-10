import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6848a7afec44b9f3494193f5.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productsApi;
