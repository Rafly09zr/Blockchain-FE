'use client'
import { useQuery } from '@tanstack/react-query'

import { axios } from '../../lib/axios'

export const useGetProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get(`/products`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export const useGetProductBefore = (id) => {
  return useQuery({
    queryKey: ['Before', id],
    queryFn: async () => {
      const res = await axios.get(`/products/${id}`)
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    revalidateOnMount: true, // Fetch data when the component mounts
    revalidateOnFocus: true, // Fetch data when the window gains focus
    revalidateOnReconnect: true, // Fetch data when the network reconnects
  })
}

export default useGetProduct
